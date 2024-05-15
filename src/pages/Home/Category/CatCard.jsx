import { Link } from "react-router-dom";


const CatCard = ({catCard}) => {
  const {_id,category_name,image}=catCard;
  return (
    <div>
      <Link to="/allfood">
       <div className="card w-100 bg-base-100 shadow-xl">
  <figure className="px-5 pt-5">
    <img src={image} alt="Shoes" className="rounded-xl h-[200px] w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{category_name}</h2>
    
  </div>
</div>
</Link>
    </div>
  );
};

export default CatCard;