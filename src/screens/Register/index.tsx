import React, {useState} from 'react';
import {Button} from '../../Components/form/Button';
import {ImputForm} from '../../Components/form/ImputForm';
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
import {useForm} from 'react-hook-form';

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [active, setActive] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const {control, handleSubmit} = useForm();

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

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
    };
    console.log(data);
  }

  return (
    <Container>
      <Head>
        <Title>Cadastro</Title>
      </Head>

      <Form>
        <Fields>
          <ImputForm
            placeholder="Digite o nome"
            control={control}
            name="name"
          />
          <ImputForm
            placeholder="Digite o preço"
            control={control}
            name="amount"
          />

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

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
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
