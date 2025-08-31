import { useNavigate } from 'react-router-dom';
import {
  Advantage,
  AdvantagesList,
  HeroButton,
  Text,
  TextWrapper,
  TickIcon,
  Title,
} from './Hero.styled';

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <TextWrapper>
      <Title>Find your rental car here</Title>
      <AdvantagesList>
        <Advantage>
          <TickIcon />
          <Text>Free cancellations</Text>
        </Advantage>
        <Advantage>
          <TickIcon />
          <Text>Customer support</Text>
        </Advantage>
        <Advantage>
          <TickIcon/>
          <Text>All around Ukraine</Text>
        </Advantage>
        <Advantage>
          <TickIcon/>
          <Text>No hidden fees</Text>
        </Advantage>
      </AdvantagesList>
      <HeroButton title="Find a car" onClick={() => navigate('/catalog')} />
    </TextWrapper>
  );
};
