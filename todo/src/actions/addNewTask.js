export const addNewTask = (task) => {
    return {
        type: 'NEWTASK',
        task: task
    }
}