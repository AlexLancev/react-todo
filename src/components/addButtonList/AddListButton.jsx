import React, { useState } from "react";

import './addButtonList.scss';
import closeSVG from '../../assets/img/closeSvg.svg'
// import classNames from "classnames";

const AddListButton = ({ DBcolors, onAdd }) => {
   const [showPopup, setShowPopup] = useState(false);
   const [seletedColor, setSeletedColor] = useState(DBcolors[0].id);
   const [inputValue, setInputValue] = useState('');

   const onClose = () => {
      setShowPopup(false);
      setInputValue('');
      setSeletedColor(DBcolors[0].id);
   }

   const addListButton = () => {
      if (!inputValue) {
         alert('Заполните поле');
      } else {
         const color = DBcolors.filter((c) => c.id === seletedColor)[0].name;
         onAdd({ 
            color: color, 
            id: Math.random(), 
            name: inputValue, 
            colorId: seletedColor, 
            className: "sidebar__item", 
            active: false 
         });
         onClose();
      }
   }

   return (
      <div className="add-tasks">

         <button onClick={() => setShowPopup(!showPopup)} className="sidebar__add-folder">
            <i>
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </i>
            <span>Добавить папку</span>
         </button>

         {showPopup && (
            <div className="popup-sidebar">
               <div className="popup-sidebar__inner">
                  <button onClick={onClose} className="popup-sidebar__closeSvg-btn">
                     <img className="popup-sidebar__closeSvg" src={closeSVG} alt="" aria-hidden="true" />
                  </button>
                  <label className="popup-sidebar__label">
                     <input
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        className="popup-sidebar__input"
                        type="text"
                        placeholder="Название папки" />
                  </label>
                  <ul className="popup-sidebar__list">
                     {DBcolors.map((color) => {
                        return (
                           <li className="popup-sidebar__item" key={color.id}>
                              <label className="popup-sidebar__label-color">
                                 <input onClick={() => setSeletedColor(color.id)} className="popup-sidebar__input-color visually-hidden" type="radio" name="color" value={color.hex} />
                                 <span className={`popup-sidebar__color popup-sidebar__color--${color.name}`}></span>
                              </label>
                           </li>
                        );
                     })}
                  </ul>
                  <button onClick={addListButton} className="popup-sidebar__btn" type="button">Добавить</button>
               </div>
            </div>
         )}

      </div>
   );

};

export default AddListButton;