import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';
import { deleteTargetRequested } from '../actions/targets';
import { gameStartRequested } from '../actions/game';

// FIXME: maybe, do something about this ?
const mapStateToProps = state => ({
  lives: state.game.lives,
  score: state.game.score,
  isStarted: state.game.isStarted, 
  targets: state.game.targets
});

const GameLayout = ({ isStarted, lives, score, targets, dispatch }) => (
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
        {
          targets.map((target) => {
            return (
              <Target
                key={target.id}
                {...target}
                onDeleteTarget={() => dispatch(deleteTargetRequested(target.id))}
              />
            );
          })
        }
      </React.Fragment>
    ) : (
      <React.Fragment>
        <ButtonStart onClick={() => dispatch(gameStartRequested())} />
      </React.Fragment>
    )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
