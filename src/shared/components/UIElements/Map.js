import { useRef, useEffect } from "react";

import "./Map.css";

// Here we are creating a custom map component to display when clicking on a user listed place
// there are many available react imports we can use, however this is more of a hands on approach
// this is used in the PlaceItem.js component

// Official googlemaps js sdk documentation
// https://developers.google.com/maps/documentation/javascript/overview
// grab script and add to index.html

// google cloud platform
// - create a new google maps project - this one is called "MERN"
// - Credentials > Can copy key from here
// add this key to the index.html script (remove "&callback=initMap" )

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  // center and zoom have no value upon initial rendering so useEffect creates a new map item with valid values when they change (upon a location being clicked)
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    // create a marker for the map
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
