// наследование

class Hero {
  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }

  gainXp(amount) {
    console.log('${this.name} получил ${amount} опыта');
    this.xp += amount;
  }
}

// создаем класс который будет расширять базовый класс Hero =>
class Warrior extends Hero {
  // extends Hero - расширяет базовый класс
  constructor(name, xp, weapon) {
    //name, xp, из родителя
    // получает оружие
    super(name, xp); // специальный метод для связи с конструктором родителя вызывается самым первым в скобках параметры родителя
    this.weapon = weapon; // у него есть св-во
  }
  attack() {
    // добавляем метод attack который говорит =>
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}
//const mango = new Warrior('Mango', 1000, 'Алибарда'); // когда вызывается new Warrior у нас вызывается метод constructor и для того что бы в наследуемом классе получить доступ к this
//необходимо вызвать конструктор родительского класса для этого в constructorЕ ребенка вызывается специальный метод super();
// для того что бы перезаписать данные из родительского конструктора мы их прописываем в конструкторе ребенка ('Mango', 1000, 'Алибарда') до нового через пробел и запятую

// console.log(mango);
// mango.attack();
// mango.gainXp(2000);

class Paladin extends Warrior {
  constructor(name, xp, weapon, spell) {
    super(name, xp, weapon);
    this.spell = spell;
  }
  cast() {
    console.log(`${this.name} кастует ${this.spell}`);
  }
}
const mango = new Paladin('Mango', 1000, 'Алибарда', 'Cleanse');
console.log(mango);
mango.attack();
mango.gainXp(2000);
console.log(mango.name);
mango.cast();
