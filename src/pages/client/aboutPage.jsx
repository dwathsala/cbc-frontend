import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <div className="w-full h-full overflow-auto bg-[#f5ede0]">
            
            {/* Hero Section */}
            <div className="w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center bg-[#2d1a45]">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">About Us</h1>
                <p className="text-purple-300 text-lg md:text-xl">Natural Beauty, Pure Ingredients</p>
            </div>

            {/* Our Story Section */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16">
                <div className="w-full md:w-1/2">
                    <img 
                        src="/About.png" 
                        alt="Our Story" 
                        className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h2 className="text-[#2d1a45] text-3xl md:text-4xl font-bold">Our Story</h2>
                    <p className="text-gray-600 text-[16px] leading-relaxed">
                        Welcome to Dula Cosmetics! We are passionate about bringing you the finest 
                        natural cosmetic products. Our journey started with a simple belief that
                        beauty should be natural, pure, and accessible to everyone.
                    </p>
                    <p className="text-gray-600 text-[16px] leading-relaxed">
                        Every product we offer is carefully selected with natural ingredients 
                        that are kind to your skin and the environment. We believe that 
                        true beauty comes from within and is enhanced by nature.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="w-full bg-white py-16 px-6 md:px-20">
                <h2 className="text-[#2d1a45] text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
                    
                    {/* Value Card 1 */}
                    <div className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md bg-[#f5ede0]">
                        <div className="text-5xl mb-4">🌿</div>
                        <h3 className="text-[#2d1a45] text-xl font-bold mb-3">100% Natural</h3>
                        <p className="text-gray-500 text-[15px]">
                            All our products are made from carefully sourced natural ingredients 
                            with no harmful chemicals.
                        </p>
                    </div>

                    {/* Value Card 2 */}
                    <div className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md bg-[#f5ede0]">
                        <div className="text-5xl mb-4">💜</div>
                        <h3 className="text-[#2d1a45] text-xl font-bold mb-3">Cruelty Free</h3>
                        <p className="text-gray-500 text-[15px]">
                            We are proudly cruelty free. None of our products are 
                            tested on animals, ever.
                        </p>
                    </div>

                    {/* Value Card 3 */}
                    <div className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md bg-[#f5ede0]">
                        <div className="text-5xl mb-4">♻️</div>
                        <h3 className="text-[#2d1a45] text-xl font-bold mb-3">Eco Friendly</h3>
                        <p className="text-gray-500 text-[15px]">
                            Our packaging is sustainable and eco friendly because 
                            we care about our planet.
                        </p>
                    </div>

                </div>
            </div>

            {/* Team Section */}
            <div className="w-full py-16 px-6 md:px-20 bg-[#f5ede0]">
                <h2 className="text-[#2d1a45] text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md bg-white">
                        <div className="w-[100px] h-[100px] rounded-full bg-[#2d1a45] flex items-center justify-center text-white text-4xl mb-4">
                            👩
                        </div>
                        <h3 className="text-[#2d1a45] text-xl font-bold">Sarah Johnson</h3>
                        <p className="text-purple-400 text-[14px] mb-3">Founder & CEO</p>
                        <p className="text-gray-500 text-[14px]">Passionate about natural beauty and sustainability.</p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md bg-white">
                        <div className="w-[100px] h-[100px] rounded-full bg-[#2d1a45] flex items-center justify-center text-white text-4xl mb-4">
                            👩‍🔬
                        </div>
                        <h3 className="text-[#2d1a45] text-xl font-bold">Emily Chen</h3>
                        <p className="text-purple-400 text-[14px] mb-3">Head of Research</p>
                        <p className="text-gray-500 text-[14px]">Expert in natural ingredients and skincare formulation.</p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md bg-white">
                        <div className="w-[100px] h-[100px] rounded-full bg-[#2d1a45] flex items-center justify-center text-white text-4xl mb-4">
                            👨‍💼
                        </div>
                        <h3 className="text-[#2d1a45] text-xl font-bold">Mark Davis</h3>
                        <p className="text-purple-400 text-[14px] mb-3">Marketing Director</p>
                        <p className="text-gray-500 text-[14px]">Bringing natural beauty stories to the world.</p>
                    </div>

                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full bg-[#2d1a45] py-16 px-6 flex flex-col items-center justify-center gap-6">
                <h2 className="text-white text-3xl md:text-4xl font-bold text-center">Ready to Explore Our Products?</h2>
                <p className="text-purple-300 text-lg text-center">Discover our full range of natural cosmetics</p>
                <Link
                    to="/products"
                    className="bg-white text-[#2d1a45] text-[18px] font-bold px-10 py-3 rounded-full hover:bg-purple-100 transition"
                >
                    Shop Now
                </Link>
            </div>

        </div>
    );
}