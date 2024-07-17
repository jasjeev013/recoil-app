import { useRecoilValue } from 'recoil';
import './App.css';
import Todos from './components/Todos';
import { totalTodosCount } from './state/selectors/TotalTodos';

function App() {

  const totalTodoState = useRecoilValue(totalTodosCount);
  return (
      <div className="App">
        <h1>Hey</h1>
        <Todos />
        <h3>Total todos: {totalTodoState}</h3>
      </div>
  );
}

export default App;
