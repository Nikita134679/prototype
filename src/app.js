export class Character {
  constructor(name, type) {
    if (name.length < 2) {
      throw new Error('Name is too short');
    };

    if (name.length > 10) {
      throw new Error('Name is too long');
    };

    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Invalid character type');
    };

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  };

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = this.attack + (this.attack * 0.2);
      this.defence = this.defence + (this.defence * 0.2);
      this.health = 100;
    } else {
      throw new Error('Персонаж мертв');
    };
  };

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж мертв');
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