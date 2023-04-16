import AdsCarousel from "../AdsCarousel";
import BikesCarousel from "../BikesCarousel";
import Footer from "../Footer";
import HomeCarousel from "../HomeCarousel";
import SectionHeader from "../SectionHeader";
import TeamCarousel from "../TeamCarousel";
import SectionMap from "../SectionMap";

export default function Impressum() {
  return (
    <>
      <SectionHeader />
      
      <HomeCarousel />

      <AdsCarousel />

      <BikesCarousel />

      <TeamCarousel />

      <SectionMap />

      <Footer />

      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle nachOben"><i className="bi bi-arrow-up"></i></a>
    </>
  );
}