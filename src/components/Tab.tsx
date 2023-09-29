interface Props {
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

function Tab({ text, selected = false, onClick }: Props) {
  return (
    <div
      style={{
        backgroundColor: selected ? "darkgray" : "white",
        padding: "5px",
        width: "200px",
        border: "solid",
        borderWidth: "1px 0.5px 1px 0.5px",
        cursor: selected ? "default" : "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default Tab;
