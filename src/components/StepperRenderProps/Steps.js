import React from 'react';
import { Power2, TweenLite } from 'gsap';
import { TransitionGroup, Transition } from 'react-transition-group';
import styles from './styles';

export const Step = ({ stage, num, text }) =>
  stage === num ? (
    <div key={num} style={styles.stageContent}>
      {text}
    </div>
  ) : null;

// const entering = node => {
//   TweenLite.fromTo(
//     node,
//     1,
//     {
//       scaleX: 0.9,
//       scaleY: 0.9,
//       opacity: 0,
//       cx: 500
//     },
//     {
//       scaleX: 1,
//       scaleY: 1,
//       opacity: 1,
//       cx: 0,
//       ease: Power2.easeOut
//     }
//   ).delay(0.4);
// };

// const exiting = node => {
//   TweenLite.to(node, 0.6, {
//     opacity: 0,
//     onComplete: console.log('hgdfhdgfj')
//   });
// };

const Steps = ({ maxCount, stage, handleClick, children }) => {
  return (
    <div style={styles.stagesContainer}>
      <div style={styles.stages}>{children}</div>
      <div style={styles.stageButton}>
        <button onClick={handleClick} disabled={stage === maxCount}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Steps;
