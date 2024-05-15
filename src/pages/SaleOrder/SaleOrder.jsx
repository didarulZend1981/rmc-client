import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuthHook from "../../providers/useAuthHook";
import Swal from "sweetalert2";

const SaleOrder = () => {
  const food = useLoaderData();
  const location = useLocation();
    const navigate = useNavigate();
    const { _id,price,quantity,Food_Name,Food_Image,name,email} = food;
    const {user} = useAuthHook();
    console.log(food);
   
    const handleFoodOrder = event =>{
      event.preventDefault();
    // console.log("didarul")
      const form = event.target;
      
      const date = form.date.value;
// const quantity = form.quantity.value;
      const quantityF = parseFloat(form.quantity.value);
      const price = parseFloat(form.price.value);
      // console.log(Food_Name)
      const foodQuntity =parseFloat(quantity)-quantityF;
    //   console.log(foodQuntity);
      const buy_email = user?.email;
      const buy_name = user?.displayName;
      // const Food_Name = Food_Name;
      // const Food_Image = Food_Image;
      const quantiPrice =quantityF*price;
    
      const foodOrder = {
         date: date, 
         quantity: quantityF,
         price: price,
         buy_email: buy_email,
         buy_name: buy_name,
         Food_Name: Food_Name,
         Food_Image: Food_Image,
         quantiPrice: quantiPrice,
         Food_Name_id: _id,
         owner_email: email,
         owner_name: name,
         sellingCount: 1,

        
        
       
         
      }

      // console.log(foodOrder);

          fetch('https://restaurant-management-server-roan.vercel.app/foodOrder', {
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

        

        fetch(`https://restaurant-management-server-roan.vercel.app/foodupdate/${_id}`, {
          method: 'PATCH',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({ quantity: foodQuntity })
         })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              
          })



  








              navigate(location?.state?location.state:'/purchase');
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
                                        <li><a>Sale </a></li> 
                                        
                                  </ul>
                            </div>
                      </div>
                </div>
          </div>
      <h2 className='text-center text-3xl mt-20 mb-20'>Food Order: { Food_Name} </h2>
      <form onSubmit={handleFoodOrder} className="border-2 p-10 mb-20 rounded-lg">
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
                        <input type="text" defaultValue={price} className="input input-bordered" name="price" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                       <input type="number" defaultValue={quantity}  className="input input-bordered" name="quantity"/>
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