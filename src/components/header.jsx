import UserData from "./userData";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header(){
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem("token"); 

    const isActive = (path) => location.pathname === path;

    console.log("Header component loading....")
    return(
        <header className="w-full h-[80px] shadow-2xl flex justify-center relative">
            <GiHamburgerMenu className="h-full  text-3xl md:hidden absolute  left-2" onClick={
                ()=>{
                    setSideDrawerOpen(true)
                }
            }/>
            <img onClick={()=>{
                navigate("/")
            }} src="/logo.png" alt="Logo" className="w-[80px] h-[80px] object-cover cursor-pointer ml-10" />
            <div className="w-[calc(100%-16px)] h-full hidden md:flex justify-center items-center" >
                <Link to="/" onClick={()=>setSideDrawerOpen(false)} className={`text-[20px] font-bold mx-2 relative px-4 py-2 transition-all duration-200 rounded-full ${isActive("/") ? "bg-[#2d1a45] text-white shadow-lg" : "text-black hover:bg-gray-200"}`}>Home</Link>
                <Link to="/about" onClick={()=>setSideDrawerOpen(false)} className={`text-[20px] font-bold mx-2 relative px-4 py-2 transition-all duration-200 rounded-full ${isActive("/about") ? "bg-[#2d1a45] text-white shadow-lg" : "text-black hover:bg-gray-200"}`}>About</Link>
                <Link to="/products" onClick={()=>setSideDrawerOpen(false)} className={`text-[20px] font-bold mx-2 relative px-4 py-2 transition-all duration-200 rounded-full ${isActive("/products") ? "bg-[#2d1a45] text-white shadow-lg" : "text-black hover:bg-gray-200"}`}>Products</Link>
                <Link to="/contact" onClick={()=>setSideDrawerOpen(false)} className={`text-[20px] font-bold mx-2 relative px-4 py-2 transition-all duration-200 rounded-full ${isActive("/contact") ? "bg-[#2d1a45] text-white shadow-lg" : "text-black hover:bg-gray-200"}`}>Contact</Link>
                <Link to="/search" onClick={()=>setSideDrawerOpen(false)} className={`text-[20px] font-bold mx-2 relative px-4 py-2 transition-all duration-200 rounded-full ${isActive("/search") ? "bg-[#2d1a45] text-white shadow-lg" : "text-black hover:bg-gray-200"}`}>Search</Link>

            </div>  

            <div className="w-[160px] hidden md:flex justify-center items-center">
                {
                     token==null ?
                    <Link to="/login" className="text-[25px] font-bold mx-2 text-accent">Login</Link>
                    :
                    <button className="text-[20px] font-bold " onClick={()=>{
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        window.location.href = "/";
                        //navigate("/login");
                    }}>
                        Logout</button>
                }
                <Link to="/cart" className="text-[50px] font-bold mr-50 ml-10">
                    <BsCart3 />
                </Link>
            </div>

            {
                sideDrawerOpen &&
                <div className="fixed w-full h-screen bg-[#00000040] flex md:hidden">
                    <div className="w-[300px] bg-white h-full">
                        <div className="w-full h-[80px] shadow-2xl flex justify-center items-center relative">
                            <GiHamburgerMenu className="h-full text-3xl absolute left-2 cursor-pointer" onClick={()=>{
                                setSideDrawerOpen(false);
                            }}/>
                            <img onClick={()=>{
                                window.location.href = "/"
                            }} src="/logo.png" alt="LOGO" className="w-[80px] h-[80px] object-cover cursor-pointer" />
                        </div>
                        <div className="w-full h-[calc(100%-80px)] flex flex-col items-center gap-2">
                            <a href="/" className="text-[20px] font-bold mx-2 my-4">Home</a>
                            <a href="/products" className="text-[20px] font-bold mx-2 my-4">Products</a>
                            <a href="/about" className="text-[20px] font-bold mx-2 my-4">About</a>
                            <a href="/contact" className="text-[20px] font-bold mx-2 my-4">Contact</a>
                            <a href="/cart" className="text-[50px] font-bold mx-10 my-4">
                                <BsCart3 />
                            </a>
                        </div>   
                    
                    </div>
                </div>
            }


        </header>
    )
}
//function name should equal to tag that we will create
//to change the text size in manually we use [] like in "text-[100px]"