// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Externals
import { selectFarmAction } from '../Game/actions';
import greenFarm from '../../assets/images/greenFarm.jpg';
// Internals
import Choose from './styles/Choose';
import GreenFarm from './styles/GreenFarm';
import Title from './styles/Title';
import Wrapper from './styles/Wrapper';


class Splash extends Component {
  static propTypes = {
    // Action creators
    selectFarm: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.hide !== this.state.hide) {
      return true;
    }
    return false;
  }

  onFarmSelect = (farm) => {
    this.setState({ hide: true });
    this.props.selectFarm(farm);
  }

  render() {
    return (
      <Wrapper hide={this.state.hide}>
        <Title>Farm Haven</Title>
        <Choose>Choose Your Farm</Choose>
        <GreenFarm
          alt="Green Farm"
          farm="green"
          onClick={() => this.onFarmSelect('green')}
          src={greenFarm}
        />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectFarm: (farm) => dispatch(selectFarmAction(farm)),
})

export default connect(null, mapDispatchToProps)(Splash);