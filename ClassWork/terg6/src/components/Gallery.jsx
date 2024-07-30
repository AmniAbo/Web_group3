// src/components/ImageGallery.jsx
import { useState } from 'preact/hooks';

const images = [
    { id: 12 },
    { id: 24 },
    { id: 36 },
    { id: 48 },
    { id: 60 },
];

export default function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(images[0].id);

    return (
        <div class="container mx-auto p-4">
            <div class="flex flex-col items-center">
                <img
                    src={`https://picsum.photos/id/${selectedImage}/350/350`}
                    alt="Selected"
                    class="w-80 h-80 mb-4"
                />
                <div class="flex gap-2">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            class={`cursor-pointer border-2 ${
                                image.id === selectedImage ? 'border-blue-500' : 'border-transparent'
                            }`}
                            onClick={() => setSelectedImage(image.id)}
                        >
                            <img
                                src={`https://picsum.photos/id/${image.id}/50/50`}
                                alt={`Thumbnail ${image.id}`}
                                class="w-12 h-12"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
