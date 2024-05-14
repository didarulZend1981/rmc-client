import FoodAll from "../../../components/FoodAll/FoodAll";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <FoodAll></FoodAll>
    </div>
  );
};

export default Home;