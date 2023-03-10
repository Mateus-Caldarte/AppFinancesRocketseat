import { RFValue } from 'react-native-responsive-fontsize';
import Icons from 'react-native-vector-icons/EvilIcons';
import styled, {css} from 'styled-components/native';

interface TypeProps{
    type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
    background-color: ${({theme, type}) => type === 'total' ? theme.colors.secundary : theme.colors.shape};
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    width: ${RFValue(300)}px;
    border-radius: 10px;
    height: ${RFValue(200)}px;
    margin-right: ${RFValue(24)}px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.meddium};
    ${({type}) => type === 'total' && css` color: ${({theme}) => theme.colors.shape}`}
`;

export const Icon = styled(Icons)<TypeProps>`
    font-size: ${RFValue(40)}px;

    ${(props) => props.type === 'up' && css` color: ${({theme}) => theme.colors.success};`}
    ${(props) => props.type === 'down' && css` color: ${({theme}) => theme.colors.attention};`}
    ${(props) => props.type === 'total' && css` color: ${({theme}) => theme.colors.shape};`}
`;

export const Footer = styled.View`
    padding-top: 40px;
`;

export const Amount = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.meddium};
    font-size: ${RFValue(32)}px;
    ${({type}) => type === 'total' && css`color: ${({theme}) => theme.colors.shape}`}
`;

export const LastTransaction = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.meddium};
    font-size: ${RFValue(12)}px;
    ${({type}) => type === 'total' && css`color: ${({theme}) => theme.colors.shape}`}
`;
