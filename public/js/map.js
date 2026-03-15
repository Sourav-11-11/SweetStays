const mapContainer = document.getElementById("map");
const mapDataScript = document.getElementById("listing-map-data");
const listingMapData = mapDataScript ? JSON.parse(mapDataScript.textContent) : null;
const mapToken = window.mapToken;

if (mapContainer && mapToken && listingMapData?.geometry?.coordinates?.length === 2) {
    mapboxgl.accessToken = mapToken;

    const coordinates = listingMapData.geometry.coordinates;
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: coordinates,
        zoom: 10
    });

    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h6>${listingMapData.title}</h6><p>${listingMapData.location}, ${listingMapData.country}</p>`
    );

    new mapboxgl.Marker({ color: "#fe424d" })
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(map);

    map.addControl(new mapboxgl.NavigationControl());
} else if (mapContainer) {
    mapContainer.innerHTML = "<p class='text-muted p-3 mb-0'>Map is unavailable for this listing.</p>";
}
