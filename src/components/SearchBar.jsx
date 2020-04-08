import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.item);
  };

  onInputChange = event => {
    this.setState({
      term: event.target.value,
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-bar-input">Video Search</label>
            <input
              id="search-bar-input"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;