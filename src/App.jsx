import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
function App() {


  return (
    <>
      <div id="canvas">
        <div id="box_wrapper">
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
