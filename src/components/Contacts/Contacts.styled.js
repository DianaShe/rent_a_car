import styled from "styled-components";
import { colors } from "utilities/colors";
import { instaIcon, phoheIcon, telegramIcon } from "utilities/icons";

export const ContactsWrapper = styled.div`
`

export const ContactsText = styled.p`
font-size: 13px;
color: ${colors.white}`

export const ContactsList = styled.ul`
`

export const ContactsItem = styled.li`
display: flex;
gap:12px;
margin-bottom: 12px;
`

export const PhoneIcon = styled(phoheIcon)`
width: 44px;
height:44px;`

export const TelegramIcon = styled(telegramIcon)`
width: 44px;
height:44px;
`
export const InstaIcon = styled(instaIcon)`
stroke: #fff;
width: 44px;
height: 44px;
`
