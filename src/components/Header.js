import React, { useState } from 'react';



const Header = () => {
  const [flashContato, setFlashContato] = useState(false);
  const [flashNegociar, setFlashNegociar] = useState(false);
  const [flashHome, setFlashHome] = useState(false);

  const containerStyle = {
    width: '60%', // Reduzir para 60%
    height: '60%', // Reduzir para 60%
    position: 'relative',
  };

  const retangulo1Style = {
    width: '405px', // Reduzir para 60% (675 * 0.6)
    height: '48.51px', // Reduzir para 60% (80.85 * 0.6)
    left: '0px',
    top: '0px',
    position: 'absolute',
    background: '#39393A',
    boxShadow: '6px 6px 2.4px rgba(0, 0, 0, 0.25)', // Reduzir para 60%
    borderRadius: '9px', // Reduzir para 60%
  };

  const retangulo2Style = {
    width: '113.4px', // Reduzir para 60% (189 * 0.6)
    height: '36.6px', // Reduzir para 60% (61 * 0.6)
    left: '6.6px', // Reduzir para 60%
    top: '6px', // Reduzir para 60%
    position: 'absolute',
    background: '#FFFAFF',
    borderRadius: '6px', // Reduzir para 60%
  };

  const buttonBaseStyle = {
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    fontSize: '14.4px', // Reduzir para 60% (24 * 0.6)
    fontFamily: 'Amiko',
    fontWeight: '400',
    wordWrap: 'break-word',
    border: 'none',
    cursor: 'pointer',
    opacity: 1,
    transition: 'opacity 0.3s',
  };

  const contatoButtonStyle = {
    ...buttonBaseStyle,
    color: '#FFFAFF',
    left: '165px', // Reduzir para 60%
    top: '18.6px', // Reduzir para 60%
    opacity: flashContato ? 0 : 1,
    background: 'transparent',
  };

  const negociarButtonStyle = {
    ...buttonBaseStyle,
    color: '#FFFAFF',
    left: '297px', // Reduzir para 60%
    top: '17.4px', // Reduzir para 60%
    opacity: flashNegociar ? 0 : 1,
    background: 'transparent',
  };

  const homeButtonStyle = {
    ...buttonBaseStyle,
    color: '#39393A',
    left: '37.2px', // Reduzir para 60%
    top: '18px', // Reduzir para 60%
    opacity: flashHome ? 0 : 1,
    background: 'transparent',
  };

  const handleButtonClick = (buttonType, setFlashFunction) => {
    setFlashFunction(true);

    // Remover a classe de flash após 300 milissegundos (ou o tempo desejado)
    setTimeout(() => {
      setFlashFunction(false);
    }, 300);
  };

  return (
    <div style={containerStyle}>
      <div style={retangulo1Style}></div>
      <button
        style={contatoButtonStyle}
        onClick={() => handleButtonClick('contato', setFlashContato)}
      >
        CONTATO
      </button>
      <div style={retangulo2Style}></div>
      <button
        style={negociarButtonStyle}
        onClick={() => handleButtonClick('negociar', setFlashNegociar)}
      >
        NEGOCIAR
      </button>
      <button
        style={homeButtonStyle}
        onClick={() => handleButtonClick('home', setFlashHome)}
      >
        HOME
      </button>
    </div>
  );
};

export default Header;
