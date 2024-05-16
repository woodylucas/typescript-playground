function square(num: number) {
  return num * num;
}

function greet(person: string = "stranger") {
  return `Hi there, ${person}`;
}

const addNums = (x: number, y: number): number => {
  return x + y;
};

const colors = ["red", "yellow", "green"];

colors.map((color) => {
  return color.toUpperCase();
});
