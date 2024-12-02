import FoodAll from "../../../components/FoodAll/FoodAll";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import TopSix from "../TopSix/TopSix";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
    
      <Category></Category>
       <div className="text-center mt-20 mb-20">
           <h2 className="text-3xl uppercase font-bold text-gray-600">Some Popular Food</h2>
           <p className="text-gray-600 font-bold  text-center text-sm py-3 px-6">Every day based on your needs I have displayed some of my food products in this restaurant so that<br/> you can buy food from this restaurant.</p>
        </div>

       
      <FoodAll></FoodAll>
      <TopSix></TopSix>
    </div>
  );
};

export default Home;