import React from 'react';
import { Power2, TweenLite } from 'gsap';
import { TransitionGroup, Transition } from 'react-transition-group';
import { StepperContext } from './Stepper';
import styles from './styles';

export const Step = ({ num, text }) => (
  <div key={num} style={styles.stageContent}>
    {text}
  </div>
);

const entering = node => {
  TweenLite.fromTo(
    node,
    1,
    {
      scaleX: 0.9,
      scaleY: 0.9,
      opacity: 0,
      cx: 500
    },
    {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      cx: 0,
      ease: Power2.easeOut
    }
  ).delay(0.4);
};

const exiting = node => {
  TweenLite.to(node, 0.6, {
    opacity: 0,
    onComplete: console.log('hgdfhdgfj')
  });
};

const Steps = ({ children }) => {
  return (
    <StepperContext.Consumer>
      {context => {
        let childCount = 0;
        const { stage, onClick } = context;
        const mappedChildren = React.Children.map(children, child => {
          if (child.type.name === 'Step' && stage === child.props.num) {
            childCount += 1;
            return (
              <Transition appear={true} timeout={300} onEntering={entering} onExiting={exiting}>
                {child}
              </Transition>
            );
          } else if (child.type.name === 'Step' && stage !== child.props.num) {
            childCount += 1;
            return null;
          } else {
            return child;
          }
        });

        return (
          <div style={styles.stagesContainer}>
            <div style={styles.stages}>
              <TransitionGroup>{mappedChildren}</TransitionGroup>
            </div>
            <div style={styles.stageButton}>
              <button onClick={onClick} disabled={stage === childCount}>
                Continue
              </button>
            </div>
          </div>
        );
      }}
    </StepperContext.Consumer>
  );
};

export default Steps;
