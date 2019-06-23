
function rad(x) { return x * Math.PI / 180; }

function findNearestDrivers(orderLat, orderLng, drivers) {
  let R = 6371; // radius of earth in km
  let distances = [];
  for (let i = 0; i < drivers.length; i++) {
    let mlat = drivers[i].lat;
    let mlng = drivers[i].lon;
    let dLat = rad(mlat - orderLat);
    let dLong = rad(mlng - orderLng);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(orderLat)) * Math.cos(rad(orderLat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    distances[i] = { driver: drivers[i], distance: d };
  }
  return distances.sort((distanceA, distanceB) => { return distanceA.distance - distanceB.distance });
}

export default { findNearestDrivers };