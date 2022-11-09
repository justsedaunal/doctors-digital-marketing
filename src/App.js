import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ImagesSlider from "./components/slider/imagesSlider";
import ServicesCard from "./components/servicesCard/card";
import { imagesdata } from "./data/imagesdata";
import { servicesData } from "./data/servicesData";
import ImageText from "./components/imageText/imageText";
import Text from "./components/texts/text";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <ImagesSlider imagesdata={imagesdata} />

        <ServicesCard servicesData={servicesData} />
        <ImageText />
        <Text />
      </div>

      <Footer />
    </>
  );
}

export default App;
