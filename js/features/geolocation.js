export function initGeo() {
  navigator.geolocation.getCurrentPosition(
    pos => console.log(pos.coords.latitude),
    err => console.log(err)
  );
}