import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

function Gear({ focused, color, play }) {
  const lottie = useRef(null);

  useEffect(() => {
    if(play) {
      lottie.current.play(0, 90);
    }
  }, [play]);

  const colorFilters = [
    { keypath: "GearHollowAltWeb Outlines", color }
  ]

  return (
    <LottieView
      ref={lottie}
      source={require('../../../public/lottie/gear.json')} 
      style={{ width: 30, height: 30 }}
      colorFilters={colorFilters}  
      loop={false}
    />
  );
}

export default Gear;
