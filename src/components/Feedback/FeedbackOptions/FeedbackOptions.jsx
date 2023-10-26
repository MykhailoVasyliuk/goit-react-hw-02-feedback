import PropTypes from 'prop-types';
import { FeedbackOptionsContainer } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackOptionsContainer className="btns">
        {options.map(option => {
          return (
            <button
              key={option}
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </FeedbackOptionsContainer>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
