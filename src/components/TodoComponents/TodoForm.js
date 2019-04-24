import React from 'react';

export default class TodoForm extends React.Component {
 
    // Clear complete items from list
    clearButtonClicked(event){
        event.preventDefault();
        let state = this.props.globalState;

        if (!state.useSearch){
            state.todoListItems = state.todoListItems.filter((item) => {
                return !item.completed;
            });
            state.useSearch = false;
            this.props.setGlobalState(state);
            window.localStorage.setItem('listState', JSON.stringify(this.props.globalState));
        }
        else{
            state.useSearch = false;
            this.props.setGlobalState(state);
        }
    }

    // Add item to list
    addButtonClicked(event){
        event.preventDefault();

        if (this.refs.inputField.value.length === 0) return;

        let state = this.props.globalState;
        state.useSearch = false;
        state.todoListItems.push({'task': this.refs.inputField.value,
                            'id': Date.now(),
                            'completed': false
        });
  
        this.refs.inputField.value = '';
        this.props.setGlobalState(state);
        window.localStorage.setItem('listState', JSON.stringify(this.props.globalState));
    }

     // Search item
     searchButtonClicked(event){
        event.preventDefault();

        if (this.refs.inputField.value.length === 0) return;

        let state = this.props.globalState;
        state.listSearch = [];
        state.listSearch = state.todoListItems.filter((item) => {
            return item['task'].includes(this.refs.inputField.value);
        });
        
        if (state.listSearch.length > 0)
            state.useSearch = true;
        else{
            alert(`${this.refs.inputField.value} was not found`);
            state.useSearch = false;
        }
        this.refs.inputField.value = '';

        this.props.setGlobalState(state);
    }

  render() {
      let clearButtonText = this.props.globalState.useSearch ? 'Clear Search' : 'Clear Completed';
    return (
      <form className='input'>
      <div class='input-area'>
        <input type='text' ref='inputField' className='input-box'/>
            <button className='add-btn btn' onClick={this.addButtonClicked.bind(this)}>Add</button>
        </div>
        <div class='button-group'>
            
            <button className='clear-btn btn btn-grp' onClick={this.clearButtonClicked.bind(this)}>{clearButtonText}</button>
            <button className='search-btn btn btn-grp' onClick={this.searchButtonClicked.bind(this)}>Search</button>
        </div>
      </form>
    );
  }
}