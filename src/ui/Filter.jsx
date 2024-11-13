import { StyledSelect } from "./Input";

function FilterSelect({ filterField, options, label, onChange }) {
  return (
    <StyledSelect onChange={onChange}>
      <option value={""}>{label}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export { FilterSelect };
