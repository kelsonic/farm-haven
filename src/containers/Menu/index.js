// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Internals
import Farm from './styles/Farm';
import Info from './styles/Info';
import Points from './styles/Points';
import Wrapper from './styles/Wrapper';


class Menu extends Component {
  static propTypes = {
    farm: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
  };

  render() {
    const { farm, points } = this.props;

    return (
      <Wrapper>
        <Info>
          <p>Farm: <Farm>{farm}</Farm></p>
          <p>Points: <Points>{points.toString()}</Points></p>
        </Info>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    farm: state.game.farm,
    points: state.game.points,
  };
};

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
