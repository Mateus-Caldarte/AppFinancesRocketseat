import styled from "styled-components/native";
import  AntDesign from 'react-native-vector-icons/AntDesign';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    width: 100%;
    padding: 18px 20px ;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 10px;
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    border-color: ${({theme}) => theme.colors.attention};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
`

export const Category = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({theme}) => theme.fonts.regular};
`

export const Icon = styled(AntDesign)`
font-size: ${RFValue(14)}px;
`