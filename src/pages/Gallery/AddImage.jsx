import useAuthHook from "../../providers/useAuthHook";


const AddImage = () => {
  const {user} = useAuthHook()|| {};
  const handleAddfood = (e) => {
    e.preventDefault();
   
    const feedback = e.target.feedback.value;
    const imageUrl = e.target.imageUrl.value;
    const userName = user.displayName;
    
   
    

    
    const info = { feedback,imageUrl,userName};
    
   console.log(info)
   fetch("https://restaurant-management-server-roan.vercel.app/galleryADD", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Food ADD Successfully',
            icon: 'success',
            confirmButtonText: 'ADD'
        })
        navigate(location?.state?location.state:'/gallery');
      }
    })



  }




  return (
    <div>
       <button className="btn text-center border-2 btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Photo ADD</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">


  <h1 className="text-3xl text-center font-bold">Add Gallery</h1>
                        <form onSubmit={handleAddfood}>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                        
         <input type="text" className="grow" placeholder="Image url." name="imageUrl" />
         
         </label>
        
         <label className="input input-bordered flex items-center gap-2 mb-4">
         
         <input type="text" className="grow" placeholder="feedback"  name="feedback" />
         </label>

         <label className="input input-bordered flex items-center gap-2 mb-4">
         
         <input type="text" className="grow" placeholder="user Name" readOnly value="" />
         </label>

         
         
        
        
         

       
       

        

         
          
         
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Add Item" />
                            </div>
                        </form>








   


    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
       
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  );
};

export default AddImage;