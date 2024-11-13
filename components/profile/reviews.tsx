'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: {
      name: 'Sarah',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    },
    rating: 5,
    date: '2 weeks ago',
    content: 'Great energy and always brings good vibes to the party! Definitely someone you want at your events.',
  },
  {
    id: 2,
    author: {
      name: 'Mike',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    },
    rating: 5,
    date: '1 month ago',
    content: 'One of the most reliable people in the scene. Always on time and respectful.',
  },
];

export function Reviews() {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={review.author.avatar} />
                <AvatarFallback>{review.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{review.author.name}</h4>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="mt-2 text-muted-foreground">{review.content}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}