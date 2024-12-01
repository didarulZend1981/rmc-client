import { Link } from "react-router-dom";

import { GrView } from "react-icons/gr";

const FoodCards = ({foodCard}) => {
  const {_id,Food_Name,Food_Image,Food_Category,quantity,price,email,name}=foodCard;

 






  return (
    

    <div className="bg-gray-100 p-4 overflow-hidden cursor-pointer rounded-xl border-2">
      <div className="bg-white flex flex-col h-full rounded-lg">
        {/* Product Image */}
        <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-t-lg">
          <img
            src={Food_Image}
            alt={Food_Name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-6 text-center flex-1">
          <h3 className="text-lg font-bold text-gray-800">{Food_Name}</h3>
          <h4 className="text-xl text-gray-800 font-bold mt-3">${price}</h4>
        </div>

        {/* Add to Cart Button */}
        <Link to={`../single/${_id}`}>
          <button
            type="button"
            className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full rounded-b-lg flex items-center justify-center gap-2"
          >
            <GrView className="text-base" /> {/* Centered icon */}
            Details
          </button>
        </Link>
      </div>
    </div>





       
       
  );
};

export default FoodCards;