'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { AuthModal } from './auth-modal';
import { useAuth } from '@/lib/auth';

export function AuthButtons() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, logout } = useAuth();

  if (user) {
    return (
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          Welcome, {user.name}
        </span>
        <Button
          variant="ghost"
          className="bg-background/50 backdrop-blur-lg"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          variant="ghost"
          className="bg-background/50 backdrop-blur-lg"
          onClick={() => setShowAuthModal(true)}
        >
          Sign Up
        </Button>
        <Button
          className="bg-primary/90 backdrop-blur-lg"
          onClick={() => setShowAuthModal(true)}
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
      </div>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}