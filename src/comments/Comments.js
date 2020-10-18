import React from 'react';
import './Comments.css';

import Collapsible from 'react-collapsible';

class Comments extends React.Component {

  render() {

    return (
      <div>
        <h3>There are comments about your CV</h3>
        <Collapsible trigger="Показать сообщение от компании Siemens">
          <p>Добрый день! Мы рассмотрели Ваше резюме</p>
          <p>Однако нам хотелось бы, что бы Вы также имели навыки работы с фреймворком Vue.js.
  Предлагаем Вам подтянуть недостающие знания и отправить нам свое резюме снова </p>
        </Collapsible>
        <Collapsible trigger="Показать сообщение от компании Google">
          <p>Добрый день! Мы рассмотрели Ваше резюме</p>
          <p>Однако нам хотелось бы, что бы Вы также имели навыки работы с фреймворком Vue.js.
  Предлагаем Вам подтянуть недостающие знания и отправить нам свое резюме снова </p>
        </Collapsible>
        <Collapsible trigger="Показать сообщение от компании BazaIT">
          <p>Добрый день! Мы рассмотрели Ваше резюме</p>
          <p>Однако нам хотелось бы, что бы Вы также имели навыки работы с фреймворком Vue.js.
  Предлагаем Вам подтянуть недостающие знания и отправить нам свое резюме снова </p>
        </Collapsible>
      </div>
    );
  }
}

export default Comments;
