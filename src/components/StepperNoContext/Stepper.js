import React from 'react';
import Progress, { Stage } from './Progress';
import Steps, { Step } from './Steps';
import styles from '../styles';

/*
NOTE: This component was recreated following this tutorial to understand how compund components are used. 
https://itnext.io/using-advanced-design-patterns-to-create-flexible-and-reusable-react-components-part-1-dd495fa1823
*/

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
  }

  render() {
    const { stage } = this.state;
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { stage, handleClick: this.handleClick });
    });
    return (
      <div style={styles.container}>
        {children}
      </div>
    );
  }
}

export default Stepper;
