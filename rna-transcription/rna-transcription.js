export const toRna = dna => {
  let dnaArray = dna.split("");

  let rnaArray = dnaArray.map(e => {
    switch (e) {
      case "G":
        return "C";
        break;
      case "C":
        return "G";
        break;
      case "T":
        return "A";
        break;
      case "A":
        return "U";
        break;
      default:
        throw new Error("Invalid input DNA.");
    }
  });

  return rnaArray.join("");
};
