const rot13 = (str) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .toLowerCase()
    .split("")
    .map((char) => {
      const position = alphabet.toLowerCase().indexOf(char);
      let result = position >= 0 ? alphabet[(position + 13) % 26] : char;
      return str === str.toLowerCase()
        ? result.toLowerCase()
        : result.toUpperCase();
    })
    .join("");
};

console.log(rot13("SERR PBQR PNZC"));
