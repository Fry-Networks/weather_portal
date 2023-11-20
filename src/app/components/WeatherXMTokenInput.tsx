import React from 'react';

const WeatherXMTokenInput = ({
  token,
  setToken,
  setValid,
  disappear,
  type,
  placeholder,
  inputType
}: {
  token: string;
  setToken: Function;
  setValid: Function;
  disappear: boolean;
  placeholder: string;
  inputType:string;
  type: 'ambient' | 'ecowitt' |'weatherXM'|'';
}) => (
  <input
    type={inputType}
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
    placeholder={placeholder}
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
