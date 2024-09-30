import { useSearchParams } from "react-router-dom";
import { StyledSelect } from "./Input";

function FilterSelect({ filterField, options, label }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || "";

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }
  return (
    <StyledSelect onChange={(e) => handleClick(e.target.value)}>
      <option value={""}>{label}</option>
      {options.map((option) => (
        <option
          value={option.value}
          key={option.value}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

function FilterInput() {}
export { FilterSelect };
