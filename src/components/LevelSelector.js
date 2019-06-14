import React from 'react';
import LevelSelectorEnum from '../misc/levelSelectorEnum';

class LevelSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: '160px',
            margin: 'auto',
            width: '300px',
            height: '30px',
            textAlign: 'center',
            background: '#C73508',
            opacity: '0.7',
            color: 'white',
            borderRadius: '8px'
        }}>
            <form id="changeLevelSelector">
                <div className="form-group">
                    <label>
                    Select the difficulty level
                    <select onChange={this.props.onChangeValue} style={{marginLeft: '10px', marginTop: '2px'}}>
                        <option value={LevelSelectorEnum.EASY.globalTimeoutLevel}>{LevelSelectorEnum.EASY.name}</option>
                        <option value={LevelSelectorEnum.MEDIUM.globalTimeoutLevel}>{LevelSelectorEnum.MEDIUM.name}</option>
                        <option value={LevelSelectorEnum.HARD.globalTimeoutLevel}>{LevelSelectorEnum.HARD.name}</option>
                        <option value={LevelSelectorEnum.EXPERT.globalTimeoutLevel}>{LevelSelectorEnum.EXPERT.name}</option>
                        <option value={LevelSelectorEnum.LEGENDARY.globalTimeoutLevel}>{LevelSelectorEnum.LEGENDARY.name}</option>
                        <option value={LevelSelectorEnum.GOTAGA.globalTimeoutLevel}>{LevelSelectorEnum.GOTAGA.name}</option>
                    </select>
                    </label>
                </div>
            </form>
        </div>
        
      /*<div
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
      </div>*/
    );
  }
}

export default LevelSelector;
