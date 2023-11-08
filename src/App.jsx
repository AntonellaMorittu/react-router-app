import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { MyInfo } from "./components/MyInfo";
import { NotFoundPage } from "./components/NotFoundPage";
import { MovieInfo } from "./components/movies/MovieInfo";
import { Movies } from "./components/movies/Movies";
import { SongInfo } from "./components/songs/SongInfo";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/info" element={<MyInfo />} />
    <Route path="*" element={<NotFoundPage />} />
    {/* Definition of a dynamic route here */}
    <Route path="/song/:songTitle" element={<SongInfo />} />
    {/* Movie Routes */}
    <Route path="/movie/:id" element={<MovieInfo />} />
    <Route path="/movies" element={<Movies />} />
  </Routes>
);

const NavBar = () => (
  <nav>
    <ul className="list">
      <li className="listItem">
        <NavLink to="/">Home</NavLink>
      </li>
      {/* Wrong approach using the react router  */}
      <li className="listItem">
        <a href="/movies">Movies using a tag</a>
      </li>

      <li className="listItem">
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li className="listItem">
        <NavLink to="/info">My Info</NavLink>
      </li>
    </ul>
  </nav>
);

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {/* rendere one route at a time */}
      {routes}
    </BrowserRouter>
  );
};
