import { Character } from '../src/app.js';
import { Bowman } from '../src/app.js';
import { Swordsman } from '../src/app.js';
import { Magician } from '../src/app.js';
import { Daemon } from '../src/app.js';
import { Undead } from '../src/app.js';
import { Zombie } from '../src/app.js';

test.each([
    ['Bowman', 'Bowman', {
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 0,
        defence: 0
      }],
    ['Swordsman', 'Swordsman', {
        name: 'Swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 0,
        defence: 0
      }],
    ['Magician', 'Magician', {
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 0,
        defence: 0
      }],
    ['Daemon', 'Daemon', {
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 0,
        defence: 0
      }],
    ['Undead', 'Undead', {
        name: 'Undead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 0,
        defence: 0
      }],
    ['Zombie', 'Zombie', {
        name: 'Zombie',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 0,
        defence: 0
      }],
]) (
('test characted'), (name, type, expected) => {
    const result = new Character(name,type);
    expect(result).toEqual(expected);
});

test('test character Bowman', () => {
    const received = new Bowman('Bowman', 'Bowman')
    const expected = {
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    expect(received).toEqual(expected);
});

test('test character Swordsman', () => {
    const received = new Swordsman('Swordsman', 'Swordsman')
    const expected = {
        name: 'Swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    expect(received).toEqual(expected);
});

test('test character Magician', () => {
    const received = new Magician('Magician', 'Magician')
    const expected = {
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }
    expect(received).toEqual(expected);
});

test('test character Daemon', () => {
    const received = new Daemon('Daemon', 'Daemon')
    const expected = {
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }
    expect(received).toEqual(expected);
});

test('test character Undead', () => {
    const received = new Undead('Undead', 'Undead')
    const expected = {
        name: 'Undead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    expect(received).toEqual(expected);
});

test('test character Zombie', () => {
    const received = new Zombie('Zombie', 'Zombie')
    const expected = {
        name: 'Zombie',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    expect(received).toEqual(expected);
});

test('test character levelUp', () => {
    const char1 = new Character('Bowman', 'Bowman');
    char1.levelUp();
    const expected = {
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 0,
        defence: 0
    };
    expect(char1).toEqual(expected);
});

test('test character damage', () => {
    const char1 = new Character('Bowman', 'Bowman');
    char1.damage(50);
    const expected = {
        name: 'Bowman',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 0,
        defence: 0
    };
    expect(char1).toEqual(expected);
});