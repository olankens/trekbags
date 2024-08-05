export default function Button({ buttonType, children, onClick }) {
  return (
    <button
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
