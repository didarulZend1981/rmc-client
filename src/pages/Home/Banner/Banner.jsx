
import img6 from '../../../assets/banner/6.jpg';

const Banner = () => {
  return (
    <div>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
            <img src='https://i.ibb.co/YbX5S3G/3.jpg' className="w-full rounded-lg" />

            <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
            <h2 className="text-6xl font-blod">Affordable Price For Car Serviceing</h2>
            <p>There are many variation of passges of available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">latest Project</button>
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