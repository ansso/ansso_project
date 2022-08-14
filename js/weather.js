//위치를 찾는 방법 
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in", lat, lng);
}

function onGeoError() {
alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)  //브라우저에서 위치 좌표를 준다. 