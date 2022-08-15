import React, { useState } from 'react';
import { Container, FormGroup, TaskList, ClearAll } from './styles';
import { FaCheck, FaTrash } from 'react-icons/fa';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export function Main() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  function handleAddClick() {
    if (inputValue === '') {
      alert('Input is empty, please insert a valid task!');
      return;
    }

    setTodoList([...todoList, inputValue]);
    setInputValue('');
  }

  function handleClearTasks() {
    setTodoList([]);
  }

  return (
    <Container>
      <h2>Todo App</h2>
      <FormGroup>
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="btn-add-task" onClick={handleAddClick}>
          <FaCheck />
        </button>
      </FormGroup>

      <TaskList>
        <SimpleBar style={{ maxHeight: 300 }}>
          <ul>
            {todoList.map((todo) => {
              return (
                <>
                  <li>
                    {todo}
                    <a onClick={handleClearTasks}>
                      <FaTrash />
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </SimpleBar>
      </TaskList>

      <div>
        You have {todoList.length} pending tasks.
        <ClearAll onClick={handleClearTasks}>Clear Tasks</ClearAll>
      </div>
    </Container>
  );
}
