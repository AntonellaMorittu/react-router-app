import { Link } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    // passing the id from props
    <Link to={`/movie/${id}`}>
      <article className="movieCard">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
        <div className="">
          <p>Released {release_date}</p>
          <h2>{title}</h2>
        </div>
      </article>
    </Link>
  );
};
