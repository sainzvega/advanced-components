import React from 'react';
import styles from './styles';
import { StepperContext } from './Stepper';

const Stage = ({ num }) => (
  <StepperContext.Consumer>
    {context => {
      const { stage } = context;
      return <div style={circleStyle(stage, num)}>{num}</div>;
    }}
  </StepperContext.Consumer>
);

const circleStyle = (current, circleSection) => {
  if (current === circleSection) {
    return { ...styles.circle, ...styles.circleActive };
  } else if (current > circleSection) {
    return { ...styles.circle, ...styles.circleComplete };
  }
  return styles.circle;
};

const Progress = ({ children }) => {
  return <div style={styles.progressContainer}>{children}</div>;
};

export { Stage, Progress as default };
