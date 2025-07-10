import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import MyProfile from "./MyProfile";
import CategoryBar from "./CategoryBar";
import CategoryProducts from "./CategoryProducts";
import SellPage from "./SellPage";
import HeroCarousel from "./HeroCarousel";
import SpecialFeatures from "./SpecialFeatures";
import SecurePayments from "./SecurePayments";
import FastDelivery from "./FastDelivery";
import EasyReturns from "./EasyReturns";
import Support24x7 from "./Support24x7";
import Products from "./Products";
import Cart from "./Cart";
import SearchResults from "./SearchResults";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";
import AdminUserList from "./AdminUserList";
import AdminLogin from "./AdminLogin";
import Orders from "./Orders";
import LoginSignupPage from "./LoginSignupPage"; // ✅ new import

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CategoryBar />
              <HeroCarousel />
              <SpecialFeatures />
              <Products />
              <Footer />
            </>
          }
        />
        <Route path="/LoginSignupPage" element={<LoginSignupPage />} /> {/* ✅ Added */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/category/:categoryName" element={<CategoryProducts />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/secure-payments" element={<SecurePayments />} />
        <Route path="/fast-delivery" element={<FastDelivery />} />
        <Route path="/easy-returns" element={<EasyReturns />} />
        <Route path="/support-24x7" element={<Support24x7 />} />

        <Route
          path="/product/:id"
          element={
            localStorage.getItem("token") ? (
              <ProductDetail />
            ) : (
              <Navigate to="/LoginSignupPage" />
            )
          }
        />

        <Route path="/admin" element={<AdminUserList />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* fallback */}
      </Routes>
    </>
  );
};

export default App;

