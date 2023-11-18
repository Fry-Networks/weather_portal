import React from 'react';

const WeatherXMTokenInput = ({
  token,
  setToken,
  setValid,
  disappear,
  type,
}: {
  token: string;
  setToken: Function;
  setValid: Function;
  disappear: boolean;
  type: 'ambient' | 'ecowitt' |'weatherXM';
}) => (
  <input
    type="text"
    value={token}
    autoComplete="off"
    data-lpignore="true"
    data-form-type="other"
    onChange={(e) => {
      setToken(e.target.value);
      type === 'weatherXM'
        ? setValid(/^[A-Za-z0-9\-._~+/]+=*$/.test(e.target.value))
        : setValid(e.target.value !== '');
    }}
    placeholder="Enter your Token"
    style={keyInputStyle}
    className={disappear ? 'fade-out' : ''}
  />
);

const keyInputStyle = {
  color: 'black',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
};

export default WeatherXMTokenInput;
