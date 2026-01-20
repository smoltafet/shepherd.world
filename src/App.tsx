import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/ui/footer-section";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { PricingPage } from "./pages/Pricing";
import { PageTransition } from "./components/PageTransition";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </PageTransition>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <div className="text-white bg-black min-h-full font-suisseintltrial">
        <Header />
        <AppRoutes />
        <div className="pt-24 pb-8">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
