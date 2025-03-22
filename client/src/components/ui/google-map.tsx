import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
  zoom?: number;
  height?: string;
  rounded?: boolean;
}

const GoogleMap = ({
  address,
  zoom = 15,
  height = "100%",
  rounded = true,
}: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef(address);

  useEffect(() => {
    // Store original address reference
    addressRef.current = address;
    
    // Check if the Google Maps API is loaded
    if (window.google && window.google.maps && mapRef.current) {
      // Initialize the map
      const map = new google.maps.Map(mapRef.current, {
        zoom: zoom,
        center: { lat: 0, lng: 0 }, // Default center, will be updated
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      // Initialize the geocoder
      const geocoder = new google.maps.Geocoder();
      
      // Geocode the address
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          // Make sure we're still using the same address that was passed in
          // to avoid race conditions if the component re-renders with a different address
          if (addressRef.current !== address) return;
          
          const location = results[0].geometry.location;
          map.setCenter(location);
          
          // Add a marker
          new google.maps.Marker({
            map: map,
            position: location,
            animation: google.maps.Animation.DROP,
          });
        } else {
          console.error('Geocode was not successful for the following reason:', status);
        }
      });
    }
  }, [address, zoom]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full ${rounded ? 'rounded-xl' : ''} overflow-hidden shadow-md`}
      style={{ height }}
      aria-label={`Map showing location for ${address}`}
    />
  );
};

export default GoogleMap;
