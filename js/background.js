const images = [
    "clayton.jpg",
    "marek.jpg",
    "matteo.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
//appendChild는 body에 html을 추가 

