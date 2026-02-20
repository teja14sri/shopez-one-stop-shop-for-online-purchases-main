import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className={`group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden card-glow stagger-item`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden image-hover-zoom">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
          />
          
          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 text-xs font-bold rounded-full animate-bounce-in shadow-lg">
              -{discountPercentage}%
            </div>
          )}
          
          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold bg-red-500 px-4 py-2 rounded-full animate-pulse">
                Out of Stock
              </span>
            </div>
          )}
          
          {/* Hover Actions Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
            <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 shadow-lg"
                title="Add to Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              
              <button
                className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Add to Wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
              
              <Link
                to={`/products/${product.id}`}
                className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Quick View"
              >
                <Eye className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        </div>

        <div className="p-5">
          {/* Brand */}
          <p className="text-sm text-blue-600 font-medium mb-1 group-hover:text-blue-700 transition-colors">
            {product.brand}
          </p>
          
          {/* Product Name */}
          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2 text-lg">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 transition-colors duration-200 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2 font-medium">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Stock Indicator */}
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-xs text-gray-500">
                {product.stockQuantity} left
              </span>
            </div>
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;