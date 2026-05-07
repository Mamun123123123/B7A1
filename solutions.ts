// Problem 1

function filterEvenNumbers( numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// Problem 2

function reverseString( text: string): string {
  return text.split("").reverse().join("");
}

// Problem 3

type StringOrNumber = string | number;

function checkType( value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }

  return "Number";
}

// Problem 4

function getProperty( obj: any, key: string) {
  return obj[key];
}

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function  toggleReadStatus( book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}