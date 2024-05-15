import { useEffect, useState } from "react";
import useAuthHook from "../../providers/useAuthHook";
import PurchaseRow from "./PurchaseRow";
import Swal from "sweetalert2";
import axios from "axios";
const Purchase = () => {

  const [order, setOrder] = useState([]);
 

  const { user } = useAuthHook();
    // console.log(order);
    const url = `https://restaurant-management-server-roan.vercel.app/foodOrderPurchase?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setOrder(res.data);
        })
    }, [url]);

    const handleDelete = id => {
     



      const proceed = confirm('Are You sure you want to delete');


      if (proceed) {



        

          fetch(`https://restaurant-management-server-roan.vercel.app/foodPurchas/${id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                        Swal.fire({
                          title: 'Success!',
                          text: 'Order Delete Successfully',
                          icon: 'success',
                          confirmButtonText: 'Delete'
                      })
                      const remaining = order.filter(booking => booking._id !== id);
                      setOrder(remaining);
                  }
              })
      }
  }


  return (
    <div>
        <div className="hero h-[400px] bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co/VqF7VHj/Untitled-design-4.png)'}}>
                <div className="hero-content text-center">
                      <div className="max-w-md">
                      <div className="breadcrumbs text-3xl font-extralight text-white">
                                  <ul>
                                        <li className="text-5xl"><a>Home</a></li> 
                                        <li><a>Purchase</a></li> 
                                        
                                  </ul>
                            </div>
                      </div>
                </div>
          </div>

      <h2 className="text-5xl mt-20 mb-20 text-center">Your bookings:{order.length}</h2>
            <div className="overflow-x-auto w-full mb-20">
                <table className="table w-full border-2">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th>X</th>
                            <th>food img</th>
                            <th>Food Name</th>
                            <th>Quintity</th>
                            <th>price/Unit</th>
                            <th>price</th>
                            <th>added time</th>
                            <th>food owner</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                    {
                              
                    
                              order.map(booking => <PurchaseRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                               
                                
                            >



                            </PurchaseRow>)
                        }
                    </tbody>

                </table>
            </div>
    </div>
  );
};

export default Purchase;