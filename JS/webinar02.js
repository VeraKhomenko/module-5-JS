// вебинар  Конструкторы. Прототипы. Классы
/*
const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};
Hero.description = 'This is a Hero base class'; //статическое сво-во
Hero.showStats = function(hero) {
  //статический метод
  console.log('Loging stats from Hero.showStats: ', hero);
};
console.dir(Hero);
Hero.prototype.changeName = function (name) { // в прототипе не будет статических сво-в
  this.name = name;
};

const mango = new Hero('Mango', 1000); //єкземпляр им не доступны статические сво-ва
console.log(mango);

Hero.showStats(mango )
console.log(Math.pow(2, 5));
console.log(Math.PI);
console.log(Number.parseInt('5a'));
*/

// тоже самое только методом  class

class Hero {
  //статические методы обьявляются до оьявления всех методов со словом static имя свойства через пробел и его значение
  static description = 'This is a Hero base class';
  // в статических св-ах нет this, потому что this ссылается на сам классб в результате этот класс его и вызовет, к экземпляру нет доступа
  static showStats(hero) {
    console.log('Logging stats from Hero.showStats: ', hero);
  }

  constructor(name, xp) {
    //метод класс называется constructor в классах удобнее просто обьявляются метода и они автоматически попадают на прототайп
    this._name = name; //! имя геттера и имя св-ва должно отличаться
    this.xp = xp;
  }

  // get-еры and set-еры Используются для записи и чтения св-в класса что бы эти св-ва не открывать во внешнем коде
  get name() {
    // что бы получить ! имя геттера и имя св-ва должно отличаться.
    return this._name; //
  }
  set name(newName) {
    // что бы записать для одного св-ва имя get и set должно совпадать
    this._name = newName;
  }
  // changeName(name) {
  //   //=> новый метод класса Hero
  //   this.name = name;
  // }
  // getName() {
  //return this.name;
  //}  // создали интерфейс, есть набор методов, но есть более современный способ get set
  gainXp(amount) {
    console.log('${this.name} получил ${amount} опыта');
    this.xp += amount;
  }
}
//статические методы обьявляются до оьявления всех методов со словом static имя свойства через пробел и его значение
console.dir(Hero);
const mango = new Hero('Mango', 1000);

console.log(mango.name); // для гетт // не обращение к св-ву внутреннему name, а обращение к геттеру

mango.name = 'Mangocoldog'; // собираемся записать то что справа от равно передается как параметр то что в скобках у сеттера (set name(newName)) и записывает в нижнее скрытое сво-во newName  (this._name = newName;)// для сетт => потом снова используем get =>
console.log(mango.name);
// mango.gainXp(2000);  // для методов не для геттеров и сеттеров
// console.log(mango);

// Hero.showStats(mango);
// console.log(mango.getName();)
