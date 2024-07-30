import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const PasswordInput = (props) => {
  const [password, setPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    props.onChange(e.target.value);
  };


  return (
    <div className="password-input-wrapper">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange }
        placeholder="Enter your password"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="password-toggle-button"
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </button>
    </div>
  );
};


export default PasswordInput;