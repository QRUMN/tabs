'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicXJ1bW4iLCJhIjoiY20zN2V0ZHBtMDRqajJxcHhrejI5cmlpYSJ9.qCAYS34VtDnEUC5pr28Q8g';

const defaultCenter = [-73.935242, 40.730610]; // NYC coordinates
const defaultZoom = 13;

export function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: defaultCenter,
      zoom: defaultZoom,
      pitch: 45,
      bearing: -17.6,
      antialias: true,
      fog: {
        color: 'rgb(186, 210, 235)',
        'high-color': 'rgb(36, 92, 223)',
        'horizon-blend': 0.02,
        'space-color': 'rgb(11, 11, 25)',
        'star-intensity': 0.6
      }
    });

    map.current.on('load', () => {
      if (!map.current) return;
      
      // Add 3D building layer
      map.current.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 12,
        'paint': {
          'fill-extrusion-color': '#242424',
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'min_height'],
          'fill-extrusion-opacity': 0.6
        }
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          showCompass: false
        }),
        'top-right'
      );

      setLoaded(true);
    });

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Add event markers after map is loaded
  useEffect(() => {
    if (!loaded || !map.current) return;

    // Example event locations
    const events = [
      { type: 'live', coordinates: [-73.935242, 40.730610] },
      { type: 'upcoming', coordinates: [-73.955242, 40.735610] },
      { type: 'food', coordinates: [-73.945242, 40.725610] }
    ];

    events.forEach(event => {
      const el = document.createElement('div');
      el.className = `marker ${event.type}`;
      
      const size = 20;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';
      
      // Style based on event type
      switch (event.type) {
        case 'live':
          el.style.backgroundColor = '#D6FFB7';
          el.style.boxShadow = '0 0 0 rgba(214, 255, 183, 0.4)';
          el.style.animation = 'pulse 2s infinite';
          break;
        case 'upcoming':
          el.style.backgroundColor = '#D8AD6B';
          break;
        case 'food':
          el.style.backgroundColor = '#FF6B6B';
          break;
      }

      new mapboxgl.Marker(el)
        .setLngLat(event.coordinates)
        .addTo(map.current);
    });
  }, [loaded]);

  return (
    <div className="relative w-full h-[calc(100vh-4rem)]">
      <div ref={mapContainer} className="absolute inset-0" />
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(214, 255, 183, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(214, 255, 183, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(214, 255, 183, 0);
          }
        }
      `}</style>
    </div>
  );
}