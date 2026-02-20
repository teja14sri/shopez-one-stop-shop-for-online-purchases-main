import { Product } from '../types';

const PRODUCTS_KEY = 'shopez_products';

// Expanded product data with more variety
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'Latest iPhone with advanced camera system and A17 Pro chip. Experience the most powerful iPhone ever with titanium design.',
    price: 1199,
    originalPrice: 1299,
    category: 'Electronics',
    brand: 'Apple',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg'
    ],
    rating: 4.8,
    reviewCount: 1250,
    inStock: true,
    stockQuantity: 45,
    specifications: {
      'Display': '6.7-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Camera': '48MP Main + 12MP Ultra Wide',
      'Storage': '256GB',
      'Battery': 'All-day battery life'
    },
    features: [
      'Dynamic Island',
      'Always-On display',
      'ProMotion technology',
      'Face ID',
      '5G capable'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android smartphone with S Pen and advanced AI features. The ultimate productivity powerhouse.',
    price: 1099,
    originalPrice: 1199,
    category: 'Electronics',
    brand: 'Samsung',
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg',
      'https://images.pexels.com/photos/3999785/pexels-photo-3999785.jpeg'
    ],
    rating: 4.7,
    reviewCount: 980,
    inStock: true,
    stockQuantity: 32,
    specifications: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': '200MP Main + 50MP Periscope',
      'Storage': '512GB',
      'S Pen': 'Built-in S Pen'
    },
    features: [
      'S Pen included',
      'AI Photo Editing',
      '120Hz display',
      'Ultra Wideband',
      'Wireless charging'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'MacBook Pro 16-inch',
    description: 'Powerful laptop for professionals with M3 Pro chip. Unleash your creativity with unprecedented performance.',
    price: 2499,
    originalPrice: 2699,
    category: 'Electronics',
    brand: 'Apple',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
      'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg'
    ],
    rating: 4.9,
    reviewCount: 756,
    inStock: true,
    stockQuantity: 18,
    specifications: {
      'Display': '16.2-inch Liquid Retina XDR',
      'Chip': 'Apple M3 Pro',
      'Memory': '18GB Unified Memory',
      'Storage': '512GB SSD',
      'Battery': 'Up to 22 hours'
    },
    features: [
      'Liquid Retina XDR display',
      'M3 Pro chip',
      'Advanced thermal design',
      'Six-speaker sound system',
      'Touch ID'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling wireless headphones with premium sound quality and all-day comfort.',
    price: 349,
    originalPrice: 399,
    category: 'Electronics',
    brand: 'Sony',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg'
    ],
    rating: 4.6,
    reviewCount: 2340,
    inStock: true,
    stockQuantity: 67,
    specifications: {
      'Driver': '30mm',
      'Battery Life': '30 hours',
      'Charging': 'USB-C Quick Charge',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.2'
    },
    features: [
      'Industry-leading noise canceling',
      '30-hour battery life',
      'Quick charge',
      'Multipoint connection',
      'Speak-to-chat technology'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Max Air cushioning. Step into comfort and style with every stride.',
    price: 150,
    originalPrice: 180,
    category: 'Fashion',
    brand: 'Nike',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg'
    ],
    rating: 4.4,
    reviewCount: 1890,
    inStock: true,
    stockQuantity: 120,
    specifications: {
      'Upper': 'Textile and synthetic',
      'Sole': 'Rubber with Max Air',
      'Closure': 'Lace-up',
      'Fit': 'True to size',
      'Style': 'Low-top sneaker'
    },
    features: [
      'Max Air cushioning',
      'Breathable upper',
      'Durable rubber outsole',
      'Comfortable fit',
      'Versatile style'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'Levi\'s 501 Original Jeans',
    description: 'Classic straight-leg jeans with authentic fit and feel. The original blue jean since 1873.',
    price: 69,
    originalPrice: 89,
    category: 'Fashion',
    brand: 'Levi\'s',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
      'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg'
    ],
    rating: 4.3,
    reviewCount: 3450,
    inStock: true,
    stockQuantity: 85,
    specifications: {
      'Fit': 'Straight leg',
      'Rise': 'Mid-rise',
      'Material': '100% Cotton',
      'Closure': 'Button fly',
      'Care': 'Machine wash'
    },
    features: [
      'Original 501 fit',
      'Button fly',
      '100% cotton denim',
      'Straight leg',
      'Classic five-pocket styling'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '7',
    name: 'Dell XPS 13 Plus',
    description: 'Ultra-thin laptop with stunning InfinityEdge display and powerful Intel processors for productivity.',
    price: 1299,
    originalPrice: 1499,
    category: 'Electronics',
    brand: 'Dell',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
    ],
    rating: 4.5,
    reviewCount: 892,
    inStock: true,
    stockQuantity: 25,
    specifications: {
      'Display': '13.4-inch OLED InfinityEdge',
      'Processor': 'Intel Core i7-1360P',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Graphics': 'Intel Iris Xe'
    },
    features: [
      'OLED InfinityEdge display',
      'Premium aluminum build',
      'Thunderbolt 4 ports',
      'Windows Hello',
      'Ultra-portable design'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '8',
    name: 'AirPods Pro (2nd Gen)',
    description: 'Advanced noise cancellation and spatial audio. Experience music like never before with adaptive transparency.',
    price: 249,
    originalPrice: 279,
    category: 'Electronics',
    brand: 'Apple',
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg',
      'https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg'
    ],
    rating: 4.7,
    reviewCount: 1567,
    inStock: true,
    stockQuantity: 89,
    specifications: {
      'Chip': 'Apple H2',
      'Battery': '6 hours + 24 hours with case',
      'Connectivity': 'Bluetooth 5.3',
      'Water Resistance': 'IPX4',
      'Charging': 'Lightning + MagSafe'
    },
    features: [
      'Active Noise Cancellation',
      'Adaptive Transparency',
      'Spatial Audio',
      'Touch controls',
      'Find My support'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '9',
    name: 'Adidas Ultraboost 22',
    description: 'Premium running shoes with responsive BOOST midsole and Primeknit upper for ultimate comfort.',
    price: 190,
    originalPrice: 220,
    category: 'Fashion',
    brand: 'Adidas',
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg',
    images: [
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg',
      'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg'
    ],
    rating: 4.6,
    reviewCount: 2156,
    inStock: true,
    stockQuantity: 78,
    specifications: {
      'Upper': 'Primeknit textile',
      'Midsole': 'BOOST foam',
      'Outsole': 'Continental rubber',
      'Drop': '10mm',
      'Weight': '310g'
    },
    features: [
      'BOOST energy return',
      'Primeknit upper',
      'Continental rubber outsole',
      'Torsion System',
      'Sock-like fit'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '10',
    name: 'Calvin Klein Slim Fit Suit',
    description: 'Modern slim-fit suit perfect for business and formal occasions. Tailored for the contemporary professional.',
    price: 299,
    originalPrice: 399,
    category: 'Fashion',
    brand: 'Calvin Klein',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    rating: 4.4,
    reviewCount: 567,
    inStock: true,
    stockQuantity: 34,
    specifications: {
      'Fit': 'Slim fit',
      'Material': 'Wool blend',
      'Lining': 'Polyester',
      'Closure': 'Two-button',
      'Care': 'Dry clean only'
    },
    features: [
      'Slim-fit design',
      'Notched lapels',
      'Side vents',
      'Interior pockets',
      'Professional tailoring'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '11',
    name: 'Nintendo Switch OLED',
    description: 'Enhanced gaming console with vibrant OLED screen and improved audio for portable and docked gaming.',
    price: 349,
    originalPrice: 379,
    category: 'Electronics',
    brand: 'Nintendo',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    images: [
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg'
    ],
    rating: 4.8,
    reviewCount: 1834,
    inStock: true,
    stockQuantity: 56,
    specifications: {
      'Display': '7-inch OLED touchscreen',
      'Storage': '64GB internal',
      'Battery': '4.5-9 hours',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'Modes': 'TV, Tabletop, Handheld'
    },
    features: [
      'OLED display',
      'Enhanced audio',
      'Adjustable stand',
      'Dock included',
      'Joy-Con controllers'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '12',
    name: 'Zara Wool Blend Coat',
    description: 'Elegant wool blend coat with modern silhouette. Perfect for sophisticated style in cooler weather.',
    price: 129,
    originalPrice: 159,
    category: 'Fashion',
    brand: 'Zara',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    ],
    rating: 4.2,
    reviewCount: 789,
    inStock: true,
    stockQuantity: 42,
    specifications: {
      'Material': '70% Wool, 30% Polyester',
      'Fit': 'Regular fit',
      'Length': 'Mid-length',
      'Closure': 'Button front',
      'Care': 'Dry clean recommended'
    },
    features: [
      'Wool blend fabric',
      'Classic lapels',
      'Side pockets',
      'Lined interior',
      'Versatile styling'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '13',
    name: 'LG 55" OLED C3 Smart TV',
    description: 'Premium OLED TV with perfect blacks, infinite contrast, and webOS smart platform for entertainment.',
    price: 1399,
    originalPrice: 1599,
    category: 'Electronics',
    brand: 'LG',
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg',
      'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'
    ],
    rating: 4.7,
    reviewCount: 1245,
    inStock: true,
    stockQuantity: 23,
    specifications: {
      'Display': '55-inch OLED 4K',
      'Processor': 'α9 Gen6 AI',
      'HDR': 'Dolby Vision IQ',
      'Audio': 'Dolby Atmos',
      'OS': 'webOS 23'
    },
    features: [
      'Perfect blacks',
      'Infinite contrast',
      'Gaming features',
      'Magic Remote',
      'Voice control'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '14',
    name: 'Ray-Ban Aviator Sunglasses',
    description: 'Classic aviator sunglasses with premium lenses and timeless design. The ultimate style statement.',
    price: 154,
    originalPrice: 189,
    category: 'Fashion',
    brand: 'Ray-Ban',
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg',
      'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg'
    ],
    rating: 4.5,
    reviewCount: 2567,
    inStock: true,
    stockQuantity: 156,
    specifications: {
      'Frame': 'Metal',
      'Lens': 'Crystal Green G-15',
      'UV Protection': '100%',
      'Size': '58mm',
      'Bridge': '14mm'
    },
    features: [
      'Classic aviator design',
      'Premium crystal lenses',
      'Metal frame',
      'UV protection',
      'Iconic style'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '15',
    name: 'Dyson V15 Detect Vacuum',
    description: 'Advanced cordless vacuum with laser dust detection and powerful suction for deep cleaning.',
    price: 749,
    originalPrice: 849,
    category: 'Home',
    brand: 'Dyson',
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg',
    images: [
      'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg',
      'https://images.pexels.com/photos/4239090/pexels-photo-4239090.jpeg'
    ],
    rating: 4.6,
    reviewCount: 1123,
    inStock: true,
    stockQuantity: 38,
    specifications: {
      'Battery': 'Up to 60 minutes',
      'Bin Capacity': '0.77L',
      'Weight': '3.1kg',
      'Filtration': 'Advanced whole-machine',
      'Attachments': '8 tools included'
    },
    features: [
      'Laser dust detection',
      'Powerful suction',
      'LCD screen',
      'Versatile tools',
      'Whole-machine filtration'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '16',
    name: 'KitchenAid Stand Mixer',
    description: 'Professional-grade stand mixer for all your baking needs. Built to last with powerful motor and versatile attachments.',
    price: 379,
    originalPrice: 429,
    category: 'Home',
    brand: 'KitchenAid',
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg',
      'https://images.pexels.com/photos/4226797/pexels-photo-4226797.jpeg'
    ],
    rating: 4.8,
    reviewCount: 2890,
    inStock: true,
    stockQuantity: 47,
    specifications: {
      'Capacity': '5-quart bowl',
      'Power': '325 watts',
      'Speeds': '10 speeds',
      'Attachments': '3 included',
      'Material': 'Die-cast metal'
    },
    features: [
      'Powerful motor',
      'Planetary mixing action',
      'Tilt-head design',
      'Multiple attachments',
      'Durable construction'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '17',
    name: 'Instant Pot Duo 7-in-1',
    description: 'Multi-functional pressure cooker that replaces 7 kitchen appliances. Cook faster, healthier meals.',
    price: 99,
    originalPrice: 129,
    category: 'Home',
    brand: 'Instant Pot',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
    images: [
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
      'https://images.pexels.com/photos/4226141/pexels-photo-4226141.jpeg'
    ],
    rating: 4.7,
    reviewCount: 4567,
    inStock: true,
    stockQuantity: 89,
    specifications: {
      'Capacity': '6 quarts',
      'Functions': '7-in-1',
      'Pressure': 'High/Low',
      'Material': 'Stainless steel',
      'Safety': '10+ safety features'
    },
    features: [
      'Pressure cooker',
      'Slow cooker',
      'Rice cooker',
      'Steamer',
      'Sauté pan'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '18',
    name: 'Fitbit Charge 5',
    description: 'Advanced fitness tracker with built-in GPS, stress management, and health insights for active lifestyle.',
    price: 179,
    originalPrice: 199,
    category: 'Electronics',
    brand: 'Fitbit',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg'
    ],
    rating: 4.3,
    reviewCount: 1789,
    inStock: true,
    stockQuantity: 134,
    specifications: {
      'Display': 'Color AMOLED',
      'Battery': 'Up to 7 days',
      'GPS': 'Built-in',
      'Water Resistance': '50 meters',
      'Sensors': 'Heart rate, SpO2'
    },
    features: [
      'Built-in GPS',
      'Stress management',
      'Sleep tracking',
      'Workout modes',
      'Health insights'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '19',
    name: 'The North Face Puffer Jacket',
    description: 'Warm and lightweight puffer jacket with recycled down fill. Perfect for outdoor adventures and city wear.',
    price: 199,
    originalPrice: 249,
    category: 'Fashion',
    brand: 'The North Face',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    ],
    rating: 4.6,
    reviewCount: 1456,
    inStock: true,
    stockQuantity: 67,
    specifications: {
      'Fill': '600-fill recycled down',
      'Shell': 'Recycled nylon',
      'Fit': 'Standard fit',
      'Features': 'Packable design',
      'Care': 'Machine washable'
    },
    features: [
      'Recycled down fill',
      'Water-resistant',
      'Packable design',
      'Secure pockets',
      'Adjustable hem'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '20',
    name: 'Kindle Paperwhite',
    description: 'Waterproof e-reader with high-resolution display and adjustable warm light for comfortable reading.',
    price: 139,
    originalPrice: 159,
    category: 'Electronics',
    brand: 'Amazon',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    images: [
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
      'https://images.pexels.com/photos/1029142/pexels-photo-1029142.jpeg'
    ],
    rating: 4.5,
    reviewCount: 3456,
    inStock: true,
    stockQuantity: 98,
    specifications: {
      'Display': '6.8-inch glare-free',
      'Storage': '8GB',
      'Battery': 'Up to 10 weeks',
      'Connectivity': 'Wi-Fi',
      'Water Resistance': 'IPX8'
    },
    features: [
      'Glare-free display',
      'Adjustable warm light',
      'Waterproof design',
      'Long battery life',
      'Kindle Unlimited ready'
    ],
    createdAt: new Date().toISOString(),
  }
];

const initializeProducts = () => {
  const existingProducts = localStorage.getItem(PRODUCTS_KEY);
  if (!existingProducts) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(sampleProducts));
  }
};

const getProducts = (): Product[] => {
  const products = localStorage.getItem(PRODUCTS_KEY);
  return products ? JSON.parse(products) : [];
};

const saveProducts = (products: Product[]) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const productService = {
  async getAllProducts(): Promise<Product[]> {
    initializeProducts();
    return getProducts();
  },

  async getProduct(id: string): Promise<Product | null> {
    const products = getProducts();
    return products.find(p => p.id === id) || null;
  },

  async createProduct(productData: Omit<Product, 'id' | 'createdAt'>): Promise<Product> {
    const products = getProducts();
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    
    products.push(newProduct);
    saveProducts(products);
    return newProduct;
  },

  async updateProduct(id: string, updates: Partial<Product>): Promise<Product> {
    const products = getProducts();
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) {
      throw new Error('Product not found');
    }

    const updatedProduct = { ...products[index], ...updates };
    products[index] = updatedProduct;
    saveProducts(products);
    return updatedProduct;
  },

  async deleteProduct(id: string): Promise<boolean> {
    const products = getProducts();
    const filteredProducts = products.filter(p => p.id !== id);
    
    if (filteredProducts.length === products.length) {
      return false; // Product not found
    }

    saveProducts(filteredProducts);
    return true;
  },
};