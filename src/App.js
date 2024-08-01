import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeRent from "./pages/HomeRent";
import HomeBuy from "./pages/HomeBuy";
import RentDetailPage from "./pages/RentDetailPage";
import BuyDetailPage from "./pages/BuyDetailPage";
import SignUp from "./pages/SignUp";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-buy":
        title = "";
        metaDescription = "";
        break;
      case "/rent-detail-page":
        title = "";
        metaDescription = "";
        break;
      case "/buy-detail-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeRent />} />
      <Route path="/home-buy" element={<HomeBuy />} />
      <Route path="/rent-detail-page" element={<RentDetailPage />} />
      <Route path="/buy-detail-page" element={<BuyDetailPage />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
