import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
export default class Control extends Component {
    render() {
        return (
            <div className="Control">
                <div className="row">
                    <div className="col-md-6">
                        <Search></Search>
                    </div>
                    <div className="col-md-6">
                        <Sort></Sort>
                    </div>
                </div>
            </div>
        )
    }
}