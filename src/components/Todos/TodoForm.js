import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState('');

  function onSubmitHadler(event) {
    event.preventDefault();
    addTodo(todoText);
    setTodoText('');
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHadler}>
        <input
          className={styles.Todo}
          value={todoText}
          onChange={(ev) => setTodoText(ev.target.value)}
          type="text"
          placeholder="Enter new todo"
        />
        <Button title="Submit" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
