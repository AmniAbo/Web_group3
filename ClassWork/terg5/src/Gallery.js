import React, { useState } from 'react';
import './Gallery.css';


<h1 className ="tut" style={{ textAlign: 'center',color:'#808080' }}>Tutorial 5</h1>

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//filling the array with non duplicated values (images)
let arr = [];
    while (arr.length < 10) {
        const randomNum = getRandomInt(1, 100);
        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
    }

//creating array with random value so every time it show different img
const images = [
    { id: arr[0], title: "Img 1" },
    { id: arr[1], title: "Img 2" },
    { id: arr[2], title: "Img 3" },
    { id: arr[3], title: "Img 4" },
    { id: arr[4], title: "Img 5" },
    { id: arr[5], title: "Img 6" },
    { id: arr[6], title: "Img 7" },
    { id: arr[7], title: "Img 8" },
    { id: arr[8], title: "Img 9" },
    { id: arr[9], title: "Img 10" },

];

//now we are declaring a functional component named Gallery 
const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(images[0].id);
    //const [state, setState] = useState(initialState);
    //state(in our case is : selectedImage): This is the current state value
    //setState(in our case is setSelectedImage): This is a function that updates the state.
   //initialState(in pur case is useState): This is the initial value of the state.
   //the initial value here the first img in array images
    return (
        <div>
            <div className="thumbnails">
                {/* {images.map(image => (...))}: 
                This JavaScript expression uses the map function to
                 iterate (like a for loop) over each image object in the images array.*/}
                {images.map(image => (
                    <img
                        key={image.id}//key gets the id of the photo in the images array
                        src={`https://picsum.photos/id/${image.id}/50/50`}//fetching the image from website and saves the url in image id
                        alt={image.title}//updates a title for the image we fetched
                        onClick={() => setSelectedImage(image.id)}
                        //This updates the selectedImage state to the ID of the image that was clicked.
                        className={image.id === selectedImage ? "selected" : ""}
                        //*gives a name for every image in case we want style in css 
                        //we can change in the css the selected image in class selected
                    />
                ))}
            </div>
            {/* here we want to write the div of the main picture*/}
            <div className="main-image">
                <img src={`https://picsum.photos/id/${selectedImage}/350/350`} alt="Selected" />
                  {/* 
                  here we fetched photo from website and saved id in selectedImage
                  and show it in this div
                  */}
            </div>
        </div>
    );
};

export default Gallery;
