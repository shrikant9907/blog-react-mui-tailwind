import { Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogListing from "./pages/BlogListing";
import PageNotFound from "./pages/PageNotFound";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<BlogListing />} />
          <Route path="blog/:blogId" element={<BlogDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
     </>
    );
}

export default App;
