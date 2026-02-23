import Header from "../components/header" 
import { Route, Routes } from "react-router-dom"
import ProductPage from "./client/productPage"
import ProductOverview from "./client/productOverview"
import CartPage from "./client/cart"
import CheckOutPage from "./client/checkOut"
import SearchProductPage from "./client/searchProductPage"
import HomeLandingPage from "./client/homeLandingPage" 
import AboutPage from "./client/aboutPage"
import ContactPage from "./client/contactPage"

export default function HomePage(){
    return(
      <div className="w-full min-h-screen flex flex-col items-center">
        <Header/>
        <div className="w-full h-[calc(100vh-80px)] flex flex-col">
          <Routes path="/*">
            <Route path="/" element={<HomeLandingPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/checkout" element={<CheckOutPage/>} />
            <Route path="/search" element={<SearchProductPage/>} />
            <Route path="/overview/:id" element={<ProductOverview/>} />
            <Route path="/*" element={<h1>404 Not Found</h1> }></Route>
          </Routes>
        </div>
        
      </div>
    )
}