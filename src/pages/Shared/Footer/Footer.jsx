
import { FaFacebook, FaLinkedin, FaInstagram, FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <div>



         <footer className="bg-purple-300 text-stone-950 py-12 px-4 font-sans tracking-wide">
      <div className="text-center">
        <h6 className="text-base ">Stay connected with us:</h6>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-4 my-8">
          {/* Facebook */}
          <li>
            <a
              href="javascript:void(0)"
              className="text-xl hover:text-gray-400"
              aria-label="Facebook"
            >
              <FaFacebook className="inline w-7 h-7" />
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              href="javascript:void(0)"
              className="text-xl hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="inline w-7 h-7" />
            </a>
          </li>

          

          {/* Google */}
          <li>
            <a
              href="javascript:void(0)"
              className="text-xl hover:text-gray-400"
              aria-label="Google"
            >
              <FaGoogle className="inline w-7 h-7" />
            </a>
          </li>
        </ul>

        <p className="text-base">© RMC. All rights reserved.</p>
      </div>
    </footer>




    
        
      
    </div>
  );
};

export default Footer;