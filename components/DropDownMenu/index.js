import styled from "styled-components";

const CustomSelect = styled.select`
  flex: 1 0 1;
  width: 32%;
  height: 40px;
  font-size: 0.8rem;

  background-color: transparent;
  border: 1px solid #333;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  &:hover {
    border-color: #9539ff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
  @media (min-width: 501px) {
    font-size: 1.2rem;
    width: 140px;
  }
  @media (min-width: 758px) {
    width: 175px;
  }
  @media (min-width: 1156px) {
    width: 230px;
  }
`;

const Option = styled.option`
  background-color: white;
`;

export default function DropDownMenu({ selectedCity, onCityChange, cities }) {
  function handleChange(event) {
    const selectedCity = event.target.value;
    onCityChange(selectedCity);
  }

  return (
    <CustomSelect value={selectedCity} onChange={handleChange}>
      <Option value="">📍Select a city</Option>
      {cities.map((city) => (
        <Option key={city} value={city}>
          📍{city}
        </Option>
      ))}
    </CustomSelect>
  );
}
