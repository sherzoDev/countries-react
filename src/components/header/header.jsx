import "./header.css";
import siteLogo from "../../assets/images/icons/site-logo.svg";
import themeBtn from "../../assets/images/icons/modes.svg";

function header() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-wrapper">
            <a href="../../../public/index.html" className="header-logo">
              <img src={siteLogo} alt="Dowloading . . ." />
            </a>
            <div className="theme">
              <button className="theme-btn" type="button">
                <img
                  className="theme-logo"
                  src={themeBtn}
                  alt="Downloading . . ."
                />
                <span className="dark-mode">Dark Mode</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
