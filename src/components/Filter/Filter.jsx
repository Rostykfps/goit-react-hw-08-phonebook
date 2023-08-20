import { filterContacts } from 'redux/contacts/phoneBookSlice';
import { useDispatch } from 'react-redux';
import { PersonSearchOutlined } from '@mui/icons-material';
import { AddContactBtn } from 'components/AddContactBtn/AddContactBtn';
import { useContacts } from 'hooks';

import {
  Container,
  InputFilter,
  InputWrapper,
  LabelFilter,
} from './Filter.styled';

const Filter = () => {
  const { filter } = useContacts();

  const dispatch = useDispatch();

  const filteredContacts = ({ target: { value } }) =>
    dispatch(filterContacts(value));

  return (
    <Container>
      <LabelFilter>
        Find contacts by name
        <InputWrapper>
          <InputFilter
            type="text"
            name="filter"
            value={filter}
            onChange={filteredContacts}
          />
          <PersonSearchOutlined
            sx={{
              color: '#0d6efd',
              fontSize: 28,
              position: 'absolute',
              left: '5px',
            }}
          />
        </InputWrapper>
      </LabelFilter>
      <AddContactBtn />
    </Container>
  );
};

export default Filter;
