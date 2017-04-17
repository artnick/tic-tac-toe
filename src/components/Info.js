import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ text }) => (
  <h2>{text}</h2>
);

Info.propTypes = {
  text: PropTypes.string,
};

export default Info;