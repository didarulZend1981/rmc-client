import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuthHook from "../../providers/useAuthHook";
import Swal from "sweetalert2";

const SaleOrder = () => {
  const food = useLoaderData();
  const location = useLocation();
    const navigate = useNavigate();
    const { _id,price,Food_Name,Food_Image} = food;
    const {user} = useAuthHook();
    // console.log(food);
    const handleFoodOrder = event =>{
      event.preventDefault();
    // console.log("didarul")
      const form = event.target;
      
      const date = form.date.value;
      const quantity = form.quantity.value;
      const price = form.price.value;
      // console.log(Food_Name)
      const email = user?.email;
      const name = user?.displayName;
      // const Food_Name = Food_Name;
      // const Food_Image = Food_Image;

      const foodOrder = {
         date: date, 
         quantity: quantity,
         price: price,
         email: email,
         name: name,
         Food_Name: Food_Name,
         Food_Image: Food_Image,
        
        
       
         
      }

      // console.log(foodOrder);

          fetch('http://localhost:5000/foodOrder', {
              method: 'POST', 
              headers: {
                  'content-type': 'application/json'
              }, 
              body: JSON.stringify(foodOrder)
          })
          .then(res => res.json())
          .then(data => {

              console.log(data);
              if(data.insertedId){
                Swal.fire({
                  title: 'Success!',
                  text: 'Order ADD Successfully',
                  icon: 'success',
                  confirmButtonText: 'ADD'
              })
              navigate(location?.state?location.state:'/allfood');
              }
          })

          

        

      }


  return (
    <div>
      <h2 className='text-center text-3xl'>Food Order: { Food_Name} </h2>
      <form onSubmit={handleFoodOrder}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     
            <div className="form-control">
                <label className="label">
                <span className="label-text">Name</span>
                </label>
                <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
            </div>

          <div className="form-control">
              <label className="label">
                  <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
          </div>

          <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
          </div>

          <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$'+ price} className="input input-bordered" name="price" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                       <input type="number" defaultValue={1}  className="input input-bordered" name="quantity"/>
                    </div>

                    

                    <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
               


      </div>
      </form>    
    </div>
  );
};

export default SaleOrder;