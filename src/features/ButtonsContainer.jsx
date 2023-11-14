function ButtonsContainer() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="#" target="_blank">
          twitter
        </a>
        <a href="#" target="_blank">
          tumblir
        </a>
      </div>
      <button style={{ marginLeft: "auto" }}>New quote</button>
    </div>
  );
}

export default ButtonsContainer;
