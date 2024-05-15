
import { Link } from 'react-router-dom';
import img6 from '../../../assets/banner/6.jpg';

const Banner = () => {
  return (
    <div>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
            <img src='https://i.ibb.co/YbX5S3G/3.jpg' className="w-full rounded-lg" />

            <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
            <h2 className="text-3xl font-blod">Popular Food</h2>
            <p>This product is one of the products that have become popular in a very short time. We live among you by presenting new quality products every time. ...</p>
            <div>
            <button className="btn btn-primary mr-5"><Link to="/allfood">More</Link></button>
             </div>
            </div>


            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
            </div> 
        </div>
    </div>
  );
};

export default Banner;