import type {
  ButtonProps,
  ComboBoxProps,
  DropdownProps,
  InputProps,
  NumberInputProps,
  ToggleButtonProps,
} from "@salt-ds/core";

/**
 * Only these components can extend styling through additional props and `useClassNameInjection`
 * Note to JPM employees:
 * Use only in non‑production codebases, or with prior permission from the Salt engineering team
 */
declare module "@salt-ds/styles" {
  interface ComponentPropsMap {
    saltButton: ButtonProps;
    saltComboBox: ComboBoxProps;
    saltDropDown: DropdownProps;
    saltInput: InputProps;
    saltNumberInput: NumberInputProps;
    saltToggleButton: ToggleButtonProps;
  }
}
