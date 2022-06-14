import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, DetailsView } from "../views";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/details/:name" element={<DetailsView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
