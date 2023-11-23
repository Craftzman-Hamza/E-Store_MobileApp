import React, { useState } from 'react';
import {
  ViroARScene,
  ViroConstants,
  ViroARSceneNavigator,
  ViroImage,
} from 'react-viro';

const Show = (props) => {
  console.log(props.img);

  return (
    <ViroARScene>
      <ViroImage source={{ uri: props.img }} position={[0, 0, -2]} />
    </ViroARScene>
  );
};

const AR = ({ route }) => {
  const { img } = route.params;
  console.log(img);

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: Show,
        passProps: {
          img: img,
        },
      }}
      style={{ flex: 1 }}
    />
  );
};
export default AR;
