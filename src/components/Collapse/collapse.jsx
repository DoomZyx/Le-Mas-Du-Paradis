import "./_collapse.scss";


const Collapse = ({ className, title, content, isOpen, onToggle }) => {
  return (
    <div className={`collapse ${className} ${isOpen ? "expanded" : ""}`}>
      <h2 onClick={onToggle}>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={`arrow-icon ${isOpen ? "up" : "down"}`}
        >
          <path
            fill="#ffff"
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
          />
        </svg>
      </h2>
      {isOpen && <div className="content">{content}</div>}
    </div>
  );
};

export default Collapse;

