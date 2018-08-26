import React from 'react';
import Stepper from '../components/StepperRenderProps';

const RenderProps = () => {
  return (
    <div>
      <Stepper stage={1}>
        {({ stage, handleClick }) => {
          return (
            <React.Fragment>
              <Stepper.Steps stage={stage} handleClick={handleClick} maxCount={5}>
                <Stepper.Step stage={stage} num={1} text={'Stage 1'} />
                <Stepper.Step stage={stage} num={2} text={'Stage 2'} />
                <Stepper.Step stage={stage} num={3} text={'Stage 3'} />
                <Stepper.Step stage={stage} num={4} text={'Stage 4'} />
                <Stepper.Step stage={stage} num={5} text={'Complete'} />
              </Stepper.Steps>
              <Stepper.Progress>
                <Stepper.Stage stage={stage} num={1} />
                <Stepper.Stage stage={stage} num={2} />
                <Stepper.Stage stage={stage} num={3} />
                <Stepper.Stage stage={stage} num={4} />
              </Stepper.Progress>
            </React.Fragment>
          );
        }}
      </Stepper>
    </div>
  );
};

export default RenderProps;
