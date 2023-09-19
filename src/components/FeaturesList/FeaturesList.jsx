import { nanoid } from "nanoid"
import { Feature, List } from "./FeaturesList.styled"

export const FeaturesList = ({features}) => {
    return (
        <List>
                {features.map(item => <Feature key={nanoid()}>{item}</Feature>)}
            </List>
    )
}