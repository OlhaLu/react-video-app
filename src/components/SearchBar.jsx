import React, { Component } from 'react';
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
            <label htmlFor="search-bar-input">Video Search</label>
            <SearchInput
              id="search-bar-input"
              type="search"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <SearchButton type="submit">Search Video</SearchButton>
          </SearchInputBlock>
        </SearchForm>
      </SearchBlock>
    );
  }
}

export default SearchBar;

const SearchBlock = styles.div`
  margin: 20px 0;
  background: #4682B4;
  font-size: 18px;
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
  // margin: 20px;
  outline: none;
  background: transparent;
`;

const SearchButton = styles.button`
  height: 30px;
  width: 120px;
  cursor: pointer;


  &:before {
    content: '\f002';
    font-size: 16px;
    color: #4682B4;
  }
`;
