import { useEffect, useState } from "react";



const Gallery = () => {
  const [images, setImages] = useState([]);

 
  useEffect(()=>{
    fetch('http://localhost:5000/gallery')
    .then(res=>res.json())
    .then(data=>setImages(data))
    .catch(error => console.error('Error fetching images:', error));
  },[])
  
  return (
    <div className="gallery-container">
      {images.map(image => (
        <div key={image.id} className="gallery-item">
          <img src={image.imageUrl} alt="User Image" className="w-[200px] h-[200px]" />
          <div className="overlay">
            <span className="user-name">{image.userName}</span>
            <span className="feedback">{image.feedback}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;