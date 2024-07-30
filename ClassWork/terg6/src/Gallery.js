/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import './Gallery.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Filling the array with non-duplicated values (images)
let arr = [];
while (arr.length < 10) {
  const randomNum = getRandomInt(1, 100);
  if (!arr.includes(randomNum)) {
    arr.push(randomNum);
  }
}

// Creating array with random value so every time it shows different img
const images = [
  { id: arr[0], title: 'Img 1' },
  { id: arr[1], title: 'Img 2' },
  { id: arr[2], title: 'Img 3' },
  { id: arr[3], title: 'Img 4' },
  { id: arr[4], title: 'Img 5' },
  { id: arr[5], title: 'Img 6' },
  { id: arr[6], title: 'Img 7' },
  { id: arr[7], title: 'Img 8' },
  { id: arr[8], title: 'Img 9' },
  { id: arr[9], title: 'Img 10' },
];

// Declaring a functional component named Gallery
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].id);
  return (
    <div>
      <div className="thumbnails">
        {images.map((image) => (
          <img
            key={image.id}
            src={`https://picsum.photos/id/${image.id}/50/50`}
            alt={image.title}
            onClick={() => setSelectedImage(image.id)}
            className={image.id === selectedImage ? 'selected' : ''}
          />
        ))}
      </div>
      <div className="main-image">
        <img src={`https://picsum.photos/id/${selectedImage}/350/350`} alt="Selected" />
      </div>
    </div>
  );
};

export default Gallery;
