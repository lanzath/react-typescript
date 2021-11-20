import React from 'react';

import style from './List.module.scss';

function List() {
  const tasks = [
    { name: 'React', timer: '02:00:00' },
    { name: 'Typescript', timer: '01:30:00' },
    { name: 'C#/.NET 6', timer: '03:00:00' },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((task, index) => (
          <li className={style.item} key={index}>
            <h3> {task.name} </h3>
            <span> {task.timer} </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
