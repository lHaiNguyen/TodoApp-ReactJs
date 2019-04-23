import React, { Component } from 'react';
export default class Search extends Component {
    render () {
        return (
            <div className="Search">
                <div className="input-group">
                    <input placeholder="Nhập từ khóa..." className="form-control"></input>
                    <span className="input-group-btn">
                        <button className="btn btn-primary"><span className="fa fa-search mr-1"></span>Tìm</button>
                    </span>
                </div>
            </div>
        ) 
    }
}