import { useEffect, useState } from "react";
import CatCard from "./CatCard";
import { Link } from "react-router-dom";


const Category = () => {
  const [category,setCategory] =useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/category')
    .then(res=>res.json())
    .then(data=>setCategory(data));
  },[])

  return (
    <div>
     

      <div className="text-center mt-10 mb-10">
          <h3 className="text-3xl text-orange-700 font-bold">Our Top Categroy</h3>
          
          <p>Most people like our food very much. Our food is very healthy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {
            category.map(cat=>
              
                 
                
                      <CatCard
                        key={cat._id}
                        catCard={cat}
                      
                      >


                      </CatCard>

                      
                  )
          }
        </div>
    </div>
  );
};

export default Category;