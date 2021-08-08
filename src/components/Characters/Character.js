const AragornCharacter = ({ ...props }) => (
  <div {...props}>
    <img
      src='./assets/images/Aragorn.png'
      style={{ height: 30, width: 30, background: 'red' }}
    />
  </div>
);

const GandalfCharacter = ({ ...props }) => (
  <div {...props}>
    <img
      src='./assets/images/Gandalf.png'
      style={{ height: 30, width: 30, background: 'red' }}
    />
  </div>
);

const LegolasCharacter = ({ ...props }) => (
  <div {...props}>
    <img
      src='./assets/images/Legolas.png'
      style={{ height: 30, width: 30, background: 'red' }}
    />
  </div>
);

const Characters = {
  aragorn: AragornCharacter,
  gandalf: GandalfCharacter,
  legolas: LegolasCharacter,
};

const Character = ({ name, top = 0, left = 0 }) => {
  console.log(top);
  const CharacterRenderer = Characters[name] || Characters.empty;
  return (
    <CharacterRenderer
      style={{ position: 'relative', top: `${top}px`, left: `${left}px` }}
    />
  );
};

export default Character;
