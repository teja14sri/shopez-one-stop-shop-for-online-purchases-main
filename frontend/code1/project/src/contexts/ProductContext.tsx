import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';
import { productService } from '../services/productService';

interface ProductContextType {
  products: Product[];
  loading: boolean;
  categories: string[];
  searchProducts: (query: string) => Product[];
  getProductsByCategory: (category: string) => Product[];
  getProduct: (id: string) => Product | undefined;
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => Promise<Product>;
  updateProduct: (id: string, updates: Partial<Product>) => Promise<Product>;
  deleteProduct: (id: string) => Promise<boolean>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await productService.getAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const categories = [...new Set(products.map(product => product.category))];

  const searchProducts = (query: string): Product[] => {
    if (!query.trim()) return products;
    
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery)
    );
  };

  const getProductsByCategory = (category: string): Product[] => {
    return products.filter(product => product.category === category);
  };

  const getProduct = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };

  const addProduct = async (productData: Omit<Product, 'id' | 'createdAt'>): Promise<Product> => {
    const newProduct = await productService.createProduct(productData);
    setProducts(current => [...current, newProduct]);
    return newProduct;
  };

  const updateProduct = async (id: string, updates: Partial<Product>): Promise<Product> => {
    const updatedProduct = await productService.updateProduct(id, updates);
    setProducts(current =>
      current.map(product => product.id === id ? updatedProduct : product)
    );
    return updatedProduct;
  };

  const deleteProduct = async (id: string): Promise<boolean> => {
    const success = await productService.deleteProduct(id);
    if (success) {
      setProducts(current => current.filter(product => product.id !== id));
    }
    return success;
  };

  const value = {
    products,
    loading,
    categories,
    searchProducts,
    getProductsByCategory,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};