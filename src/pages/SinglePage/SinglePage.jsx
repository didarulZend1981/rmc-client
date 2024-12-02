import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuthHook from "../../providers/useAuthHook";


const SinglePage = () => {

  const {id} = useParams();
  const [product,setProduct]=useState({});
  const {user} = useAuthHook() || {};
  const {_id,Food_Name,Food_Image,Food_Category,quantity,price,Food_Origin,email,name,description} = product;
  useEffect(()=>{
          fetch(`https://restaurant-management-server-roan.vercel.app/food/${id}`)
          .then(res=>res.json())
          .then(data=>{
            setProduct(data)
            console.log(data);
          })
  },[id])

  const purchas =<>
      <Link to={`../order/${_id}`}>
          purchas
      </Link>
  </>




  return (
    <div className="font-sans mt-20 mb-20">
            <div className="p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
                    <div className="w-full lg:sticky top-0 text-center">
                        <div className="lg:h-[560px]">
                            <img src={Food_Image} alt={Food_Name} className="lg:w-11/12 w-full h-full rounded-md object-cover object-top" />
                        </div>

                        
                    </div>

                    <div>
                        <div className="flex flex-wrap items-start gap-4">
                            <div>
                                <div className="flex gap-1 uppercase">
                                    <span className="text-2xl font-bold text-stone-600">Name:</span>
                                    <span className="text-2xl font-bold text-gray-800">{Food_Name}</span>

                                </div>
                                <div className="flex gap-1 mt-2 uppercase">
                                    <span className="text-sm text-stone-600">Category:</span>
                                    <span className="text-sm text-gray-500">{Food_Category}</span>

                                </div>
                                

                                
                            </div>

                            
                        </div>

                        <hr className="my-8" />

                        <div className="flex flex-wrap gap-4 items-start">
                            <div className="flex gap-1 uppercase">
                                <span className="text-stone-600 text-4xl font-bold">Price:</span>
                                <span className="text-gray-800 text-4xl font-bold">${price}</span>
                            </div>

                            
                        </div>

                        <hr className="my-8" />

                        <div className="flex gap-1 uppercase">
                            <h3 className="text-xl font-bold text-stone-600">Quantity</h3>
                            <div className="text-xl font-bold text-gray-800">
                              :{quantity == 0 ?"Not ableable":quantity}
                            </div>
                        </div>

                        <hr className="my-8" />

                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{email}</h3>
                            <div className="flex flex-wrap gap-4 mt-4 uppercase">
                                Made By:{name}
                            </div>
                        </div>

                        <hr className="my-8" />

                        <div className="flex flex-wrap gap-4">
                           


                           {user?.email ? <>

                          

                          
              {email===user.email ? (
                <button type="button" className="uppercase  min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md" disabled>{purchas}</button>
                ) 
              : (
                <>
                {quantity > 0 ? (
                  <button className="uppercase min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md">{purchas}</button>
                ) : (
                  <button className="uppercase min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md" disabled>{purchas}</button>
                )}

                  </>
                )

              } 
              </>




            : <>
                {quantity > 0 ? (
                  <button className="uppercase min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md">{purchas}</button>
                ) : (
                  <button className="uppercase min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md" disabled>{purchas}</button>
                )}

              </>
}






                            
                        </div>
                    </div>
                </div>

                <div className="mt-20 max-w-4xl">
                    <ul className="flex border-b">
                        <li
                            className="text-gray-800 font-semibold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                            Description</li>
                       </ul>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-800">Product Description</h3>
                     </div>

                    <ul className="space-y-3  mt-6 pl-4 text-sm text-gray-500">
                        <li><p className="text-red-400">Food Origin:{Food_Origin}</p></li>
                        <li className="text-justify">{description}</li>
                    </ul>
                </div>
            </div>
        </div>


     


    
  );
};

export default SinglePage;




