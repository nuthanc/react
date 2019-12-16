import React from 'react';

class SearchBar extends React.Component {
    searchTerm = () => {

    }
    render(){
        return (
          <form className="ui form">
            <div className="field">
              <input type="text" onSubmit={this.searchTerm}/>
            </div>
          </form>
        );
    }
}

export default SearchBar;