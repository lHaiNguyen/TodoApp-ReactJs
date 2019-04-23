import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/control/Control';
import TaskList from './components/TaskList';
import TaskProvider, { TaskContex } from './context/Task';
import './App.css';
import { Container, FlexBox, FlexItem } from './common/style/Layout';
class App extends Component {
  constructor() {
    super();
    this.state = {
      isDisplay: false
    }
  }

  onToggleForm = (taskEditing) => {
    this.setState({
      isDisplay: true
    }
    )
  }
  onCloseForm = () => {
    this.setState({
      isDisplay: false
    })
  }

  render() {
    let { isDisplay } = this.state;
    let elmTaskForm = isDisplay ? true : '';
    return (
      <TaskProvider>
        <div className="App">
          <Container>
            <div style={{ marginBottom: `${50}px` }}>
              <h1>Quản Lý Công Việc</h1>
            </div>
            <FlexBox>
              <FlexItem flexGrow={elmTaskForm ? "0.5" : "0"}>
                <TaskContex.Consumer>
                  {
                    ({ taskEditing }) => {
                      return elmTaskForm ? <TaskForm taskEditing={taskEditing} onCloseForm={this.onCloseForm} /> : ''
                    }
                  }
                </TaskContex.Consumer>
              </FlexItem>
              <FlexItem flexGrow="2">
                <div className="mb-3">
                  <TaskContex.Consumer>
                    {
                      ({ taskEditing }) => {
                        return <button className="btn btn-primary mr-2" onClick={() => this.onToggleForm(taskEditing)}>Thêm Công Việc</button>
                      }
                    }
                  </TaskContex.Consumer>
                  <button className="btn btn-danger" onClick={this.onGenerateData}>Create Data</button>
                </div>
                <Control></Control>
                <TaskContex.Consumer>
                  {
                    ({ tasks }) => {
                      return <TaskList tasks={tasks} showForm={this.onToggleForm} ></TaskList>
                    }
                  }
                </TaskContex.Consumer>
              </FlexItem>
            </FlexBox>
          </Container>
        </div>
      </TaskProvider >
    );
  }
}

export default App;
