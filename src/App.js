import './App.css';
import Logo from './components/Logo';
import Task from './components/Task';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <Logo />
      <div className='task-manager-main'>
        <h1 className='title'>
          My Tasks
        </h1>
        <TaskList />
      </div>
    </div>
    
  );
}

export default App;
