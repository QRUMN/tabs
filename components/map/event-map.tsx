'use client';

import React, { useState, useEffect } from 'react';
import Map, { NavigationControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapConfig } from './map-config';
import { EventMarker } from './event-marker';
import { EventPopup } from './event-popup';
import { SearchBar } from './search-bar';
import { HotspotCard } from './hotspot-card';

const events = [
  {
    id: 1,
    name: 'Summer Music Festival',
    venue: 'Rooftop Garden',
    artist: 'DJ Shadow',
    location: { lat: 40.7580, lng: -73.9855 },
    status: 'live',
    attendees: 250,
    friends: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=64&h=64&fit=crop',
    ],
    distance: '0.8',
  },
  {
    id: 2,
    name: 'Art Gallery Opening',
    venue: 'Modern Space NYC',
    artist: 'Various Artists',
    location: { lat: 40.7505, lng: -73.9934 },
    status: 'upcoming',
    attendees: 100,
    friends: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=64&h=64&fit=crop',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=64&h=64&fit=crop',
    ],
    distance: '1.2',
  },
  {
    id: 3,
    name: 'Late Night Bites',
    venue: "Joe's Pizza",
    location: { lat: 40.7429, lng: -73.9888 },
    status: 'food',
    attendees: 45,
    friends: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop',
    ],
    distance: '0.5',
  },
];

export default function EventMap() {
  const [viewState, setViewState] = useState({
    latitude: mapConfig.defaultCenter.lat,
    longitude: mapConfig.defaultCenter.lng,
    zoom: mapConfig.defaultZoom,
    pitch: mapConfig.pitch,
    bearing: mapConfig.bearing,
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
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

  return (
    <div className="w-full h-full relative">
      <SearchBar />
      
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle={mapConfig.style}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        maxBounds={mapConfig.maxBounds}
        attributionControl={mapConfig.attributionControl}
        reuseMaps
      >
        <NavigationControl position="top-right" />
        
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

        {events.map((event) => (
          <EventMarker
            key={event.id}
            event={event}
            onClick={e => {
              e.originalEvent.stopPropagation();
              setSelectedEvent(event);
            }}
          />
        ))}

        {selectedEvent && (
          <EventPopup
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </Map>

      <HotspotCard events={events} />
    </div>
  );
}