// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50vh;
  padding: 20px;
`

export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  align-items: center;
  padding: 50px;
`

export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 25px;
  text-decoration: underline;
  text-decoration-color: #ffd773;
`
export const Paragraph = styled.p`
  color: white;
  font-size: 14px;
  display: flex;
  align-self: start;
`

export const InputContainer = styled.div`
  background-color: white;
  height: 100vh;
  width: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PaymentContainer = styled.div`
  border: 1px solid #d3d9e0;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
`

export const PaymentHeading = styled.h1`
  color: #475569;
  font-size: 20px;
  font-family: 'Roboto';
`
export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const InputElement = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-style: solid;
  border-top-width: 0px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-color: #c3cad9;
`

export const NameNumber = styled.p`
  color: white;
  font-size: 19px;
  font-weight: bold;
`
