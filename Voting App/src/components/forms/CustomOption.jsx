import { components } from "react-select";

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <span
        className={`fi fi-${props.data.short.toLowerCase()}`}
        style={{ marginRight: "10px" }}
      ></span>
      {props.data.label}
    </components.Option>
  );
};

export default CustomOption;
