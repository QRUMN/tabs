'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { searchPhrases } from './search-phrases';

export function SearchBar() {
  const [placeholder, setPlaceholder] = useState(searchPhrases[0]);

  useEffect(() => {
    const randomPlaceholder = searchPhrases[Math.floor(Math.random() * searchPhrases.length)];
    setPlaceholder(randomPlaceholder);
  }, []);

  return (
    <div className="relative w-full max-w-xl">
      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
      <Input
        type="text"
        className="w-full h-12 pl-11 pr-4 text-base bg-background/80 backdrop-blur-lg border-border/50 shadow-lg"
        placeholder={placeholder}
      />
    </div>
  );
}