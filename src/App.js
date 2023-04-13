import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import Movies from "./Screens/Movies";
import SingleMovie from "./Screens/SingleMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<SingleMovie />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
