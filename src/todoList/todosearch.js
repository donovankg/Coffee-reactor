import React, { Component} from 'react';

const TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input className = "form-control" type = "search" ref = "searchText" placeholder = "Search todos" onChange = {this.handleSearch}/>
        </div>
        <div className = "checkbox">
          <label>
            <input type = "checkbox" ref = "showCompleted" onChange = {this.handleSearch} />
            Show completed todos

          </label>
        </div>
      </div>
    )
  }
})

export default TodoSearch;
