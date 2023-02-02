
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  //we don't need to set 'feedback' as a prop above, b/c we are pulling it below w/ 'useContext'
  const { feedback } = useContext(FeedbackContext);

  //Calculate ratings average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  console.log(average);

  average = average.toFixed(1).replace(/[.,]0$/, "");
  //"average.toFixed(1)" will ensure that the rating is fixed to 1 decimal place
//".replace(/[.,]0$/, "")" will replace any ".0" decimals with nothing. example: "9.0" would be just "9"

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

//FeedbackStats.propTypes = {
//  feedback: PropTypes.array.isRequired
//}
//^ no longer need thanks to useContext

export default FeedbackStats;
