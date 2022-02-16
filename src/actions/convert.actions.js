export const romanToDecimal = (roman) => {
  return {
    type: 'CONVERT_TO_DECIMAL',
    payload: roman
  }
}

export const decimalToRoman = (decimal) => {
  return {
    type: 'CONVERT_TO_ROMAN',
    payload: decimal
  }
}