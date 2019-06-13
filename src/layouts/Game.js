import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';
import ButtonStop from '../components/ButtonStop';
import { deleteTargetRequested } from '../actions/targets';
import { gameStartRequested, gameStopRequested } from '../actions/game';

// FIXME: maybe, do something about this ?
  const mapStateToProps = state => {
    console.log(state);
    return {
      lives: state.targets.lives,
      score: state.targets.score,
      isStarted: state.game.isStarted,
      isLost: state.targets.isLost, 
      targets: state.targets.targets
    }
};

const GameLayout = ({ isStarted, isLost, lives, score, targets, dispatch }) => (
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
    {isStarted ? (!isLost ? (
      <React.Fragment>
        <ButtonStop onClick={() => dispatch(gameStopRequested())}></ButtonStop>
        <Info lives={lives} score={score} />
        {
          targets.map((target, index) => {
            return (
              <Target
                key={index}
                {...target}
                onDeleteTarget={() => dispatch(deleteTargetRequested(target.id))}
              />
            );
          })
        }
      </React.Fragment>
    ) : (<div>You lost!</div>)) : (
      <React.Fragment>
        <ButtonStart onClick={() => dispatch(gameStartRequested())} />
      </React.Fragment>
    )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
