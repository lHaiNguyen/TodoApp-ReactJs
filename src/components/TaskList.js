import React, { Component } from 'react';
import TaskItem from './TaskItem';
export default class TaskList extends Component {
    render() {
        let { tasks, showForm } = this.props;
        return (
            <div className="TaskList">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><input className="form-control"></input></td>
                            <td>
                                <select className="form-control">
                                    <option defaultValue value={-1}>Tất cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích Hoạt</option>
                                </select>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <TaskItem tasks={tasks} showForm={showForm} ></TaskItem>
                    </tbody>
                </table>
            </div>
        )
    }
}