export function Triangle(numOne, numTwo, numThree) {
  this.sideOne = numOne;
  this.sideTwo = numTwo;
  this.sideThree = numThree;
  this.sideOneAndTwoEqual = numOne === numTwo;
  this.sideTwoAndThreeEqual = numTwo === numThree;

  const allSidesEqual = () => {
    return this.sideOneAndTwoEqual && this.sideTwoAndThreeEqual;
  };

  const twoSidesEqual = () => {
    const sideOneAndthreeEqual = numOne === numThree;

    return this.sideOneAndTwoEqual || this.sideTwoAndThreeEqual || sideOneAndthreeEqual;
  };

  const illegalTriangle = () => {
    const sideIsZeroOrNegative = this.sideOne <= 0 || this.sideTwo <= 0 || this.sideThree <= 0;
    const oneSideTooLarge =
      this.sideOne + this.sideTwo < this.sideThree ||
      this.sideTwo + this.sideThree < this.sideOne ||
      this.sideThree + this.sideOne < this.sideTwo;

    return sideIsZeroOrNegative || oneSideTooLarge;
  };

  Triangle.prototype.kind = () => {
    if (illegalTriangle()) {
      throw Error('Triangle Inequality');
    }

    if (allSidesEqual()) {
      return 'equilateral';
    }
    if (twoSidesEqual()) {
      return 'isosceles';
    }
    return 'scalene';
  };
}
