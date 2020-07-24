import React from 'react'
import FastImage from 'react-native-fast-image'


function Image({ uri, source,  width = "100%", height = "100%", style = {}, resizeMode = 'cover', avatar = false }) {
  let src = {};
  if (uri) {
    src.uri = uri;
  } else if (source) {
    src = source
  }

  const _style = { width, height, ...style };
  
  if (avatar) {
    _style.borderRadius = width / 2;
  }

  return (
    <FastImage 
      style={_style}
      source={src}
      resizeMode={FastImage.resizeMode[resizeMode]}
    />
  );
}

export default Image;
