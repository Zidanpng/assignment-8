import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import Home from "./Pages/Home";
import Apps from "./Pages/Apps";
import Installation from "./Pages/Installation";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback="Loading...">
        {/* <Apps></Apps> */}
        {/* <Home></Home> */}
        <Installation></Installation>
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
