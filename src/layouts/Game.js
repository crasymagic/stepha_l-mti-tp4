import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';

// FIXME: maybe, do something about this ?
const mapStateToProps = state => ({
  lives: state.game.lives,
  score: state.game.score,
  isStarted: state.game.isStarted
});

const GameLayout = ({ isStarted, lives, score, dispatch }) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      margin: 'auto'
    }}
  >
    {isStarted ? (
      <React.Fragment>
        <Info lives={lives} score={score} />
        <Target x={Math.floor(Math.random() * window.innerWidth) + 1} y={Math.floor(Math.random() * window.innerHeight) + 1} value={2} />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <ButtonStart onClick={() => dispatch({ type: 'GAME_START_REQUESTED' })} />
      </React.Fragment>
    )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
