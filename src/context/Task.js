import React, { Component } from "react";
export const TaskContex = React.createContext();

export default class TaskProvider extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            taskEditing: ''
        }
    }
    componentWillMount() {
        if (localStorage && localStorage.getItem('task')) {
            let task = localStorage.getItem('task');
            this.setState({
                tasks: JSON.parse(task)
            })
        } else {
        }
    }
    s4() {
        return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
    }
    generateId() {
        return this.s4() + this.s4() + '-' + this.s4()
    }
    addNewTask = (task) => {
        let { tasks } = this.state;
        if (task.id === '') {
            task.id = this.generateId();
            this.setState({
                tasks: [...this.state.tasks, task]
            },
                localStorage.setItem('task', JSON.stringify(this.state.tasks))
            )
        } else {
            let index = this.findIndex(task.id);
            tasks[index] = task;
            this.setState({
                tasks: tasks,
                taskEditing: null
            },
                localStorage.setItem('task', JSON.stringify(this.state.tasks))
            )
        }

    }
    findIndex = (id) => {
        let result = -1;
        this.state.tasks.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        })
        return result;
    }
    onUpdate = async (taskId, cb) => {
        let { tasks } = this.state;
        let index = this.findIndex(taskId)
        let taskEditing = tasks[index];
        this.setState({
            taskEditing: taskEditing
        }, cb)
    }
    render() {
        return (
            <TaskContex.Provider value={{
                tasks: this.state.tasks,
                taskEditing: this.state.taskEditing,
                addNewTask: this.addNewTask,
                onUpdate: this.onUpdate
            }}>
                {this.props.children}
            </TaskContex.Provider>
        )
    }
}