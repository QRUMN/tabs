'use client';

import { useEffect, useRef, useState } from 'react';
import Map, { NavigationControl, Marker } from 'react-map-gl';
import { useTheme } from 'next-themes';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapConfig } from './map-config';
import { HotspotCard } from './hotspot-card';
import { cn } from '@/lib/utils';

const eventData = [
  {
    id: 1,
    name: 'Summer Music Festival',
    venue: 'Rooftop Garden',
    artist: 'DJ Shadow',
    location: { lat: 40.7589, lng: -73.9851 },
    status: 'live',
    attendees: 250,
    friends: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop',
    ],
    distance: '0.8',
    time: '10 PM - 4 AM'
  },
  {
    id: 2,
    name: 'Underground House Night',
    venue: 'The Basement',
    artist: 'DJ Pulse',
    location: { lat: 40.7282, lng: -73.9942 },
    status: 'upcoming',
    attendees: 180,
    friends: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=64&h=64&fit=crop',
    ],
    distance: '1.2',
    time: '11 PM - 5 AM'
  },
  {
    id: 3,
    name: "Joe's Late Night Pizza",
    venue: "Joe's Pizza",
    location: { lat: 40.7484, lng: -73.9857 },
    status: 'food',
    attendees: 45,
    friends: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=64&h=64&fit=crop',
    ],
    distance: '0.5',
    time: 'Open 24/7'
  },
];

export default function MapComponent() {
  const [viewState, setViewState] = useState({
    latitude: mapConfig.defaultCenter.lat,
    longitude: mapConfig.defaultCenter.lng,
    zoom: mapConfig.defaultZoom,
    pitch: mapConfig.pitch,
    bearing: mapConfig.bearing,
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { theme } = useTheme();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log('Error getting location:', error);
        }
      );
    }
  }, []);

  const onMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
      <Map
        reuseMaps
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={{ width: '100%', height: '100%' }}
        mapStyle={theme === 'dark' ? mapConfig.styles.dark : mapConfig.styles.light}
        attributionControl={false}
        maxBounds={mapConfig.maxBounds}
        onLoad={onMapLoad}
      >
        {mapLoaded && (
          <>
            <NavigationControl position="top-right" style={{ marginTop: '80px' }} />
            
            {userLocation && (
              <Marker
                latitude={userLocation.lat}
                longitude={userLocation.lng}
                anchor="center"
              >
                <div className="w-4 h-4 rounded-full bg-[#85BCD8] shadow-lg">
                  <div className="absolute inset-0 -m-1 rounded-full bg-[#85BCD8] opacity-30 animate-ping" />
                </div>
              </Marker>
            )}

            {eventData.map((event) => (
              <Marker
                key={event.id}
                latitude={event.location.lat}
                longitude={event.location.lng}
                onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  setSelectedEvent(event);
                }}
              >
                <div className={cn(
                  'w-4 h-4 rounded-full cursor-pointer relative',
                  event.status === 'live' && 'bg-[#D6FFB7]',
                  event.status === 'upcoming' && 'bg-[#D8AD6B]',
                  event.status === 'food' && 'bg-red-500'
                )}>
                  {event.status === 'live' && (
                    <div className="absolute inset-0 w-full h-full bg-[#D6FFB7] rounded-full animate-ping opacity-75" />
                  )}
                </div>
              </Marker>
            ))}
          </>
        )}
      </Map>

      {selectedEvent && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-10">
          <HotspotCard 
            events={[selectedEvent]} 
            onClose={() => setSelectedEvent(null)} 
          />
        </div>
      )}
    </div>
  );
}