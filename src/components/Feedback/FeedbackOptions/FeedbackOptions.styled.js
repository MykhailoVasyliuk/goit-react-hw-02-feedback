import styled from 'styled-components';

export const FeedbackOptionsContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  button {
    border: 0;
    border-radius: 5px;
    padding: 10px;
    text-transform: capitalize;
    transition: color 0.3s ease, background 0.3s ease;
    &:hover,
    &:focus,
    :active {
      color: white;
      background-color: #4287f5;
    }
  }
`;
