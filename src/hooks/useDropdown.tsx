import React, { useState, FunctionComponent, Dispatch } from "react";

const useDropdown = (label: string, defaultState: string, options: string[]) => {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`; // if 'label': Best Dog Ever -> bestdogever

  const Dropdown: FunctionComponent = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options.length}
      >
        <option disabled={true} key="select" value="select">
          Select
        </option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState] as [string, FunctionComponent, Dispatch<string>];
};

export default useDropdown;
