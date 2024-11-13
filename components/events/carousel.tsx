'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    title: 'Summer Rooftop Party',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2000&h=1000',
    date: 'Tonight',
    time: '10 PM - 4 AM',
    location: 'Midtown Manhattan',
    price: '$30',
  },
  {
    id: 2,
    title: 'Underground House Night',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80&w=2000&h=1000',
    date: 'Tomorrow',
    time: '11 PM - 5 AM',
    location: 'Brooklyn',
    price: '$25',
  },
  {
    id: 3,
    title: 'Jazz & Cocktails',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=2000&h=1000',
    date: 'This Weekend',
    time: '8 PM - 2 AM',
    location: 'West Village',
    price: '$40',
  },
];

export function EventCarousel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden group relative h-[400px]">
          <img
            src={event.image}
            alt={event.title}
            className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
              <div className="space-y-1 text-sm opacity-90 mb-4">
                <p>{event.date} • {event.time}</p>
                <p>{event.location}</p>
                <p className="font-semibold">{event.price}</p>
              </div>
              <Button size="sm" className="w-32 mx-auto block">
                Get Tickets
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}