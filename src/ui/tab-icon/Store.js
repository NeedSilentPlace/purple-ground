import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

function Store({ focused, color, play }) {
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
      style={{ width: 30, height: 30 }}
      colorFilters={colorFilters}  
      loop={false}
    />
  );
}

export default Store;
