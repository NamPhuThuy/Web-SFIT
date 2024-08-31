import { Link } from "react-scroll";
import "../index.css";


function NavBar() {
    return (
        <div className="flex justify-end items-center
                        h-14 gap-16
                        *:px-7 *:flex *:justify-center
                        [&_div]:flex [&_div]:flex-col [&_div]:justify-center [&_div]:font-semibold [&_div]:text-2xl [&_div]:text-white
                        [&_div]:pb-2
                        [&_div]:border-b-[5px] [&_div]:border-transparent
                        [&_div]:transition-colors [&_div]:ease-in [&_div]:duration-200
                        [&_a]:transition-transform [&_a]:ease-in-out [&_a]:duration-200">
                        
            <div className='hover:border-white group'>
                <Link className="group-hover:-translate-x-1
                                 group-hover:animate-[fading_0.4s_ease-in-out_0ms]" to="home" smooth={true} duration={500}>
                Trang chủ</Link>
            </div>

            <div className='hover:border-white group'>
                <Link className="group-hover:-translate-x-1 
                                 group-hover:animate-[fading_0.4s_ease-in-out_0ms]" to="aim"  smooth={true} duration={500}>
                Các ban trực thuộc</Link>
            </div>

            <div className='hover:border-white group'>
                <Link className="group-hover:-translate-x-1 
                                 group-hover:animate-[fading_0.4s_ease-in-out_0ms]" to="activites" smooth={true} duration={500}>
                Hoạt động</Link>
            </div>

            <div className='hover:border-white group'>
                <Link className="group-hover:-translate-x-1 
                                 group-hover:animate-[fading_0.4s_ease-in-out_0ms]" to="training" smooth={true} duration={500}>
                Đào tạo</Link>
            </div>
        </div>
    )
}

export default NavBar;