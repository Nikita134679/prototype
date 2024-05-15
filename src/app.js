class Character {
  constructor(name, type) {
    if (name.length < 2) {
      throw new Error('Name is too short');
    }
    if (name.length > 10) {
      throw new Error('Name is too long');
    }
    if (type !== 'Bowman' && type !== 'Swordsman' && type !== 'Magician' && type !== 'Daemon' && type !== 'Undead' && type !== 'Zombie') {
      throw new Error('Type is not correct');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
    if (this.type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    };
    if (this.type === 'Swordsman') {
      this.attack = 40;
      this.defence = 40;
    };
    if (this.type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    };
    if (this.type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    };
    if (this.type === 'Zombie') {
      this.attack = 40;
      this.defence = 40;
    };
    if (this.type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    };
  };
  function levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    }
  };
  function damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Character is dead');
    }
  };
};