import React from "react";

export default function SelectType({ typeFilter, setTypeFilter, optionValue }) {
  return (
    <select
      value={typeFilter}
      onChange={(e) => setTypeFilter(e.target.value)}
      className="p-2 border border-gray-300 rounded-md max-[453px]:w-[48%] max-[432px]:w-full"
    >
      <option value="">{optionValue[0]}</option>
      <option value={optionValue[1]}>{optionValue[1]}</option>
      <option value={optionValue[2]}>{optionValue[2]}</option>
      <option value={optionValue[3]}>{optionValue[3]}</option>
    </select>
  );
}
