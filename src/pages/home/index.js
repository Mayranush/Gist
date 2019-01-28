import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWhiskies } from '../../actions/homeActions';

class HomeComponent extends Component {
  render() {
    const {
      fetchWhiskies,
      isLoading,
      error,
      whiskies
    } = this.props;
console.log(this.props.homeReducer);
    return (
      <div className="App">
        <button onClick={fetchWhiskies}>Fetch whiskies</button>
        {isLoading && <h1>Fetching data</h1>}
        {!isLoading && !error && <div> whiskies={whiskies} </div>}
        {error && <h1>{error}</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchWhiskies
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);