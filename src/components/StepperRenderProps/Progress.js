import React from 'react';
import styles from './styles';

export const Stage = ({ stage, num }) => <div style={circleStyle(stage, num)}>{num}</div>;

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

export default Progress;
