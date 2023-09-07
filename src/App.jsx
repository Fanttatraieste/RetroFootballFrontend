import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Icons from "./pages/Icons/Icons";
import Header from "./components/Header/Header";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="icons" element={<Icons />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// console.log(store);
