import Footer from "../Footer";
import SectionImpressum from "../SectionImpressum";

export default function Home() {
  return (
    <>
      <SectionImpressum />

      <Footer />

      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle nachOben"><i className="bi bi-arrow-up"></i></a>
    </>
  );
}
