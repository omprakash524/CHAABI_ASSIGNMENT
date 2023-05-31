import React from 'react';
import { connect } from 'react-redux';
import { setTypedKeys, setStartTime, setEndTime, calculateAccuracy } from '../store/actions/typingActions';

class TypingApp extends React.Component {
  handleKeyDown = (e) => {
    const { typedKeys, setTypedKeys, setStartTime, setEndTime, calculateAccuracy } = this.props;

    if (e.key === 'Enter') {
      if (this.props.startTime) {
        setEndTime(new Date());
        calculateAccuracy(typedKeys, this.props.nextKeys);
      } else {
        setStartTime(new Date());
      }
    } else {
      setTypedKeys(typedKeys + e.key);
    }
  };

  render() {
    const { typedKeys, nextKeys, accuracy } = this.props;

    return (
        
      <div className="typing-app">
        <input type="text" onKeyDown={this.handleKeyDown} autoFocus />
        <div className="keys-container">
          <span className="keys-label">Next Keys:</span>
          <span className="keys-text">{nextKeys}</span>
        </div>
        <div className="typing-app"/>
        

        <div className="keys-container">
          <span className="keys-label">Typed Keys:</span>
          <span className="keys-text">{typedKeys}</span>
        </div>
        <div className="company-text">CHAABI ASSIGNMENT</div>

        {accuracy !== null && (
          <div className="accuracy-container">
            <span className="accuracy-label">Accuracy:</span>
            <span className="accuracy-text">{accuracy.toFixed(2)}%</span>
          </div>
          
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  typedKeys: state.typedKeys,
  nextKeys: state.nextKeys,
  startTime: state.startTime,
  endTime: state.endTime,
  accuracy: state.accuracy,
});

const mapDispatchToProps = {
  setTypedKeys,
  setStartTime,
  setEndTime,
  calculateAccuracy,
};

export default connect(mapStateToProps, mapDispatchToProps)(TypingApp);
