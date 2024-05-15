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
    const url = `https://restaurant-management-server-roan.vercel.app/foodEmail?email=${user?.email}`;
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
                
                  fetch(`https://restaurant-management-server-roan.vercel.app/food/${_id}`, {
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

                        navigate(location?.state?location.state:'/myAddedFooditem');
                          
                      })
      
              }
          })
      }


  return (
    <div>
        <div className="hero h-[400px] bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co/VqF7VHj/Untitled-design-4.png)'}}>
                <div className="hero-content text-center">
                      <div className="max-w-md">
                      <div className="breadcrumbs text-3xl font-extralight text-white">
                                  <ul>
                                        <li className="text-5xl"><a>Home</a></li> 
                                        <li><a>All Product </a></li> 
                                        
                                  </ul>
                            </div>
                      </div>
                </div>
          </div>
     <div className="overflow-x-auto w-full">
                <table className="table w-full mt-20 border-2 rounded-lg">


<thead>
    <tr className="text-[24px]">
        <th>SL</th>

        <th>Name{foodEmail.length}</th>
        <th>Price</th>
        <th>Stock</th>
       
        <th>Image</th>
        <th>Action</th>

    </tr>
</thead>
<tbody>
{foodEmail.map((p, index) => (
<tr key={index}>
<td>{index+1}</td>
<td>{p.Food_Name}</td>
<td>{p.price}</td>
<td>{p.quantity}</td>

<td>
<img src={p.Food_Image} className="w-[100px] h-[100px] rounded-xl"/>
</td>

<td>
<button className="btn btn-secondary mr-10">
<Link to={`/editfood/${p._id}`} className="text-blue-500 hover:text-blue-700">
<GrUpdate  className="text-[30px] whitespace-pre hover:bg-yellow-600"/>
</Link>
</button>




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
  );
};

export default MyAddedFoodItem;