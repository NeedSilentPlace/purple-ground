import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

function Home({ focused, color, play }) {
  const lottie = useRef(null);

  useEffect(() => {
    if(play) {
      lottie.current.play();
    }
  }, [play]);

  const colorFilters = [
    { keypath: "home Outlines", color }
  ]

  return (
    <LottieView
      ref={lottie}
      source={require('../../../public/lottie/home.json')} 
      style={{ width: 30, height: 30 }}
      colorFilters={colorFilters}  
      loop={false}
    />
  );
}

export default Home;
