export default (taskList = [{task: 'test'}, {task: 'test2'}], action) => {
    switch (action.type){
        case 'NEWTASK':
            return [
                ...taskList,
                {
                    task: action.task
                }
            ];
        default:
            return taskList;

    }
}