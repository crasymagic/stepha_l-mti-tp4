import React from 'react';

class Target extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div
        id={`target-${this.props.id}`}
        style={{
          position: 'absolute',
          top: `${this.props.location.y}px`,
          left: `${this.props.location.x}px`,
          width: '25px',
          height: '25px',
          textAlign: 'center',
          lineHeight: '25px',
          cursor: 'pointer',
          zIndex: 1000,
          backgroundColor: (this.props.timeout === 5 ? '#49D64D' : (this.props.timeout === 4 ? '#9FD640' : (this.props.timeout === 3 ? '#D6CC4B' : (this.props.timeout === 2 ? '#D69440' : '#D62F21')))),
          borderRadius: '8rem'
        }}
        onClick={() => this.props.onDeleteTarget()}
      >
        {this.props.timeout}
      </div>
    );
  }
}

export default Target;
