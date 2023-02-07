import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import AntDesign from 'react-native-vector-icons/AntDesign';

interface CategoryProps{
    isActive: boolean
}

export const Container = styled.View`
    width: 100%;
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`
export const  Header = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    height: ${RFValue(113)}px;
    justify-content: flex-end;
    align-items: center;
`

export const  Title = styled.Text`
color: ${({theme}) => theme.colors.shape};
font-size: ${RFValue(18)}px;
margin-bottom: ${RFValue(19)}px;
`

export const Categorys = styled.TouchableOpacity<CategoryProps>`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 10px 0px;
    background-color: ${({isActive, theme}) => isActive ? theme.colors.secundary_light : theme.colors.background};
`

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(30)}px;
  margin: 0px 20px;
`

export const Name =  styled.Text`
    font-family:  ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
    width: 100%;
    padding: 12px;
`