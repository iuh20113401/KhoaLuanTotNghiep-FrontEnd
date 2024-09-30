import { useSearchParams } from "react-router-dom";
import { StyledSelect } from "./Input";

function SortBy({ label, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <StyledSelect value={sortBy} onChange={handleChange}>
      <option value="">{label}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default SortBy;
