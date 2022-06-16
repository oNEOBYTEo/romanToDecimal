import { romans, integers } from './hashtable';

export const sumRoman = (input) => {
  let result = romans.get(input.charAt(input.length - 1));

  for (let i = input.length - 2; i >= 0; i--) {
    if (romans.get(input.charAt(i)) < romans.get(input.charAt(i + 1))) {
      result -= romans.get(input.charAt(i));
    } else {
      result += romans.get(input.charAt(i));
    }
  }
  return result;
};

export const sumInt = (input) => {
  let result = '';
  let i = 12;
  while (input > 0) {
    result += integers[i][1].repeat(Math.floor(input / integers[i][0]));
    input %= integers[i][0];
    i--;
  }
  return result;
};
