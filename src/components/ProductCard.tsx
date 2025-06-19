
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Heart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onProductClick }: ProductCardProps) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-md">
      <div className="relative overflow-hidden">
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-md">
              {product.badge}
            </span>
          </div>
        )}
        
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-md">
              -{discountPercentage}%
            </span>
          </div>
        )}

        <div 
          className="aspect-square overflow-hidden bg-gray-100"
          onClick={() => onProductClick(product)}
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 backdrop-blur-sm hover:bg-white/90"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-500 font-medium">{product.category}</p>
          <h3 
            className="font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors"
            onClick={() => onProductClick(product)}
          >
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <Button 
            onClick={() => onAddToCart(product)}
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
