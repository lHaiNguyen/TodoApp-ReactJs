import React, { Component } from 'react';
export default class Sort extends Component {
    render() {
        return (
            <div className="Sort">
                <div className="form-group">
                    <select id="" className="form-control">
                        <option defaultValue>Lựa chọn...</option>
                        <option>Từ A-Z</option>
                    </select>
                </div>
            </div>
        )
    }
}