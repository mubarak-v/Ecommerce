import BestOffer from "../bestOffer/BestOffer";
import Mobile from "../mobiles/Mobile";
import MobileAccessories from "../mobileAccessories/MobileAccessories";
import ProductList from "../productList/ProductList";

function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="components/home/assets/ad-14.webp"
              className="d-block w-100"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="components/home/assets/ad-12.webp"
              className="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="components/home/assets/ad-13.webp"
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <BestOffer />
      <Mobile />
      <MobileAccessories />
      <ProductList />
    </>
  );
}

export default Home;
