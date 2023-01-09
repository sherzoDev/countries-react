import "./searchbox.css";
import searchLogo from "../../assets/images/icons/search.svg";

const searchbox = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="searchBox">
            <form action="#" className="count-form">
              <img
                className="search-logo"
                src={searchLogo}
                alt="Downloading . . ."
              />
              <input
                className="search-text"
                type="text"
                placeholder="Search for a country…"
              />
            </form>
            <select className="select">
              <option value="Filter by Region">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </main>
    </>
  );
};

export default searchbox;
