import sortCharacters from './sortCharacters';

describe('sortCharacters', () => {
  const characters = [
    { name: 'Morty' },
    { name: 'Rick' },
    { name: 'Beth' },
  ];

  test('should sort characters in ascending order', () => {
    const sorted = sortCharacters(characters, true);
    expect(sorted.map(c => c.name)).toEqual(['Beth', 'Morty', 'Rick']);
  });

  test('should sort characters in descending order', () => {
    const sorted = sortCharacters(characters, false);
    expect(sorted.map(c => c.name)).toEqual(['Rick', 'Morty', 'Beth']);
  });
});