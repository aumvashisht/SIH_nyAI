import "./Css/Tooltip.css"

const Tooltip = ({ children, title }) => {
 return (
    <div className="tooltip">
      {children}
      <span className="tooltip-text">{title}</span>
    </div>
 );
};

export default Tooltip;