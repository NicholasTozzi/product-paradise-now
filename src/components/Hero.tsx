
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px]" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <Star className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Trusted by 10,000+ customers</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Discover
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Premium </span>
                Products
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Explore our curated collection of high-quality products designed to elevate your lifestyle. From fashion to tech, we've got everything you need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-50">
                View Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Shopping" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50%</div>
                <div className="text-xs text-gray-600">OFF</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-32 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center z-20">
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-900">Free Shipping</div>
                <div className="text-xs text-gray-600">On orders $50+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
