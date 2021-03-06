import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

function Lottie({ focused, color, play, source }) {
  const lottie = useRef(null);

  useEffect(() => {
    if(play) {
      lottie.current.play();
    }
  }, [play]);

  const colorFilters = [
    { keypath: "Carrito", color }
  ,
    { keypath: "Ruedas", color }
  ,
    { keypath: "Ruedas 3", color }
  ,
  ]

  // source={require('../../../public/lottie/cart.json')} 
  return (
    <LottieView
      ref={lottie}
      source={source}
      style={{ width: 27, height: 27 }}
      colorFilters={colorFilters}  
      loop={false}
    />
  );
}

export default Lottie;
