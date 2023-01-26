import PropTypes from "prop-types";
//this is a "Styled Component", use this within other components (see FeedbackItem.jsx)

function Card({ children, reverse }) {
  //return (<div className={`card ${reverse && 'reverse'}`}>{children}</div>)
  //read as: className = card & if reverse is given as a prop, then we also want the className of reverse applied
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
