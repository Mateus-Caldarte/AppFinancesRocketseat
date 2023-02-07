import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TouchableOpacity)`
    width: 100%;
    background-color: ${({theme}) => theme.colors.secundary};
    padding: 18px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.meddium};
`