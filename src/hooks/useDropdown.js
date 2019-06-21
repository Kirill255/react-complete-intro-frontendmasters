import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`; // if 'label': Best Dog Ever -> bestdogever

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options.length}
      >
        <option disabled key="select" value="select">
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

  return [state, Dropdown];
};

export default useDropdown;
