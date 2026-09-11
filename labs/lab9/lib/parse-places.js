async function parsePlaces() {
  try {
    const response = await fetch("files/places.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    const list = document.createElement("ol");
    for (const place of data.results) {
      const item = document.createElement("li");

      const name = document.createElement("span");
      name.className = "place-name";
      name.textContent = `name = ${place.name}`;

      const location = document.createElement("span");
      location.className = "place-location";
      location.textContent = `location = ${place.geometry.location.lat} ${place.geometry.location.lng}`;

      item.append(name, document.createElement("br"), location);
      list.append(item);
    }
    document.querySelector("#places").append(list);
  } catch (err) {
    document.querySelector("#places").textContent = `Error: ${err.message}`;
  }
}

parsePlaces();
