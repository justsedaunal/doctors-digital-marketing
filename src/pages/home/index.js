import Blog from "../../components/blog/blog";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import ImageText from "../../components/imageText/imageText";
import Navbar from "../../components/navbar/Navbar";
import ServicesCard from "../../components/servicesCard/card";
import ImagesSlider from "../../components/slider/imagesSlider";
import { imagesdata } from "../../data/imagesdata";
import { servicesData } from "../../data/servicesData";
import Faq from "../../components/faq/faq";

function Home() {
  return (
    <>
      <ImagesSlider imagesdata={imagesdata} />

      <ServicesCard servicesData={servicesData} />
      <ImageText />
      <Blog />
      <Contact />
      <Faq />
    </>
  );
}

export default Home;
