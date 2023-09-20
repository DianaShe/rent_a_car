import { Card } from "components/Card/Card"
import { FlexWrapper } from "./CardGallery.styled"

export const CardGallery = ({cars}) => {
    return (
        <FlexWrapper>{cars?.map((car)=> <Card key={car.id} car={car}/>)}</FlexWrapper>
    )
}