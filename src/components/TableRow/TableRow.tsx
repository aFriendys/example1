import { useId } from "react";
import { TableCell } from "..";
import { headerIndex } from "src/utils";
import { ITableRow } from "src/types";


export function TableRow({ isHeader, columns, index } : ITableRow): JSX.Element {
  const key = useId();
    
  const tableColumns = [
      <th key={`${key}-${index || "00"}-${columns}`}>
        <input disabled defaultValue={index} />
      </th>,
    ];

  if (isHeader) {
    for (let i = 0; i < columns; i++) {
      tableColumns.push(
        <th key={`${key}-"00"-${i}`}>
          <input disabled defaultValue={headerIndex[i]} />
        </th>
      );
    }
  } else {
    for (let i = 0; i < columns; i++) {
      tableColumns.push(
        <TableCell key={`${key}-${index}-${i}`} id={headerIndex[i] + index} />
      );
    }
  }

  return <tr>{tableColumns}</tr>;
}
