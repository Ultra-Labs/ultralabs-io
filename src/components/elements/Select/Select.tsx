import React from "react";
import Select, { components } from "react-select";
import { theme } from "constants/variables";
import Icon from "components/elements/Icon/Icon";
import { Label } from "assets/styles/components/elements/Select/Select.style";

const CaretDownIcon = () => {
  return <Icon color={theme.darkColor} size={24} icon="dropdown" />;
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

export default ({ options, errorMessage = "", placeholder = "", ...props }) => {
  const selectStyles: object = {
    control: () => {
      return {
        display: "flex",
        width: "100%",
        maxWidth: 660,
        cursor: "pointer",
        position: "relative",
        marginBottom: 24,
        "@media screen and (max-width: 1024px)": {
          maxWidth: "unset",
        },
      };
    },
    menu: (provided) => ({
      ...provided,
      padding: 4,
      borderRadius: 4,
      marginBottom: 4,
      width: "100%",
      maxWidth: 518,
      zIndex: 3,
      boxShadow: "4px 4px 16px rgba(196, 196, 196, 0.32)",
      "@media screen and (max-width: 1024px)": {
        maxWidth: "unset",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? theme.lightColor : theme.darkColor,
      padding: "2px 8px",
      borderRadius: 4,
      marginBottom: 4,
      cursor: "pointer",
      transition: state.selectProps.menuIsOpen ? "1s" : "0.5s",
      backgroundColor: state.isSelected ? theme.primaryColor : theme.lightColor,
      "&:hover": {
        backgroundColor: state.selectProps.menuIsOpen ? theme.primaryColor : "",
        color: theme.lightColor,
      },
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen
        ? "rotate(0deg)"
        : "rotate(90deg)",
      position: "absolute",
      right: 0,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      overflow: "visible",
      padding: 0,
      borderBottom:
        state.selectProps.menuIsOpen || state.hasValue
          ? `1px solid ${theme.primaryColor}`
          : `1px solid ${theme.darkColor}`,
    }),
  };

  const Control = (props) => {
    return (
      <>
        <Label isFloating={props.selectProps.menuIsOpen || props.hasValue}>Job*</Label>
        <components.Control {...props} />
      </>
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <Select
        {...props}
        placeholder={placeholder}
        components={{
          Control,
          DropdownIndicator,
          Menu: (props) => <components.Menu {...props} className="menu" />,
        }}
        options={options}
        styles={selectStyles}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};
