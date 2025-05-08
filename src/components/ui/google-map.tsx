import { useEffect, useRef, useState } from 'react';

// Declare Google Maps type for TypeScript
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

interface GoogleMapProps {
  address: string;
  zoom?: number;
  height?: string;
  rounded?: boolean;
}

const GoogleMap = ({
  address,
  zoom = 15,
  height = "400px",
  rounded = true,
}: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef(address);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiKey = 'YOUR_API_KEY_PLACEHOLDER'; // This should be replaced with a real API key from environment variables

  useEffect(() => {
    // Store original address reference
    addressRef.current = address;
    
    // Create a function to initialize the map
    const initializeMap = () => {
      if (!mapRef.current) return;
      
      try {
        // Initialize the map
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: zoom,
          center: { lat: 0, lng: 0 }, // Default center, will be updated
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: true,
          fullscreenControl: true,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        });

        // Initialize the geocoder
        const geocoder = new window.google.maps.Geocoder();
        
        // Geocode the address
        geocoder.geocode({ address: address }, (results: any, status: any) => {
          if (status === "OK" && results && results[0]) {
            // Make sure we're still using the same address that was passed in
            // to avoid race conditions if the component re-renders with a different address
            if (addressRef.current !== address) return;
            
            const location = results[0].geometry.location;
            map.setCenter(location);
            
            // Add a marker
            new window.google.maps.Marker({
              map: map,
              position: location,
              animation: window.google.maps.Animation.DROP,
            });
            
            setIsLoading(false);
          } else {
            console.error('Geocode was not successful for the following reason:', status);
            setError('Could not find this location on the map.');
            setIsLoading(false);
          }
        });
      } catch (err) {
        setError('An error occurred while loading the map.');
        setIsLoading(false);
      }
    };

    // Function to load Google Maps API
    const loadGoogleMapsAPI = () => {
      // Check if the API is already loaded
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Create script tag for Google Maps API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&loading=async`;
      script.async = true;
      script.defer = true;

      // Define the callback function
      window.initMap = () => {
        initializeMap();
      };

      // Handle errors
      script.onerror = () => {
        setError('Failed to load Google Maps. Please try again later.');
        setIsLoading(false);
      };

      document.head.appendChild(script);

      // Clean up
      return () => {
        document.head.removeChild(script);
      };
    };

    loadGoogleMapsAPI();
  }, [address, zoom, apiKey]);

  return (
    <div className={`relative w-full ${rounded ? 'rounded-xl' : ''} overflow-hidden shadow-md`}
      style={{ height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 text-center">
          <div>
            <p className="text-red-500">{error}</p>
            <p className="mt-2 text-sm text-muted-foreground">Please check the address or try again later.</p>
          </div>
        </div>
      )}
      
      <div 
        ref={mapRef} 
        className="w-full h-full"
        aria-label={`Map showing location for ${address}`}
      />
    </div>
  );
};

export default GoogleMap;
