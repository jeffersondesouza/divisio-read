import React from 'react';

import './style/error-message.scss';

const ErrorMessage = ({ text }) => (
  <div className="error-message">{text}</div>
);

export default ErrorMessage;