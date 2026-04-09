const places = [
  {
    name: "Slovácký Šenk",
    city: "Strážnice",
    description: "Hospoda propojená s naším minipivovarem",
    lat: 48.894666336946756,
    lng: 17.312623405445404
  },
  {
    name: "Pivnice Na Valtické",
    city: "Břeclav",
    description: "Čepujeme zde naši jedenáctku",
    lat: 48.75827212848956,
    lng: 16.854683754180126
  },
  {
    name: "Pod ořechem",
    city: "Petrov",
    description: "Pivotéka s velkým výběrem piv, včetně našich",
    lat: 48.879640820643424,
    lng: 17.274116432704627,
  }
  ];

// ===== MAPA =====
const map = L.map("map").setView([48.894666336946756, 17.312623405445404], 10);

// OpenStreetMap vrstva
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap"
}).addTo(map);

// ===== MARKERY + SEZNAM =====
const list = document.getElementById("places-list");

places.forEach((place, index) => {
  // Marker
  const marker = L.marker([place.lat, place.lng]).addTo(map);

  marker.bindPopup(`
    <strong>${place.name}</strong><br>
    ${place.description}<br>
    <small>${place.city}</small>
  `);

  // Položka v seznamu
  const item = document.createElement("a");
  item.href = "#";
  item.className = "list-group-item list-group-item-action";
  item.innerHTML = `
    <strong>${place.name}</strong><br>
    <small>${place.city} – ${place.description}</small>
  `;

  // Klik na seznam → fokus na mapě
  item.addEventListener("click", (e) => {
    e.preventDefault();
    map.setView([place.lat, place.lng], 14);
    marker.openPopup();
  });

  list.appendChild(item);
});
