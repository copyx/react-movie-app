import PropTypes from "prop-types";

export default function Movie({key, year, title, summary, poster}) {
  return <h4>{title}</h4>
}

Movie.propTypes = {
  key: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
