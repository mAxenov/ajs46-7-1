import Validator from '../app';

test('Правильное имя', () => {
  const received = new Validator('Name_12-Name');
  // const expected = [
  //   { key: 'name', value: 'мечник' },
  //   { key: 'level', value: 2 },
  //   { key: 'attack', value: 80 },
  //   { key: 'defence', value: 40 },
  //   { key: 'health', value: 10 },
  // ];
  expect(received.validateUsername()).toBe(true);
});

test('Не правильное имя цифры в начале', () => {
  const received = new Validator('12NameName');
  // const expected = [
  //   { key: 'name', value: 'мечник' },
  //   { key: 'level', value: 2 },
  //   { key: 'attack', value: 80 },
  //   { key: 'defence', value: 40 },
  //   { key: 'health', value: 10 },
  // ];
  expect(received.validateUsername()).toBe(false);
});

test('Не правильное имя цифры в конце', () => {
  const received = new Validator('NameName12');
  // const expected = [
  //   { key: 'name', value: 'мечник' },
  //   { key: 'level', value: 2 },
  //   { key: 'attack', value: 80 },
  //   { key: 'defence', value: 40 },
  //   { key: 'health', value: 10 },
  // ];
  expect(received.validateUsername()).toBe(false);
});

test('Не правильное имя - в начале', () => {
  const received = new Validator('-NameName');
  // const expected = [
  //   { key: 'name', value: 'мечник' },
  //   { key: 'level', value: 2 },
  //   { key: 'attack', value: 80 },
  //   { key: 'defence', value: 40 },
  //   { key: 'health', value: 10 },
  // ];
  expect(received.validateUsername()).toBe(false);
});

test('Не правильное имя _ в начале', () => {
  const received = new Validator('_NameName');
  // const expected = [
  //   { key: 'name', value: 'мечник' },
  //   { key: 'level', value: 2 },
  //   { key: 'attack', value: 80 },
  //   { key: 'defence', value: 40 },
  //   { key: 'health', value: 10 },
  // ];
  expect(received.validateUsername()).toBe(false);
});

test('Не правильное имя - в конце', () => {
  const received = new Validator('NameName-');
  // const expected = [
  //   { key: 'name', value: 'мечник' },
  //   { key: 'level', value: 2 },
  //   { key: 'attack', value: 80 },
  //   { key: 'defence', value: 40 },
  //   { key: 'health', value: 10 },
  // ];
  expect(received.validateUsername()).toBe(false);
});

test('Не правильное имя - в конце', () => {
  const received = new Validator('NameName_');
  // const expected = [
  //   { key: 'name', value: 'мечник' },
  //   { key: 'level', value: 2 },
  //   { key: 'attack', value: 80 },
  //   { key: 'defence', value: 40 },
  //   { key: 'health', value: 10 },
  // ];
  expect(received.validateUsername()).toBe(false);
});

test('Не правильное имя больше трех цифр подряд', () => {
  const received = new Validator('Name123Name');
  // const expected = [
  //   { key: 'name', value: 'мечник' },
  //   { key: 'level', value: 2 },
  //   { key: 'attack', value: 80 },
  //   { key: 'defence', value: 40 },
  //   { key: 'health', value: 10 },
  // ];
  expect(received.validateUsername()).toBe(false);
});
