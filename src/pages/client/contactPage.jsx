import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="w-full h-full overflow-auto bg-[#f5ede0]">

            {/* Hero Section */}
            <div
                className="w-full min-h-[400px] flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "url('/Contact.png')", 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="w-full h-full min-h-[400px] bg-[#00000060] flex flex-col items-center justify-center py-16">
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                    <p className="text-purple-200 text-lg md:text-xl">We would love to hear from you</p>
                </div>
            </div>

            {/* Get In Touch + Form Section */}
            <div className="w-full flex flex-col lg:flex-row gap-10 px-6 md:px-20 py-16">

                {/* Left - Get In Touch */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <h2 className="text-[#2d1a45] text-3xl md:text-4xl font-bold">Get In Touch</h2>
                    <p className="text-gray-500 text-[18px] leading-relaxed">
                        Have a question about our products? Want to place a bulk order? 
                        Or simply want to say hello? We are here for you. 
                        Reach out to us through any of the channels below.
                    </p>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <div className="w-[55px] h-[55px] rounded-full bg-[#2d1a45] flex items-center justify-center shrink-0">
                            <FaPhone className="text-white text-xl" />
                        </div>
                        <div>
                            <h3 className="text-[#2d1a45] font-bold text-[17px]">Phone Number</h3>
                            <p className="text-gray-500 text-[16px]">+94 77 123 4567</p>
                            <p className="text-gray-500 text-[16px]">+94 11 234 5678</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <div className="w-[55px] h-[55px] rounded-full bg-[#2d1a45] flex items-center justify-center shrink-0">
                            <FaEnvelope className="text-white text-xl" />
                        </div>
                        <div>
                            <h3 className="text-[#2d1a45] font-bold text-[17px]">Email Address</h3>
                            <p className="text-gray-500 text-[16px]">info@dulacosmetics.com</p>
                            <p className="text-gray-500 text-[16px]">support@dulacosmetics.com</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-4">
                        <div className="w-[55px] h-[55px] rounded-full bg-[#2d1a45] flex items-center justify-center shrink-0">
                            <FaMapMarkerAlt className="text-white text-xl" />
                        </div>
                        <div>
                            <h3 className="text-[#2d1a45] font-bold text-[17px]">Our Address</h3>
                            <p className="text-gray-500 text-[16px]">No. 123, Galle Road,</p>
                            <p className="text-gray-500 text-[16px]">Colombo 03, Sri Lanka</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-[#2d1a45] font-bold text-[16px] mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"
                                className="w-[45px] h-[45px] rounded-full bg-[#2d1a45] flex items-center justify-center hover:bg-purple-700 transition">
                                <FaFacebook className="text-white text-xl" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"
                                className="w-[45px] h-[45px] rounded-full bg-[#2d1a45] flex items-center justify-center hover:bg-purple-700 transition">
                                <FaInstagram className="text-white text-xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"
                                className="w-[45px] h-[45px] rounded-full bg-[#2d1a45] flex items-center justify-center hover:bg-purple-700 transition">
                                <FaTwitter className="text-white text-xl" />
                            </a>
                            <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer"
                                className="w-[45px] h-[45px] rounded-full bg-[#2d1a45] flex items-center justify-center hover:bg-purple-700 transition">
                                <FaWhatsapp className="text-white text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right - Contact Form */}
                <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <h2 className="text-[#2d1a45] text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                    
                    <div className="flex flex-col gap-5">
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#2d1a45] font-bold text-[15px]">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:border-[#2d1a45] transition"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#2d1a45] font-bold text-[15px]">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:border-[#2d1a45] transition"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#2d1a45] font-bold text-[15px]">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:border-[#2d1a45] transition"
                            />
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#2d1a45] font-bold text-[15px]">Subject</label>
                            <input
                                type="text"
                                placeholder="What is this about?"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:border-[#2d1a45] transition"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#2d1a45] font-bold text-[15px]">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:border-[#2d1a45] transition resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            className="w-full bg-[#2d1a45] text-white text-[16px] font-bold py-3 rounded-lg hover:bg-purple-800 transition mt-2"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}