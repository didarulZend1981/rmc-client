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
          <h3 className="text-3xl text-orange-700 font-bold">Ouer Service</h3>
          <h2 className="text-5xl">Some Popular Food..</h2>
          <p>Every day based on your needs I have displayed some of my food products in this restaurant so that<br/> you can buy food from this restaurant.</p>
        </div>

       
      <FoodAll></FoodAll>
      <TopSix></TopSix>
    </div>
  );
};

export default Home;