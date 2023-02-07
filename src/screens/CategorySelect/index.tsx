import React from 'react';
import {FlatList, View} from 'react-native';
import {
  Container,
  Header,
  Title,
  Categorys,
  Icon,
  Name,
  Footer,
} from './styles';
import {categories} from '../../utils/categories';
import {Button} from '../../Components/form/Button';

interface Category {
  name: string;
  key: string;
}

interface Props {
  categoty: Category;
  setCategory: (category: Category) => void;
  closeCategory: () => void;
}

export function CategorySelect({categoty, closeCategory, setCategory}: Props) {
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <View>
            <Categorys
              onPress={() => handleCategorySelect(item)}
              isActive={categoty.key === item.key}>
              <Icon name={item.icon} />
              <Name>{item.name}</Name>
            </Categorys>
          </View>
        )}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeCategory} />
      </Footer>
    </Container>
  );
}
