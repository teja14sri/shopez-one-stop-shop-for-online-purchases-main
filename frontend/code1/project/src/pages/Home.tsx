import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Users, Truck, Zap, Shield, Award } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { products, loading } = useProducts();

  const featuredProducts = products.slice(0, 8);
  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      description: 'Latest tech gadgets and electronics',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Fashion',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
      description: 'Trendy clothing and accessories',
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Home',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg',
      description: 'Home appliances and decor',
      color: 'from-green-500 to-teal-600'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg animate-pulse">Loading amazing products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Welcome to{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                ShopEZ
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay max-w-3xl mx-auto">
              Discover amazing products at unbeatable prices. Your ultimate shopping destination with premium quality and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products?category=Electronics"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                <span>Explore Electronics</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Why Choose ShopEZ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
              Experience the future of online shopping with our cutting-edge platform designed for your convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: 'Quality Products',
                description: 'Carefully curated products from trusted brands worldwide',
                color: 'from-blue-500 to-blue-600',
                delay: '0.1s'
              },
              {
                icon: Truck,
                title: 'Fast Delivery',
                description: 'Lightning-fast shipping to get your orders delivered on time',
                color: 'from-green-500 to-green-600',
                delay: '0.2s'
              },
              {
                icon: Shield,
                title: 'Secure Shopping',
                description: 'Advanced security measures to protect your personal information',
                color: 'from-purple-500 to-purple-600',
                delay: '0.3s'
              },
              {
                icon: Award,
                title: '24/7 Support',
                description: 'Round-the-clock customer support for all your queries',
                color: 'from-orange-500 to-orange-600',
                delay: '0.4s'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center group hover-lift animate-fade-in"
                style={{ animationDelay: feature.delay }}
              >
                <div className={`bg-gradient-to-r ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Shop by Category</h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">Explore our diverse range of premium product categories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name}`}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-3 text-shadow-lg">{category.name}</h3>
                    <p className="text-lg opacity-90 text-shadow">{category.description}</p>
                    <div className="mt-4 inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="font-semibold">Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-xl text-gray-600">Discover our most popular and highly-rated products</p>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-bold transition-colors group animate-fade-in-delay"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <div className="text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">Join thousands of satisfied customers who love shopping with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                rating: 5,
                comment: 'Amazing products and super fast delivery! The quality exceeded my expectations. Will definitely shop again.',
                avatar: '👩‍💼',
                delay: '0.1s'
              },
              {
                name: 'Mike Chen',
                rating: 5,
                comment: 'Outstanding customer service and premium quality products. The shopping experience was seamless and enjoyable.',
                avatar: '👨‍💻',
                delay: '0.2s'
              },
              {
                name: 'Emily Davis',
                rating: 5,
                comment: 'Best online shopping experience I\'ve ever had! Everything was perfect from browsing to delivery.',
                avatar: '👩‍🎨',
                delay: '0.3s'
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in card-glow"
                style={{ animationDelay: testimonial.delay }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-delay">
            Join millions of happy customers and discover amazing deals on premium products.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl animate-bounce-in"
          >
            <Users className="w-5 h-5" />
            <span>Join ShopEZ Today</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;