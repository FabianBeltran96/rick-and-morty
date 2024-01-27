const sortCharacters = (characters, isSortedAsc) => {
    return characters.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (isSortedAsc) {
        return nameA < nameB ? -1 : 1;
      } else {
        return nameA > nameB ? -1 : 1;
      }
    });
  };
  
  export default sortCharacters;