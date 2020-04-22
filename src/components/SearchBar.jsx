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
            <label htmlFor="search-bar-input">VIDEO</label>
            <SearchInput
              id="search-bar-input"
              type="search"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <Button
              size="small"
              type="submit"
              variant="outlined"
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
  margin: 5px 0;
  background: #4682B4;
  font-size: 16px;
  padding: 15px;
  border: 1px solid #ddd;
`;

const SearchForm = styles.form`
background: #AFEEEE;
`;

const SearchInputBlock = styles.div`
  padding: 15px 0;
  color: #4682B4;
  width: 100%;
  height: 60px;
`;

const SearchInput = styles.input`
  height: 30px;
  width: 300px;
  outline: none;
  background: transparent;
`;
