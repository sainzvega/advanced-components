import React from 'react';
import Progress, { Stage } from './Progress';
import Steps, { Step } from './Steps';
import styles from './styles';

const StepperContext = React.createContext({
  stage: 1,
  onClick: () => {}
});

class Stepper extends React.Component {
  static Progress = Progress;
  static Stage = Stage;
  static Steps = Steps;
  static Step = Step;
  static defaultProps = {
    stage: 1
  };

  handleClick = () => {
    this.setState(({ stage }) => ({ stage: stage + 1 }));
  };

  state = {
    stage: this.props.stage,
    onClick: this.handleClick
  };

  render() {
    return (
      <StepperContext.Provider value={this.state}>
        <div style={styles.container}>{this.props.children}</div>
      </StepperContext.Provider>
    );
  }
}

export { StepperContext, Stepper as default };
