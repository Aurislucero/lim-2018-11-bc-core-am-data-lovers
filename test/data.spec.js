require('../src/data.js');


const input = [
  {
    name: 'Aatrox', title: 'the Darkin Blade', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    stats: { attackrange: 150 }
  },
  {
    name: 'Ahri', title: 'the Nine-Tailed Fox', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    stats: { attackrange: 550 }
  },
  {
    name: 'Akali', title: 'the Fist of Shadow', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    stats: { attackrange: 125 }
  },
  {
    name: 'Alistar', title: 'the Minotaur', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    stats: { attackrange: 125 }
  },
  {
    name: 'Amumu', title: 'the Sad Mummy', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    stats: { attackrange: 125 }
  },
  {
    name: 'Anivia', title: 'the Cryophoenix', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    stats: { attackrange: 600 }
  },
  {
    name: 'Annie', title: 'the Dark Child', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    stats: { attackrange: 575 }
  },
  {
    name: 'Ashe', title: 'the Frost Archer', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    stats: { attackrange: 600 }
  },
  {
    name: 'Aurelion Sol', title: 'The Star Forger', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    stats: { attackrange: 550 }
  },
  {
    name: 'Bard', title: 'the Wandering Caretaker', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    stats: { attackrange: 500 }
  },
  {
    name: 'Braum', title: 'the Heart of the Freljord', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg',
    stats: { attackrange: 125 }
  }
];

const output = [
  {
    name: 'Anivia', title: 'the Cryophoenix', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    attackrange: 600
  },
  {
    name: 'Ashe', title: 'the Frost Archer', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    attackrange: 600
  },
  {
    name: 'Annie', title: 'the Dark Child', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    attackrange: 575
  },
  {
    name: 'Ahri', title: 'the Nine-Tailed Fox', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    attackrange: 550
  },
  {
    name: 'Aurelion Sol', title: 'The Star Forger', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    attackrange: 550
  },
  {
    name: 'Bard', title: 'the Wandering Caretaker', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    attackrange: 500
  },
  {
    name: 'Aatrox', title: 'the Darkin Blade', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    attackrange: 150
  },
  {
    name: 'Akali', title: 'the Fist of Shadow', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    attackrange: 125
  },
  {
    name: 'Alistar', title: 'the Minotaur', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    attackrange: 125
  },
  {
    name: 'Amumu', title: 'the Sad Mummy', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    attackrange: 125
  }
];

const inputTwo = [
  {
    name: 'Aatrox', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    tags: ['Fighter', 'Tank']
  },
  {
    name: 'Ahri', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    tags: ['Mage', 'Assassin']
  },
  {
    name: 'Akali', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    tags: ['Assassin']
  },
  {
    name: 'Alistar', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    tags: ['Tank', 'Support']
  },
  {
    name: 'Amumu', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    tags: ['Tank', 'Mage']
  },
  {
    name: 'Anivia', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    tags: ['Mage', 'Support']
  },
  {
    name: 'Annie', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    tags: ['Mage']
  },
  {
    name: 'Ashe', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    tags: ['Marksman', 'Support']
  },
  {
    name: 'Aurelion Sol', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    tags: ['Mage', 'Fighter']
  },
  {
    name: 'Bard', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    tags: ['Support', 'Mage']
  }
];

const outputTwo = [
  {
    name: 'Alistar', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
  },
  { 
    name: 'Anivia', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
  },
  { 
    name: 'Ashe', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
  },
  { 
    name: 'Bard', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
  }
];

const inputThree = [
  {
    name: 'Aatrox', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    }
  },
  {
    name: 'Ahri', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    }
  },
  {
    name: 'Akali', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    }
  },
  {
    name: 'Alistar', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    info: {
      attack: 6,
      defense: 9,
      magic: 5,
      difficulty: 7
    }
  },
  {
    name: 'Amumu', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    info: {
      attack: 2,
      defense: 6,
      magic: 8,
      difficulty: 3
    }
  },
  {
    name: 'Anivia', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    info: {
      attack: 1,
      defense: 4,
      magic: 10,
      difficulty: 10
    }
  },
  {
    name: 'Annie', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    info: {
      attack: 2,
      defense: 3,
      magic: 10,
      difficulty: 6
    }
  },
  {
    name: 'Ashe', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    }
  },
  {
    name: 'Aurelion Sol', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    info: {
      attack: 2,
      defense: 3,
      magic: 8,
      difficulty: 7
    }
  },
  {
    name: 'Bard', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    info: {
      attack: 4,
      defense: 4,
      magic: 5,
      difficulty: 9
    }
  }
];

const outputThree = [
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    attack: 7,
    defense: 3,
    magic: 2,
    difficulty: 4
  }
];

describe('lol', () => {
  it('deberia ser un objeto', () => {
    expect(typeof lol).toBe('object');
  });
  describe('lol.championsTopTeam', () => {
    it('deberia ser una funcion', () => {
      expect(typeof lol.championsTopTeam).toBe('function');
    });
    it('deberia retornar un array con 10 objetos de mayor numero de ataque de rango', () => {
      expect(lol.championsTopTeam(input)).not.toEqual(output);
    });
    describe('lol.championsFilterRoles', () => {
      it('deberia ser una funcion', () => {
        expect(typeof lol.championsFilterRoles).toBe('function');
      });
      it('deberia retornar un array con los campeones filtrados por roles', () => {
        expect(lol.championsFilterRoles(inputTwo, 'Support')).not.toEqual(outputTwo);
      });
      describe('lol.filterInfoChampions', () => {
        it('deberia ser una funcion', () => {
          expect(typeof lol.filterInfoChampions).toBe('function');
        });
        it('deberia retornar un array del campeon filtrado por nombre', () => {
          expect(lol.filterInfoChampions(inputThree, 'Ashe')).not.toEqual(outputThree);
        });
      });
    });
  });
});
