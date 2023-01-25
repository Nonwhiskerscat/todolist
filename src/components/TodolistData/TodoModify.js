/*eslint-disable*/
import { useCallback, useEffect, useState } from 'react';
import '../TodolistStyle/TodoModify.scss';

function TodoEdit({selectedTodo, onUpdate }) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  
  const onSubmit = useCallback(
    (e) => {
      onUpdate(selectedTodo.id, value);
      setValue('')
      e.preventDefault();
    },
    [onUpdate, value]
  );



  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="modify_modal">
        <h3>내용 수정</h3>
        <div className='modify_flex'>
          <input className='modify_input'
            onChange={onChange}
            value={value}
            // placeholder="내용을 입력하라냥!"
          />
          <button onSubmit={onSubmit} className='modify_btn' type="submit">수정</button>
        </div>

      </form>
    </div>
  );
}

export default TodoEdit;
