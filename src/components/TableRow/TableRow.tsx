import { useId } from "react";
import { TableCell } from "..";
import { headerIndex } from "src/utils";
import { ITableRow } from "src/types";


export function TableRow({ isHeader, columns, index = '00' } : ITableRow): JSX.Element {
  const key = useId();
    
  const tableColumns = [
      <th key={`${key}-${index}-${columns}`}>
        <input disabled defaultValue={index === '00' ? undefined : index} />
      </th>,
    ];

  if (isHeader) {
    for (let i = 0; i < columns; i++) {
      tableColumns.push(
        <th key={`${key}-${index}-${i}`}>
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
