import React, {useState} from 'react';
import {Button} from '../../Components/form/Button';
import {Input} from '../../Components/form/Input';
import {Selector} from '../../Components/form/Selector';
import {TransactionTypeButton} from '../../Components/form/TransactionTypeButton';
import {
  Container,
  Head,
  Title,
  Form,
  Fields,
  TransactionsTipes,
} from './styles';
import {Modal, TouchableOpacity, View} from 'react-native';
import {CategorySelect} from '../../screens/CategorySelect';

export function Register() {
  const [active, setActive] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const [category, setCaregory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleActive(type: 'up' | 'down') {
    setActive(type);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }
  function handleOpenSelectCategory() {
    setOpenModal(true);
  }

  return (
    <Container>
      <Head>
        <Title>Cadastro</Title>
      </Head>

      <Form>
        <Fields>
          <Input placeholder="Digite o nome" />
          <Input placeholder="Digite o preço" />

          <TransactionsTipes>
            <TransactionTypeButton
              onPress={() => handleActive('up')}
              isActive={active === 'up'}
              title="Income"
              type="up"
            />
            <TransactionTypeButton
              onPress={() => handleActive('down')}
              isActive={active === 'down'}
              title="Outcome"
              type="down"
            />
          </TransactionsTipes>

          <TouchableOpacity
            onPress={handleOpenSelectCategory}
            activeOpacity={0.9}>
            <Selector title={category.name} onPress={() => {}} />
          </TouchableOpacity>
        </Fields>
        <Button title="Enviar" />
      </Form>

      <Modal visible={openModal}>
        <CategorySelect
          categoty={category}
          setCategory={setCaregory}
          closeCategory={handleCloseModal}
        />
      </Modal>
    </Container>
  );
}
