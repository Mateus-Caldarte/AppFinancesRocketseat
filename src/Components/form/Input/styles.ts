import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TextInput)`
    width: 100%;
    padding: 18px 20px ;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 10px;
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    border-color: ${({theme}) => theme.colors.attention};
    margin-bottom: 8px;
`