import { ContactsItem, ContactsList, ContactsText, ContactsWrapper, InstaIcon, PhoneIcon, TelegramIcon } from "./Contacts.styled"

export const Contacts = () => {
  return (
    <ContactsWrapper>
      <ContactsText>Contact us 24/7</ContactsText>
      <ContactsList>
        <ContactsItem>
          <PhoneIcon/>
          <ContactsText>+38 063 123 45 67</ContactsText>
        </ContactsItem>
        <ContactsItem>
          <TelegramIcon/>
          <ContactsText>Telegram</ContactsText>
        </ContactsItem>
        <ContactsItem>
          <InstaIcon/>
          <ContactsText>Instagram</ContactsText>
        </ContactsItem>
      </ContactsList>
    </ContactsWrapper>
  )
}
