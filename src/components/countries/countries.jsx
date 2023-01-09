import "./countries.css";
import german from "../../assets/images/jpg/flag-germany.jpg";
import usa from "../../assets/images/jpg/flag-usa.jpg";
import brazil from "../../assets/images/jpg/flag-brazil.jpg";
import iceland from "../../assets/images/jpg/iceland.jpg";
import afganistan from "../../assets/images/jpg/afganistan.jpg";
import island from "../../assets/images/jpg/island.jpg";
import albania from "../../assets/images/jpg/albania.jpg";
import algeria from "../../assets/images/jpg/algeria.jpg";

export default function countries() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="countries">
            <ul className="count-list">
              <li className="count-item">
                <img src={german} alt="Downloading . . ." />
                <div className="card-desc">
                  <h3 className="card-title">Germany</h3>
                  <p className="card-text">
                    <strong className="card-span">Population:</strong>
                    81,770,900
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Region:</strong>
                    Europe
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Capital:</strong>
                    Berlin
                  </p>
                </div>
              </li>
              <li className="count-item">
                <img src={usa} alt="Downloading . . ." />
                <div className="card-desc">
                  <h3 className="card-title">United States of America</h3>
                  <p className="card-text">
                    <strong className="card-span">Population:</strong>
                    323,947,000
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Region: </strong>
                    Americas
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Capital:</strong>
                    Washington, D.C.
                  </p>
                </div>
              </li>
              <li className="count-item">
                <img src={brazil} alt="Downloading . . ." />
                <div className="card-desc">
                  <h3 className="card-title">Brazil</h3>
                  <p className="card-text">
                    <strong className="card-span">Population:</strong>
                    206,135,893
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Region:</strong>
                    Americas
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Capital:</strong>
                    Brasília
                  </p>
                </div>
              </li>
              <li className="count-item">
                <img src={iceland} alt="Downloading . . ." />
                <div className="card-desc">
                  <h3 className="card-title">Iceland</h3>
                  <p className="card-text">
                    <strong className="card-span">Population:</strong>
                    334,300
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Region:</strong>
                    Europe
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Capital:</strong>
                    Reykjavík
                  </p>
                </div>
              </li>
              <li className="count-item m-top">
                <img src={afganistan} alt="Downloading . . ." />
                <div className="card-desc">
                  <h3 className="card-title">Afghanistan</h3>
                  <p className="card-text">
                    <strong className="card-span">Population:</strong>
                    27,657,145
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Region:</strong>
                    Asia
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Capital:</strong>
                    Kabul
                  </p>
                </div>
              </li>
              <li className="count-item m-top">
                <img src={island} alt="Downloading . . ." />
                <div className="card-desc">
                  <h3 className="card-title">Åland Islands</h3>
                  <p className="card-text">
                    <strong className="card-span">Population:</strong>
                    28,875
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Region:</strong>
                    Europe
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Capital:</strong>
                    Mariehamn
                  </p>
                </div>
              </li>
              <li className="count-item m-top">
                <img src={albania} alt="Downloading . . ." />
                <div className="card-desc">
                  <h3 className="card-title">Albania</h3>
                  <p className="card-text">
                    <strong className="card-span">Population:</strong>
                    2,886,026
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Region:</strong>
                    Europe
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Capital:</strong>
                    Tirana
                  </p>
                </div>
              </li>
              <li className="count-item m-top">
                <img src={algeria} alt="Downloading . . ." />
                <div className="card-desc">
                  <h3 className="card-title">Algeria</h3>
                  <p className="card-text">
                    <strong className="card-span">Population:</strong>
                    40,400,000
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Region:</strong>
                    Africa
                  </p>
                  <p className="card-text">
                    <strong className="card-span">Capital:</strong>
                    Algiers
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
