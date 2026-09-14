import React from 'react';
import {Composition} from 'remotion';
import {Flagship01} from './Flagship01';

export const Root: React.FC = () => (
  <Composition
    id="Flagship01"
    component={Flagship01}
    durationInFrames={10350}
    fps={30}
    width={1920}
    height={1080}
  />
);
