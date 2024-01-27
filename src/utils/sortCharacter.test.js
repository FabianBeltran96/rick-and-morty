import sortCharacters from './sortCharacter';

describe('sortCharacters function', () => {
  it('should correctly sort characters in ascending order', () => {
    const characters = [
      { name: 'Rick' },
      { name: 'Morty' },
      { name: 'Beth' }
    ];
    const sorted = sortCharacters(characters, true);
    expect(sorted[0].name).toBe('Beth');
    expect(sorted[1].name).toBe('Morty');
    expect(sorted[2].name).toBe('Rick');
  });

  it('should correctly sort characters in descending order', () => {
    const characters = [
      { name: 'Rick' },
      { name: 'Morty' },
      { name: 'Beth' }
    ];
    const sorted = sortCharacters(characters, false);
    expect(sorted[0].name).toBe('Rick');
    expect(sorted[1].name).toBe('Morty');
    expect(sorted[2].name).toBe('Beth');
  });
});