import { useEffect, useState } from "react";
import useAuthHook from "../../providers/useAuthHook";
import PurchaseRow from "./PurchaseRow";
import Swal from "sweetalert2";

const Purchase = () => {

  const [order, setOrder] = useState([]);
 

  const { user } = useAuthHook();
    // console.log(order);
    const url = `http://localhost:5000/foodOrderPurchase?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [url]);

    const handleDelete = id => {
     



      const proceed = confirm('Are You sure you want to delete');


      if (proceed) {



        

          fetch(`http://localhost:5000/foodPurchas/${id}`, {
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
      <h2 className="text-5xl">Your bookings:{order.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            
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