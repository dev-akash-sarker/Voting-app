import { components } from "react-select";

const CustomSingleValue = (props) => {
  return (
    <components.SingleValue {...props}>
      <span
        className={`fi fi-${props.data.short.toLowerCase()}`}
        style={{ marginRight: "10px" }}
      ></span>
      {props.data.label}
    </components.SingleValue>
  );
};

export default CustomSingleValue;
