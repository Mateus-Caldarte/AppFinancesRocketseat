import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Text = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
`;

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: ${RFPercentage(42)}px;
`

export const ContainerInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
  justify-content: space-between;
`

export const ContainerHead = styled.View`
flex-direction: row;
margin-top: ${RFPercentage(5)}px;
`

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const UserGreetings = styled.View`
    margin-left: 15px;
`;

export const UserHello = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const Icon = styled(FontAwesome5)`
  color: ${({theme}) => theme.colors.secundary};
  font-size: ${RFValue(24)}px;
`

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingLeft: 24}
})`
position: absolute;
margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
padding: 80px 0px 24px  24px;
`

export const Title = styled.Text`
font-size: ${RFValue(18)}px;
font-family: ${({theme}) => theme.fonts.regular};
`