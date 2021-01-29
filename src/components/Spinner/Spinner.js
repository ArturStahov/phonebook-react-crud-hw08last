import Loader from 'react-loader-spinner';
import { Container } from './StyledComponents';

export function Spinner() {
  return (
    <Container>
      <Loader type="Bars" color="#00BFFF" height={100} width={150} />
    </Container>
  );
}
