// Map
mapboxgl.accessToken = "pk.eyJ1IjoicGdvbWV6NyIsImEiOiJjbWEwZ2h0bmcwZDNkMm1xNmZuZDN4dWVhIn0.9Uq6QgfFGwu1tPYksRhJDQ";

const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL (corrected)
    center: [-80.8431, 35.2271], // Charlotte, NC coordinates [lng, lat]
    zoom: 9 // starting zoom
});
