import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTask } from './../actions/addNewTask.js';
let input;
class TaskList extends Component {


    

    render() {
        return(
            <div>
            {this.props.taskList.map(item => {
                return (
                    <div>{`Task: ${item.task}`}</div>
                )
            })}    
            <form onSubmit={(event) =>{
                 event.preventDefault();
                 this.props.addNewTask(input.value)}}>
                <input ref={node => input = node}/>
                <button type='submmit' >Add New Task</button>
            </form>        
            </div>
        )        
        
    }
}

const mapStateToProps = (state) => {
    return {
        taskList: state
        
    }
}

export default connect(mapStateToProps, { addNewTask })(TaskList);