import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { id: string; name: string; email: string };
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email: string, password: string) => {
    // Simulate API call
    if (email && password) {
      set({
        isAuthenticated: true,
        user: {
          id: '1',
          name: 'John Doe',
          email: email
        }
      });
    }
  },
  logout: () => set({ isAuthenticated: false, user: null })
}));