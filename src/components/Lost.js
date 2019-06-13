import React from 'react';

class Lost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true
        }
    }

    onMouseEnter = (event) => {
        const restartDiv = document.getElementById(event.target.id);
        restartDiv.animate(
            [
                { transform: 'scale(1)' },
                { transform: 'scale(1.5)' }
            ],
            {
                duration: 500,
                iterations: 1,
                fill: 'forwards'
            }
        );
        this.setState(Object.assign({}, this.state, { animating: false}));
    };
    
    onMouseLeave = (event) => {
        const restartDiv = document.getElementById(event.target.id);
        restartDiv.animate(
            [
                { transform: 'scale(1.5)' },
                { transform: 'scale(1)' }
            ],
            {
                duration: 500,
                iterations: 1,
                fill: 'forwards'
            }
        );
        this.setState(Object.assign({}, this.state, { animating: true}));
    };

    render() {
        return (
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '300px',
                    height: '200px',
                    margin: 'auto',
                    fontSize: '32px',
                    textAlign: 'center',
                    lineHeight: '100px',
                    backgroundColor: '#303A40',
                    color: 'white',
                    borderRadius: '8px'
                }}
            >
                <div>
                    <span role="img" aria-label="skull">You lost 💀</span>
                    <div style={{ cursor: 'pointer' }} id="restartBtn" onMouseEnter={(event) => this.onMouseEnter(event)} onMouseLeave={(event) => this.onMouseLeave(event)} onClick={this.props.restartGame}>Restart ?</div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.animating) {
                document.getElementById('restartBtn').animate(
                    [
                        { transform: 'scale(1.0)' },
                        { transform: 'scale(1.2)' }
                    ],
                    { duration: 250, iterations: 1, fill: 'forwards' }
                );
                document.getElementById('restartBtn').animate(
                    [
                        { transform: 'scale(1.2)' },
                        { transform: 'scale(1.0)' }
                    ],
                    { duration: 250, iterations: 1, fill: 'forwards' }
                )
            }
        }, 500);
    }
};

export default Lost;
