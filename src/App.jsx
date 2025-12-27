import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback="Loading..."></Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
