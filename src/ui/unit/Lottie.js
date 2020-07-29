import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

function Lottie({ focused, color, play }) {
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

  return (
    <LottieView
      ref={lottie}
      source={require('../../../public/lottie/cart.json')} 
      style={{ width: 28, height: 28 }}
      colorFilters={colorFilters}  
      loop={false}
    />
  );
}

export default Lottie;
