export default function AdsCarousel() {
  return (
    <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-0 schatten">
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
        <div className="feature-item border h-100 p-5">
          <i className="bi bi-tree img-fluid mb-4" style={{ fontSize: '4rem' }}></i>
          <h5 className="mb-3">Umweltfreundlich unterwegs</h5>
          <p className="mb-0">Genießen Sie die Stadt und schonen Sie dabei die Umwelt mit unseren modernen E-Bikes.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
        <div className="feature-item border h-100 p-5">
          <i className="bi bi-bicycle img-fluid mb-4" style={{ fontSize: '4rem' }}></i>
          <h5 className="mb-3">Mühelos und bequem</h5>
          <p className="mb-0">Lassen Sie sich von unseren E-Bikes unterstützen und entdecken Sie die Stadt ohne Anstrengung.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
        <div className="feature-item border h-100 p-5">
          <i className="bi bi-clock img-fluid mb-4" style={{ fontSize: '4rem' }}></i>
          <h5 className="mb-3">Flexibel und unabhängig</h5>
          <p className="mb-0">Erkunden Sie die Stadt in Ihrem eigenen Tempo mit unseren leicht zugänglichen E-Bike-Verleihstationen.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
        <div className="feature-item border h-100 p-5">
          <i className="bi bi-shield-check img-fluid mb-4" style={{ fontSize: '4rem' }}></i>
          <h5 className="mb-3">Sicher und zuverlässig</h5>
          <p className="mb-0">Unsere E-Bikes werden regelmäßig gewartet, damit Sie sicher und sorgenfrei unterwegs sind.</p>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}
