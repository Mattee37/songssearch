import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Song = ({ letra }) => {
  if (letra.length === 0) return null;
  return (
    <Fragment>
      <h2>Letra</h2>
      <p className="letra">{letra}</p>
    </Fragment>
  );
};

Song.propTypes = {
  letra: PropTypes.string.isRequired
};

export default Song;
