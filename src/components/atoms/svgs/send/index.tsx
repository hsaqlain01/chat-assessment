import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SendButton: React.FC<ISvgIconProps> = ({ width, height }) => {
  return (
    <Svg
      id='ic_fluent_send_28_filled'
      width={width}
      height={height}
      viewBox='0 0 29.204 28.068'
    >
      <Path
        id='_-Color'
        data-name='🎨-Color'
        d='M4.217,2.8,30.323,15.287a1.549,1.549,0,0,1,0,2.794L4.217,30.566a1.549,1.549,0,0,1-2.162-1.8l2.611-9.574a.619.619,0,0,1,.514-.451l12.65-1.718a.31.31,0,0,0,.241-.185l.022-.078a.31.31,0,0,0-.194-.332l-.069-.018L5.2,14.687a.619.619,0,0,1-.514-.451L2.055,4.606A1.549,1.549,0,0,1,4.217,2.8Z'
        transform='translate(-2 -2.65)'
        fill='#0049ef'
      />
    </Svg>
  );
};

export default React.memo(SendButton);
