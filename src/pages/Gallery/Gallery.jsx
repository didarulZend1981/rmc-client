import { useEffect, useState } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import useAuthHook from "../../providers/useAuthHook";

import ImageGallery from "./ImageGallery";
import AddImage from "./AddImage";




const Gallery = () => {
  
  



  







  return (
    <>
    
      <Banner></Banner>

      <ImageGallery></ImageGallery>

      <AddImage></AddImage>
      
    </>
    
  );
};

export default Gallery;