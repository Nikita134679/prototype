export class Character {
  constructor(name, type) {
    if (name.length < 2) {
      throw new Error('Name is too short');
    };
    if (name.length > 10) {
      throw new Error('Name is too long');
    };
    if (type !== 'Bowman' && type !== 'Swordsman' && type !== 'Magician' && type !== 'Daemon' && type !== 'Undead' && type !== 'Zombie') {
      throw new Error('Type is not correct');
    };
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;

    function levelUp() {
      if (this.health > 0) {
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
      };
    };
    function damage(points) {
      if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
      } else {
        throw new Error('Character is dead');
      };
    };
  };
};
export class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  };
};
export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  };
};
export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  };
};
export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  };
};
export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  };
};
export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  };
};