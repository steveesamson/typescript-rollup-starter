import * as React from "react";

interface FancyButtonProps {
  label: string;
}

const FancyButton = (props: FancyButtonProps): JSX.Element => {
  const [label, setLabel] = React.useState<string>(props.label || ""),
    _onClick = (): void => {
      setLabel("i was clicked");
    };

  return (
    <button type="button" onClick={_onClick}>
      {label}
    </button>
  );
};

export default FancyButton;
