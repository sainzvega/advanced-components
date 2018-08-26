import React from 'react';
import Stepper from '../components/StepperWithContext';
import { StepperContext } from '../components/StepperWithContext/Stepper';

// Random component to test whether or not context is being passed correctly.
const TestRandomStepperConsumer = () => (
  <StepperContext.Consumer>
    {({ stage }) => {
      return <h3>stage: {stage}</h3>;
    }}
  </StepperContext.Consumer>
);

const CompoundComponentWithContext = () => {
  return (
    <div>
      <Stepper stage={1}>
        <TestRandomStepperConsumer />
        <Stepper.Steps>
          <Stepper.Step num={1} text={'Stage 1'} />
          <Stepper.Step num={2} text={'Stage 2'} />
          <Stepper.Step num={3} text={'Stage 3'} />
          <Stepper.Step num={4} text={'Stage 4'} />
          <Stepper.Step num={5} text={'Complete'} />
        </Stepper.Steps>

        <Stepper.Progress>
          <Stepper.Stage num={1} />
          <Stepper.Stage num={2} />
          <Stepper.Stage num={3} />
          <Stepper.Stage num={4} />
        </Stepper.Progress>
      </Stepper>
    </div>
  );
};

export default CompoundComponentWithContext;
