export default (taskList = [{task: 'test'}], action) => {
    switch (action.type){
        case 'NEWTASK':
            return [
                ...taskList,
                {
                    task: action.newTask
                }
            ];
        default:
            return taskList;

    }
}