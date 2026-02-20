import { User } from '../types';

const STORAGE_KEY = 'shopez_auth';
const USERS_KEY = 'shopez_users';

// Mock users for demo
const initializeUsers = () => {
  const existingUsers = localStorage.getItem(USERS_KEY);
  if (!existingUsers) {
    const defaultUsers = [
      {
        id: '1',
        name: 'Admin User',
        email: 'admin@shopez.com',
        role: 'admin' as const,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user' as const,
        createdAt: new Date().toISOString(),
      },
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
};

const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const authService = {
  async login(email: string, password: string): Promise<User> {
    initializeUsers();
    const users = getUsers();
    
    // Simple mock authentication
    const user = users.find(u => u.email === email);
    if (!user) {
      throw new Error('User not found');
    }

    // In a real app, you'd verify the password here
    // For demo purposes, accept any password for existing users
    
    const authData = {
      user,
      token: `mock_token_${user.id}`,
      expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
    return user;
  },

  async register(name: string, email: string, password: string): Promise<User> {
    initializeUsers();
    const users = getUsers();
    
    // Check if user already exists
    if (users.some(u => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);

    const authData = {
      user: newUser,
      token: `mock_token_${newUser.id}`,
      expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
    return newUser;
  },

  async getCurrentUser(): Promise<User | null> {
    const authData = localStorage.getItem(STORAGE_KEY);
    if (!authData) return null;

    try {
      const { user, expiresAt } = JSON.parse(authData);
      
      if (Date.now() > expiresAt) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }

      return user;
    } catch (error) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  },

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
  },

  async updateProfile(updates: Partial<User>): Promise<User> {
    const authData = localStorage.getItem(STORAGE_KEY);
    if (!authData) throw new Error('Not authenticated');

    const { user, token, expiresAt } = JSON.parse(authData);
    const updatedUser = { ...user, ...updates };

    // Update users list
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      saveUsers(users);
    }

    // Update auth data
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      user: updatedUser,
      token,
      expiresAt,
    }));

    return updatedUser;
  },
};