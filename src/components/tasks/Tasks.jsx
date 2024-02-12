import React from 'react';
import classNames from "classnames";

import './tasks.scss';

const Tasks = ({ items }) => {

   return (
      <ul className='sidebar__list'>
         {items.map((obj) => (
            <li
               key={obj.id}
               className={classNames(obj.className, { 'active': obj.active })}
            >
               <button className='sidebar__item-btn'>
                  <i className={`sidebar__list-i sidebar__list-i--${obj.color}`}></i>
                  <span className='sidebar__btn-text'>{obj.name}</span>
               </button>
            </li>
         ))}
      </ul>
   );
};

export default Tasks;