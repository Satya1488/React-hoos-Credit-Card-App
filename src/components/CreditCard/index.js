// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CreditCardContainer,
  Heading,
  Paragraph,
  InputContainer,
  PaymentContainer,
  PaymentHeading,
  AppContainer,
  NameNumber,
  InputElement,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => setNumber(event.target.value)
  const onChangeName = event => setName(event.target.value)

  return (
    <AppContainer>
      <MainContainer>
        <Heading>CREDIT CARD</Heading>
        <CreditCardContainer>
          <NameNumber>{number}</NameNumber>
          <Paragraph>CARDHOLDER NAME</Paragraph>
          <NameNumber>{name}</NameNumber>
        </CreditCardContainer>
      </MainContainer>
      <InputContainer>
        <PaymentContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputElement
            type="text"
            onChange={onChangeNumber}
            value={number}
            placeholder="Card Number"
          />
          <InputElement
            type="text"
            onChange={onChangeName}
            value={name}
            placeholder="Cardholder Name"
          />
        </PaymentContainer>
      </InputContainer>
    </AppContainer>
  )
}

export default CreditCard
