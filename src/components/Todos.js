import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';

const mapStateToProps = (state) => {
	return {
		todos: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (obj) => dispatch(addTodos(obj)),
	};
};

const Todos = (props) => {
	const [todo, setTodo] = useState('');
	console.log(props);

	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	const add = () => {
		if (todo === '') {
			alert('Input is Empty');
		} else {
			props.addTodo({
				id: Math.floor(Math.random() * 1000),
				item: todo,
				completed: false,
			});
			setTodo('');
		}
	};

	return (
		<div className='addTodos'>
			<input
				type='text'
				onChange={handleChange}
				className='todo-input'
				value={todo}
			/>
			<br />
			<button className='add-btn' onClick={add}>
				+
			</button>
			<br />
		</div>
	);
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
