export type TableHeaderIndex = Uppercase<string>;

export interface ITable {
  columns?: number;
  rows?: number;
}

export interface ITableRow {
  columns: number;
  isHeader?: boolean;
  index?: number;
}

export interface ITableCell {
  id: string;
}
