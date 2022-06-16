let romans = new Map();
romans.set('I', 1);
romans.set('V', 5);
romans.set('X', 10);
romans.set('L', 50);
romans.set('C', 100);
romans.set('D', 500);
romans.set('M', 1000);

console.log(romans.keys());

// const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const rom = [
//   'M',
//   'CM',
//   'D',
//   'CD',
//   'C',
//   'XC',
//   'L',
//   'XL',
//   'X',
//   'IX',
//   'V',
//   'IV',
//   'I',
// ];

let integers = [
  [1, 'I'],
  [4, 'IV'],
  [5, 'V'],
  [9, 'IX'],
  [10, 'X'],
  [40, 'XL'],
  [50, 'L'],
  [90, 'XC'],
  [100, 'C'],
  [400, 'CD'],
  [500, 'D'],
  [900, 'CM'],
  [1000, 'M'],
];

export { romans, integers };
