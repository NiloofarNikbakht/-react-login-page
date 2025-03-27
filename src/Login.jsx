import React, { useState, useEffect } from 'react';
import './Login.css'; 
import logo from './assets/ozex.png'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showSplash, setShowSplash] = useState(true); // State to control splash screen

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // Hide splash screen after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Validates the email format and updates the error message if it's invalid
  const validateEmail = (email) => {
    const isValid = /^\S+@\S+\.\S+$/.test(email);
    setEmailError(isValid ? '' : 'Format d\'email invalide');
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission action

    if (!email || !password) {
      setEmailError('Les deux champs sont requis');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Corrigez les erreurs avant de soumettre.');
      return;
    }

    alert('Connexion réussie!'); // Display success message via alert
    setEmailError(''); // Clear any email errors
  };

  if (showSplash) {
    return (
      <div className="splash-screen">
        <img src={logo} alt="Logo Ozex" className="logo-img" />
      </div>
    );
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Logo Ozex" className="logo-img" />

        <input
          type="text"
          className="login-input"
          placeholder="Nom d'utilisateur"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div className="error-message">{emailError}</div>}

        <input
          type="password"
          className="login-input"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-button">S'IDENTIFIER</button>

        <div className="signup-prompt">
          Vous n'avez pas de compte? <a href="/signup" className="signup-link">Inscrivez-vous maintenant.</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
