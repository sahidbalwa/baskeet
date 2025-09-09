"use client";
import { createContext, useContext, useState, useMemo } from 'react';
import { ADMIN_EMAIL } from '@/lib/utils';

const AuthContext = createContext(null);

export function AuthProvider({ children }){
  const [user, setUser] = useState({
    email: 'user@example.com',
    name: 'Creative Boy',
    imageUrl: '/placeholder.png'
  });
  const signInAsAdmin = () => setUser(u => ({...u, email: ADMIN_EMAIL}));
  const signOut = () => setUser(null);
  const isAdmin = user?.email === ADMIN_EMAIL;
  const value = useMemo(()=>({ user, isAdmin, signInAsAdmin, signOut }),[user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
