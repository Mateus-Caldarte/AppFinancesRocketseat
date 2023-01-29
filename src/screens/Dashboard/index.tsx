import React from 'react';
import {FlatList} from 'react-native';
import {HighlightCard} from '../../coponents/HighlightCard';
import {
  TransactionCards,
  TransactionalListProps,
} from '../../coponents/TransactionCards';
import {
  Container,
  Header,
  ContainerInfo,
  Photo,
  UserGreetings,
  UserHello,
  UserName,
  Icon,
  ContainerHead,
  HighlightCards,
  Transactions,
  Title,
} from './styles';

export interface DataListProps extends TransactionalListProps {
  id: string;
}

const data: DataListProps[] = [
  {
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {name: 'Vendas', icon: 'attach-money'},
    date: '12/12/2022',
  },
  {
    id: '2',
    type: 'negative',
    title: 'Aluguel',
    amount: 'R$ 1.000,00',
    category: {name: 'Aluguel', icon: 'attach-money'},
    date: '18/12/2022',
  },
  {
    id: '3',
    type: 'negative',
    title: 'Hamburgueria Pizzy',
    amount: 'R$ 120,00',
    category: {name: 'Alimentação', icon: 'attach-money'},
    date: '25/12/2022',
  },
];

export function Dashboard() {
  return (
    <Container>
      <Header>
        <ContainerInfo>
          <ContainerHead>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/96339783?v=4',
              }}
            />
            <UserGreetings>
              <UserHello>Olá, </UserHello>
              <UserName>Mateus</UserName>
            </UserGreetings>
          </ContainerHead>
          <Icon name="power-off" />
        </ContainerInfo>
      </Header>

      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
      </Transactions>
      <FlatList
        style={{paddingLeft: 24, paddingRight: 24}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TransactionCards data={item} />}
      />
    </Container>
  );
}
