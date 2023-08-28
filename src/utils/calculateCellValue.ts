type TCellValueResult = [boolean, string];

const sumCellValues = (cellId: string[]):number | never =>{
  const cellValue: string[] = [];
  try{
  for (let index in cellId) {
    cellValue.push(
      (document.getElementById(cellId[index].trim()) as HTMLInputElement).value
    );
  }
}catch{
  throw new Error('Cell with specified id not found')
}

  return cellValue
    .map((value) => parseInt(value))
    .reduce((value, acc) => (acc += value), 0);
}

export const calculateCellValue = (value: string): string | never => {
  let operand = value
      .slice(value.indexOf("=") + 5, value.length - 1)
      .split(",")

  const operator = value.substring(1, 4);

  switch (operator) {
    case "sum":
      return "" + sumCellValues(operand);

    case "avg":
      return "" + sumCellValues(operand) / operand.length;

    default:
      try {
        return "" + eval(value.slice(value.indexOf("=") + 1, value.length))
      } catch {
        throw new Error('Invalid formula')
      }
  }
};
