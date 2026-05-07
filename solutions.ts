// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// Problem 2
function reverseString(text: string): string {
  return text.split("").reverse().join("");
}