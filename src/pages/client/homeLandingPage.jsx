import { Link } from "react-router-dom";
export default function HomeLandingPage() {
    return (
        <div
            className="w-full h-full flex flex-col overflow-hidden"
            style={{
                backgroundImage: "url('/homePage.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="bg-[#00000060] w-full h-full flex flex-col items-center sm:items-start justify-center px-6 sm:px-10 md:px-16 lg:px-20">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Welcome to Our Store</h1>
                <p className="text-white text-m sm:text-lg md:text-lg lg:text-2xl mb-6 md:mb-8">Discover the best products just for you</p>
                <Link 
                    to="/products" 
                    className="bg-white text-black text-[18px] font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition "
                >
                    Shop Now
                </Link>
            </div>
        </div>
    );
}