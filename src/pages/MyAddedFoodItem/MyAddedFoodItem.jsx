import { useEffect, useState } from "react";
import useAuthHook from "../../providers/useAuthHook";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

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

        const handleDelete = _id => {
          console.log(_id);
          Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                // 662e5da6c57feb2582fa99dc
                
                  fetch(`http://localhost:5000/food/${_id}`, {
                      method: 'DELETE'
                  })
                      .then(res => res.json())
                      .then(data => {
                          console.log(data);
                          if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = foodEmail.filter(cof => cof._id !== _id);
                            setFoodEmail(remaining);
                        }
                          
                      })
      
              }
          })
      }


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

        

         <button
                    onClick={() => handleDelete(p._id)}
                    className="btn btn-primary bg-orange-500"><MdDeleteForever className="text-[30px] whitespace-pre hover:bg-yellow-600" />
                </button>
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