import './css/main.css';
import ShowTodos from './components/ShowTodos';
import Todos from './components/Todos';

function App() {
	return (
		<div className='App'>
			<h1 className='title'>TODOS STORE</h1>
			<div>
				<Todos />
				<ShowTodos />
			</div>
		</div>
	);
}

export default App;
