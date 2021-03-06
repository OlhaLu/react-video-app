import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from 'styled-components';

class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  onInputChange = event => {
    this.setState({
      term: event.target.value,
    });
  };

  render() {
    return (
      <SearchBlock>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchInputBlock>
            <SearchInput
              id="search-bar-input"
              type="search"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <Button
              size="small"
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
            >
              Search
            </Button>
          </SearchInputBlock>
        </SearchForm>
      </SearchBlock>
    );
  }
}

export default SearchBar;

const SearchBlock = styles.div`
  text-align: center;
  font-size: 16px;
  border: 1px solid #4682B4;
`;

const SearchForm = styles.form`
background: #008080;
`;

const SearchInputBlock = styles.div`
  padding: 20px 0 0 0;
  color: #00008B;
  width: 100%;
  height: 60px;
`;

const SearchInput = styles.input`
  height: 30px;
  width: 300px;
  outline: none;
  background: transparent;
`;
