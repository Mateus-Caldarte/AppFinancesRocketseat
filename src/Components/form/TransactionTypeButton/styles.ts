import styled, {css} from "styled-components/native";
import Icons from 'react-native-vector-icons/EvilIcons';
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface IconProps{
    type: 'up' | 'down'
}

interface ActiveButton{
    isActive: boolean
    type: 'up' | 'down'
}

export const Container = styled(TouchableOpacity)<ActiveButton>`
width: 48%;
flex-direction: row;
align-items: center;
justify-content: center;
border: ${({isActive}) => isActive ? 0 : 1.5}px;
border-radius: 5px;
padding: 16px 40px;


${({isActive, type}) => isActive && type === 'up' &&  css`
background-color: ${({theme}) => theme.colors.success_light};
`}

${({isActive, type}) => isActive && type === 'down' &&  css`
background-color: ${({theme}) => theme.colors.attention_ligth};
`}

`

export const Icon = styled(Icons)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 5px;
    color: ${({theme, type}) => type === 'up' ? theme.colors.success : theme.colors.attention};
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`