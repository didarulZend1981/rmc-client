import { Link } from "react-router-dom";


const FoodCards = ({foodCard}) => {
  const {_id,Food_Name,Food_Image,Food_Category,quantity,price,email,name}=foodCard;

 






  return (
    <div>
        <div className="card card-side bg-base-100 shadow-xl border border-indigo-[white] h-[250px]">
            <figure><img src={Food_Image} alt="Movie" className="rounded-lg border-2 h-[150px] w-[150px] p-[10px] ml-[20px]"/></figure>
            <div className="card-body">
            <h2 className="card-title">{Food_Name}</h2>
            <p>price:{price}</p>
            <p>quantity:{quantity}</p>
            <p>Category:{Food_Category}</p>
            <div className="card-actions justify-end">
               

                    <Link to={`../single/${_id}`}>
                      <button className="btn btn-primary">Details</button>
                    </Link>
            </div>
            </div>
        </div>
    </div>
  );
};

export default FoodCards;