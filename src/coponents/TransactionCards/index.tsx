import React from 'react';
import {
  Container,
  Title,
  Amount,
  CardTransaction,
  Icon,
  Transaction,
  Date,
  Footer,
} from './styles';

interface category {
  name: string;
  icon: string;
}

export interface TransactionalListProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: category;
  date: string;
}

interface Props {
  data: TransactionalListProps;
}

export function TransactionCards({data}: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>
      <Footer>
        <CardTransaction>
          <Icon name="attach-money" />
          <Transaction>{data.category.name}</Transaction>
        </CardTransaction>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
