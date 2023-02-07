import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`
export const Head = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    height: ${RFValue(113)}px;
    justify-content: flex-end;
    align-items: center;
    
`

export const Title = styled.Text`
color: ${({theme}) => theme.colors.shape};
font-size: ${RFValue(18)}px;
margin-bottom: ${RFValue(19)}px;
`

export const Form = styled.View`
    margin: 20px;
    flex: 1;
    justify-content: space-between;
`

export const Fields = styled.View`
`

export const TransactionsTipes = styled.View`
flex-direction: row;
justify-content: space-between;
margin-top: 5px;

`