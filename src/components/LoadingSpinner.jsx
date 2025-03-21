
import styled from 'styled-components';

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.text_secondary};
  border-top: 4px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingSpinner = () => <Spinner />;

export default LoadingSpinner;
