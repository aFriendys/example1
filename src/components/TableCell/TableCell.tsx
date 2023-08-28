import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { ITableCell } from "src/types";
import { calculateCellValue } from "src/utils";

export function TableCell({ id }: ITableCell): JSX.Element {
  const [value, setValue] = useState(""),
    [formula, setFormula] = useState(""),
    [isFocused, setIsfocused] = useState(false),
    input = useRef<HTMLInputElement>(null);

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormula(() => "");
    setValue(() => target.value);
  };

  const onFocusChangeHandler = (focus: boolean): void => {
    setIsfocused(() => focus);
  };

  const onKeyUpHandler = ({ key }: KeyboardEvent<HTMLInputElement>): void => {
    if (key !== "Enter" || !value.startsWith("=")) return;
    
    try{
      const result = calculateCellValue(value);
      setValue(() => result);
    }catch(error){
      if(error instanceof Error) {
        const {message} = error
        setValue(() => message)
      }
    }finally{
      setFormula(() => value);
      input.current?.blur();
    }
  };
  
  return (
    <td>
      <input
        id={id}
        onFocus={() => onFocusChangeHandler(true)}
        onBlur={() => onFocusChangeHandler(false)}
        onKeyUp={onKeyUpHandler}
        value={isFocused ? formula || value : value}
        onChange={onChangeHandler}
        ref={input}
        title={isFocused ? undefined : formula || value}
      />
    </td>
  );
}
