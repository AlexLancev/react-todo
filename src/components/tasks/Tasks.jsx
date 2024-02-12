import React from 'react';
import classNames from "classnames";

import './tasks.scss';
import closeSVG from '../../assets/img/itemCkise.svg'

const Tasks = ({ items, isRemovable, onRemove }) => {

   const removeList = (item) => {
      if (window.confirm('Вы точно хотите удалить список?')) {
         onRemove(item)
      }
   }

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
                  {isRemovable && <img className='sidebar__btn-close' onClick={() => removeList(obj)} src={closeSVG} alt="" aria-hidden="true" />}
               </button>
            </li>
         ))}
      </ul>
   );
};

export default Tasks;