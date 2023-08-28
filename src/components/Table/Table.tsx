import { useId } from "react";
import { ITable } from "src/types";
import { TableRow } from "..";

export default function Table({ rows = 5, columns = 5 }: ITable): JSX.Element {
  const key = useId();

  const tableRows = [
    <TableRow isHeader columns={columns} key={`${key}-${rows}`}></TableRow>,
  ];

  for (let i = 0; i < rows; i++) {
    tableRows.push(
      <TableRow columns={columns} index={i} key={`${key}-${i}`}></TableRow>
    );
  }

  return (
    <table>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
