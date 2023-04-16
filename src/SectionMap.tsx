export default function SectionMap() {
  return (
<div className="karte-wrapper">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
        <h1 className="display-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">Hier können Sie uns finden:</h1> {/* Füge wow fadeInUp Animation hinzu */}
      </div>
      <div className="karte-container wow fadeInUp" data-wow-delay="0.3s">
        <img src="img/karte.png" alt="Karte" className="karte" />
        <div className="marker" title="Ortsname"></div>
      </div>
    </div>
  );
}
