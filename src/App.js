import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ImagesSlider from "./components/slider/imagesSlider";
import ServicesCard from "./components/servicesCard/card";
import { imagesdata } from "./data/imagesdata";
import { servicesData } from "./data/servicesData";

function App() {
  return (
    <div className="container">
      <Navbar />
      <ImagesSlider imagesdata={imagesdata} />

      <ServicesCard servicesData={servicesData} />
      <ImagesSlider imagesdata={imagesdata} />
    </div>
  );
}

export default App;
