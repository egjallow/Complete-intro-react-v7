import react from "react";
import { render } from "react-dom";
import SearchParams from "./SearchPrams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
          </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
render(<App />, document.getElementById("root"));
