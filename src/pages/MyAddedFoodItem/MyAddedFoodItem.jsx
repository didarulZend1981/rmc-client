import { useEffect, useState } from "react";
import useAuthHook from "../../providers/useAuthHook";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";


const MyAddedFoodItem = () => {
  const { user } = useAuthHook();
  // console.log(user);
  
    const [foodEmail, setFoodEmail] = useState([]);
    
    console.log(foodEmail);
    const url = `http://localhost:5000/foodEmail?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFoodEmail(data))
    }, [url]);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <table className="table">


                        <thead>
                            <tr>
                                <th>SL</th>

                                <th>Name{foodEmail.length}</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                        {foodEmail.map((p, index) => (
           <tr key={index}>
             <td>{index+1}</td>
             <td>{p.Food_Name}</td>
             <td>{p.price}</td>
           
             <td>
             <img src={p.Food_Image}/>
             </td>
             
             <td>
             <Link to={`/editfood/${p._id}`} className="text-blue-500 hover:text-blue-700">
             <GrUpdate />
         </Link>
             </td>
             
           </tr>
         ))}

                        </tbody>
                        </table>

                    </div>
                </div>
                      
                

            </div>
        </div>
    </div>
  );
};

export default MyAddedFoodItem;