
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Star, Minus, Plus } from 'lucide-react';
import { Product } from './ProductCard';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
    onClose();
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-md">
                    {product.badge}
                  </span>
                </div>
              )}
              
              {discountPercentage > 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-md">
                    -{discountPercentage}%
                  </span>
                </div>
              )}

              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Additional product images would go here */}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-blue-600 font-medium mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="text-green-600 font-semibold">
                    Save {discountPercentage}%
                  </span>
                )}
              </div>
            </div>

            {/* Product Description */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                This premium product offers exceptional quality and style. Crafted with attention to detail, 
                it combines functionality with elegant design. Perfect for those who appreciate quality 
                and want to make a statement with their choices.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Premium quality materials
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Durable and long-lasting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Modern design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Free shipping on orders over $50
                </li>
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>SKU:</span>
                <span>#{product.id.toString().padStart(6, '0')}</span>
              </div>
              <div className="flex justify-between">
                <span>Category:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Availability:</span>
                <span className="text-green-600">In Stock</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
