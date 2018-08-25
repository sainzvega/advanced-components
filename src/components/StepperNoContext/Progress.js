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

const Progress = ({ stage, children }) => {
  const mappedChildren = React.Children.map(children, child => {
    return React.cloneElement(child, { stage });
  });

  return <div style={styles.progressContainer}>{mappedChildren}</div>;
};

export default Progress;
