import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.class = "Alert";
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  getClassName = () => {
    return this.class
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
    this.class = "offline";
  }
}

export { InfoAlert, ErrorAlert, WarningAlert, OfflineAlert };