import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTask } from './../actions/addNewTask.js';

class TaskList extends Component {

    renderTaskList() {
        return 
            this.props.taskList.map(item => {
                return (
                    <div>{item.task}</div>
                )
            })
        
    }

    render() {
        return(
            <div>
            {this.renderTaskList()}    
            <form>
                <input/>
                <button onClick={this.props.addNewTask}>Add New Task</button>
            </form>        
            </div>
        )        
        
    }
}

const mapStateToProps = (state) => {
    return {
        taskList: state.taskList
    }
}

export default connect(mapStateToProps, { addNewTask })(TaskList);