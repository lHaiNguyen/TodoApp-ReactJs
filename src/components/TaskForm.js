import React, { Component } from 'react';
import { TaskContex } from '../context/Task';
import {
    Panel,
    PanelHeading,
    PanelTitle,
    PanelBody,
    PanelFooter,
    Button
} from '../common/style/TaskForm';
import "./TaskForm.css";
export default class TaskForm extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }
    componentWillMount() {
        if (this.props.taskEditing) {
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            })
        }
    }
    componentWillReceiveProps(nextProp) {
        console.log(nextProp);

        if (nextProp && nextProp.taskEditing) {
            this.setState({
                id: nextProp.taskEditing.id,
                name: nextProp.taskEditing.name,
                status: nextProp.taskEditing.status
            })
        } else {
            console.log('change')
        }

    }
    onSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
    }
    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === 'status') {
            value = event.target.value ? true : false;
        }
        this.setState({
            [name]: value
        })
    }
    render() {
        let { onCloseForm } = this.props;
        return (
            <div className="TaskForm">
                <Panel className="panel">
                    <PanelHeading>
                        <PanelTitle>
                            {this.props.taskEditing ? 'Cập nhật công việc' : 'Thêm công việc mới'}
                        </PanelTitle>
                    </PanelHeading>
                    <form onSubmit={this.onSubmit}>
                        <PanelBody>
                            <div className="form-group">
                                <label>Tên:</label>
                                <input className="form-control" name="name" value={this.state.name} onChange={this.onChange}></input>
                            </div>
                            <div className="form-group">
                                <label>Trạng thái:</label>
                                <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
                                    <option value="false">Ẩn</option>
                                    <option value="true">Kích Hoạt</option>
                                </select>
                            </div>
                        </PanelBody>
                        <PanelFooter>
                            <TaskContex.Consumer>
                                {({ addNewTask }) => (
                                    <Button className="btn btn-sm btn-warning mr-2" type="submit" onClick={() => addNewTask(this.state)}>Lưu Lại</Button>
                                )}
                            </TaskContex.Consumer>
                            <Button className="btn btn-sm btn-danger" onClick={onCloseForm}>Hủy Bỏ</Button>
                        </PanelFooter>
                    </form>
                </Panel>


            </div>
        )
    }
}

