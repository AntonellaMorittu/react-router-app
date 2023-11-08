import { Route } from "react-router-dom";
import { Home } from "../components/Home";
import { MyInfo } from "../components/MyInfo";
import { NotFoundPage } from "../components/NotFoundPage";
import { MovieInfo } from "../components/movies/MovieInfo";
import { Movies } from "../components/movies/Movies";
import { SongInfo } from "../components/songs/SongInfo";

export const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/info" element={<MyInfo />} />
    {/*  error page, whenever you don't find the route, go here */}
    <Route path="*" element={<NotFoundPage />} />
    {/* Definition of a dynamic route here */}
    <Route path="/song/:songTitle" element={<SongInfo />} />
    {/* Movie Routes */}
    <Route path="/movies/:id" element={<MovieInfo />} />
    <Route path="/movies" element={<Movies />} />
  </>
);
