'use client';

import { useEffect, useRef, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

export function EventMap() {
  const [viewState, setViewState] = useState({
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 11
  });

  return (
    <div className="w-full h-full">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      >
        <Marker
          latitude={40.7128}
          longitude={-74.0060}
          anchor="bottom"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white cursor-pointer">
            <MapPin className="h-4 w-4" />
          </div>
        </Marker>
      </Map>
    </div>
  );
}