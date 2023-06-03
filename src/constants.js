const CONTRACT_ADDRESS = "0xf3D41d3aA3A532768331bd131661AF0FE1B2f608";

/*
 * Adicione esse método e tenha certeza de exportá-lo no final!
 */
const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };