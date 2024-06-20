import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { RiFileTextLine } from "react-icons/ri";
const Navbar = () => {
    return ( 
        <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center lg:pl-20">
            <span className="text-3xl font-bold">Lm</span>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/lucas-michellys-a812501a9/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
        <a href="https://github.com/Frxchy" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
        <a href="mailto:lucas.michellys@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MdMailOutline />
                </a>
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <RiFileTextLine />
                </a>
        </div>
    </nav>
    );
}

export default Navbar
