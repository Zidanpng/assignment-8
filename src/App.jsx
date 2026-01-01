import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import Home from "./Pages/Home";
import Apps from "./Pages/Apps";
import Installation from "./Pages/Installation";
import AppDetails from "./Pages/AppDetails";
import ErrorApps from "./Pages/ErrorApps";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback="Loading...">
        <Apps></Apps>
        <Home></Home>
        <Installation></Installation>
        <AppDetails></AppDetails>
        <ErrorApps></ErrorApps>
        <Error></Error>
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
