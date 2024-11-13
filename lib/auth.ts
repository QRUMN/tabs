'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'partygoer' | 'dj' | 'venue' | 'planner' | 'driver';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: {
        id: '1',
        email: 'djshadow@example.com',
        name: 'DJ Shadow',
        role: 'dj',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4'
      },
      isAuthenticated: true,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      updateUser: (data) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
);