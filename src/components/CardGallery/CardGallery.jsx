import { Card } from "components/Card/Card"
import { FlexWrapper } from "./CardGallery.styled"
import { nanoid } from "nanoid"

export const CardGallery = ({cars}) => {
    return (
        <FlexWrapper>{cars.map((car)=> <Card key={nanoid()} car={car}/>)}</FlexWrapper>
    )
}