import React, { useState } from 'react';

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const validateEmail = () => {
    // You can use a regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  const validatePassword = () => {
    setPasswordValid(password.length >= 8);
  };

  const validateConfirmPassword = () => {
    setConfirmPasswordValid(confirmPassword === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  return (
    <div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailValid(false); // Reset validation on input change
          }}
          onBlur={validateEmail}
          style={{ border: emailValid ? '2px solid green' : '2px solid red' }}
        />
        {!emailValid && <div>Error: Invalid email format</div>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordValid(false);
          }}
          onBlur={validatePassword}
        />
        {!passwordValid && <div>Error: Password must be at least 8 characters long</div>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordValid(false);
          }}
          onBlur={validateConfirmPassword}
        />
        {!confirmPasswordValid && <div>Error: Passwords do not match</div>}
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormComponent;