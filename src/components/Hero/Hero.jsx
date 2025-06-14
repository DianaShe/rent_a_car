import { useNavigate } from "react-router-dom"
import { Advantage, AdvantagesList, HeroButton, TextWrapper, Title } from "./Hero.styled"


export const Hero = () => {
    const navigate = useNavigate()
    return (

        <TextWrapper>
        <Title>Find your rental car here</Title>
        <AdvantagesList>
            <Advantage>Free cancellations</Advantage>
            <Advantage>Customer support</Advantage>
            <Advantage>All around Ukraine</Advantage>
            <Advantage>No hidden fees</Advantage>
        </AdvantagesList>
        <HeroButton title="Find a car" onClick={() => navigate('/catalog')}/>
        </TextWrapper>


    )
}
