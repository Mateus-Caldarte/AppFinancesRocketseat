import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import Icons from 'react-native-vector-icons/MaterialIcons';


interface TransactionProps{
  type: 'positive' | 'negative';
}

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    padding: 17px 20px;
    margin-bottom: ${RFValue(16)}px;
`

  export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
  `

  export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.regular};

  color: ${({theme, type}) => type === 'positive' ? theme.colors.success : theme.colors.attention};
  `

  export const CardTransaction = styled.View`
    flex-direction: row;
    align-items: center;

  `

  export const Icon = styled(Icons)`
    font-size: ${RFValue(24)}px;
  `

  export const Transaction = styled.Text`
  margin-left: 5px;
  font-family: ${({theme}) => theme.fonts.regular};
  `

  export const Date = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `

  export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(24)}px;
  align-items: center;
  `
