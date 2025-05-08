// src/components/GoogleMap.tsx
import { useEffect } from "react";

const GoogleMap = () => {
  useEffect(() => {
    // Load the Google Maps script dynamically with your API key
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBIe85KOdBZEfpuYunF_R2eFSFYnJYXgUk&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const location = { lat: 22.576614193289284, lng: 88.37360044456459 };

      const map = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: location,
        zoom: 16,
      });

      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Freelantix Office",
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "1rem",
        marginTop: "2rem",
      }}
    />
  );
};

export default GoogleMap;