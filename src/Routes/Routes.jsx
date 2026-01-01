import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import MainLayout from "../Layout/MainLayout";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Error from "../Pages/Error";
import { ToastContainer } from "react-toastify";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="apps" element={<Apps />}></Route>
          <Route path="apps/:id" element={<AppDetails />}></Route>
          <Route path="installations" element={<Installation />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
