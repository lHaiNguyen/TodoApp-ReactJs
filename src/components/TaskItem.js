import React, { Component } from 'react';
import { TaskContex } from '../context/Task';
import {
    Button
} from '../common/style/TaskForm';
export default class TaskItem extends Component {
    render() {
        let { tasks, showForm } = this.props;
        return (
            <React.Fragment>
                {
                    tasks.map((item, index) =>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>
                                <span className={item.status ? 'badge badge-success' : 'badge badge-danger'}>{item.status ? 'Kích hoạt' : 'Ẩn'}</span>
                            </td>
                            <td>
                                <TaskContex.Consumer>
                                    {
                                        ({ onUpdate }) =>
                                            <Button className="btn btn-sm btn-warning mr-2" onClick={() => {
                                                onUpdate(item.id, showForm)
                                            }}>Sửa</Button>

                                    } 
                                </TaskContex.Consumer>
                                <Button className="btn btn-sm btn-danger">Xóa</Button>
                            </td>
                        </tr>

                    )
                }

            </React.Fragment>
        )
    }
}