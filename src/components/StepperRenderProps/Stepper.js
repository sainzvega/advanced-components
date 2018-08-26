import React from 'react';
import Progress, { Stage } from './Progress';
import Steps, { Step } from './Steps';
import styles from './styles';

class Stepper extends React.Component {
  static Progress = Progress;
  static Stage = Stage;
  static Steps = Steps;
  static Step = Step;
  state = {
    stage: this.props.stage
  };

  static defaultProps = {
    stage: 1
  };

  handleClick = () => {
    this.setState(({ stage }) => ({ stage: stage + 1 }));
  };

  render() {
    const { stage } = this.state;
    return <div style={styles.container}>{this.props.children({ stage, handleClick: this.handleClick })}</div>;
  }
}

export default Stepper;
