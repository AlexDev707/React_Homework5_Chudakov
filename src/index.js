import React from "react";
import ReactDOM from "react-dom";

const Menu = ({imgTesla, nameTesla, imgMicrosoft, nameMicrosoft, imgAmazon, nameAmazon}) => (
    <ul>
        <li>
           <img src={imgTesla}/>
<p>{nameTesla}</p>
        </li>
        <li>
           <img src={imgMicrosoft}/>
<p>{nameMicrosoft}</p>
        </li>
        <li>
           <img src={imgAmazon}/>
<p>{nameAmazon}</p>
        </li>
    </ul>
);
ReactDOM.render(
  <Menu
  imgTesla='./tesla.jpg'
  nameTesla='Илон Маск'
  imgMicrosoft='./microsoft .jpg'
  nameMicrosoft='Билл Гейтс'
  imgAmazon='./amazon.jpeg'
  nameAmazon='Джефф Безос'
  />,
  document.getElementById('root')   
    );

// Домашнє завдання!!!!!!!!!
//Створити компонент меню з елементами та передавати в середину всі пункти меню через props