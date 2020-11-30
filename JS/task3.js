// Write code under this line
class Storage {
  //Код должен содержать класс Storage - синтаксический сахар функции- коструктора
  constructor(items) {
    this.items = items; //Класс Storage должен создавать объект
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    return this.items.push(item);
  }

  removeItem(item) {
    let index = this.items.indexOf(item); // indexOf - находит позицию элемента в массиве если он есть
    if (index > -1) {
      // если наш елемент -1 - его нет
      return this.items.splice(index, 1); // (index, 1) - удалить с позиции индекс один элемент
    }
  }
}

console.log(typeof Storage);
// 'function'

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

/*
Задача 5-3
использование методов класса
Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

Добавь методы класса:

getItems() - возвращает массив текущих товаров
addItem(item) - получает новый товар и добавляет его к текущим
removeItem(item) - получает товар и, если он есть, удаляет его из текущих
*/
