import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
          <div className="hero h-[400px] bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co/YZX9bQD/james-lee-NGt-Mxoj-Qx6-Y-unsplash.jpg)'}}>
                <div className="hero-content text-center">
                      <div className="max-w-md">
                            <div className="breadcrumbs text-3xl font-extralight text-white">
                                  <ul>
                                       
                                       <li><Link to="/"><a>Home</a></Link></li> 
                                        <li><a>Gallary</a></li> 

                                  </ul>
                            </div>
                      </div>
                </div>
          </div>
    </div>
  );
};

export default Banner;