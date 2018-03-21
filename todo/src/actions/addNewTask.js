export const addNewTask = (task) => {
    return {
        type: 'NEWTASK',
        newTask: task
    }
}