import styled from "styled-components";

const CustomSelect = styled.select`
  width: 60%;
  height: 40px;
  font-size: 1rem;
  padding: 8px 12px;
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  &:hover {
    border-color: #9539ff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
  &:focus {
    border-color: #8f54fc;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
  @media (min-width: 501px) {
    margin-bottom: 10px;
    font-size: 1.2rem;
    max-width: 230px;
  }
`;

const Option = styled.option`
  background-color: white;
`;

export default function DropDownMenu({ selectedCity, onCityChange, cities }) {
  const handleChange = (event) => {
    const selectedCity = event.target.value;
    onCityChange(selectedCity);
  };

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
