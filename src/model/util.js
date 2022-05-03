function getGPS() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const geocoder = new kakao.maps.services.Geocoder();

export async function getLocation() {
  const {
    coords: { latitude, longitude },
  } = await getGPS();
  return new Promise((resolve, reject) => {
    geocoder.coord2RegionCode(longitude, latitude, (msg, status) => {
      if (status === kakao.maps.services.Status.OK) {
        resolve(msg[0].address_name);
      } else {
        reject(new Error('Bad Server'));
      }
    });
  });
}
