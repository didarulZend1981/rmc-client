import { useEffect, useState } from "react";


const ImageGallery = () => {
  const [images, setImages] = useState([]);
  
 
  useEffect(()=>{
    fetch('https://restaurant-management-server-roan.vercel.app/gallery')
    .then(res=>res.json())
    .then(data=>setImages(data))
    .catch(error => console.error('Error fetching images:', error));
  },[])


  return (
    <div>
          <div className="gallery-container mt-20 mb-20">
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
    </div>
  );
};

export default ImageGallery;