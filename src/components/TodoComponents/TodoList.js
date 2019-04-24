import React from "react";

export default class TodoList extends React.Component {

    constructor(props){
        super(props);
    }

   itemClicked(id){
    
       let state = this.props.globalState;

       state.todoListItems.forEach(item => {
        if (item['id'] === id){
            item['completed'] = !(item['completed']);
            return;
        }
      });

      this.props.setGlobalState(state);
   }

  renderList() {
    let html = [];
    this.props.globalState.todoListItems.forEach(item => {
      let classCompleted = item['completed'] === true ? 'item completed' : 'item';
      console.log(item['completed']);
      html.push(<span className={classCompleted} key={item['id']} id={item['id']} onClick={ () => {this.itemClicked(item['id'])}}> {item["task"]} </span>);
    });

    return html;
  }
  render() {
    return <div className='item-list'>{this.renderList()}</div>;
  }
}
