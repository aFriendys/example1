type TCellValueResult = [boolean, string];

const getCellValue = (cellId: string[]):string[] => {
  const cellValue: string[] = [];
  for (let index in cellId) {
    cellValue.push(
      (document.getElementById(cellId[index].trim()) as HTMLInputElement).value
    );
  }
  return cellValue;
};

const sum = (cellValue: string[]): number => {
  return cellValue
    .map((value) => parseInt(value))
    .reduce((value, acc) => (acc += value), 0);
};

export const calculateCellValue = (value: string): TCellValueResult => {
  let operand = value
      .slice(value.indexOf("=") + 5, value.length - 1)
      .split(","),
    cellValue;

  try {
    cellValue = getCellValue(operand);
  } catch {
    return [true, "Сell with specified id not found"];
  }

  const operator = value.substring(1, 4);

  switch (operator) {
    case "sum":
      return [false, "" + sum(cellValue)];

    case "avg":
      return [false, "" + sum(cellValue) / operand.length];

    default:
      try {
        return [
          false,
          "" + eval(value.slice(value.indexOf("=") + 1, value.length)),
        ];
      } catch {
        return [true, "Invalid formula"];
      }
  }
};
