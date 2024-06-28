import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RowBox, ColumnBox } from '../components/styled.components';

const SelectBirthday = ({ birthday, onChangeBirthday }) => {
  const { year, month } = birthday;
  const currentDate = new Date();
  const thisYear = currentDate.getFullYear();
  const lastDateOfMonth = new Date(Number(year), Number(month), 0).getDate();

  const yearOption = Array(80)
    .fill(thisYear)
    .map((el, idx) => {
      return <option key={el - idx}>{el - idx}</option>;
    });

  const monthOption = Array(12)
    .fill(1)
    .map((el, idx) => {
      return <option key={el + idx}>{el + idx}</option>;
    });

  const dateOption = Array(lastDateOfMonth)
    .fill(1)
    .map((el, idx) => {
      return <option key={el + idx}>{el + idx}</option>;
    });

  return (
    <ColumnBox>
      birthday
      <RowBox>
        <DateSelect name='year' onChange={onChangeBirthday}>
          {yearOption}
        </DateSelect>
        <DateSelect name='month' onChange={onChangeBirthday}>
          {monthOption}
        </DateSelect>
        <DateSelect name='date' onChange={onChangeBirthday}>
          {dateOption}
        </DateSelect>
      </RowBox>
    </ColumnBox>
  );
};

SelectBirthday.propTypes = {
  onChangeBirthday: PropTypes.func.isRequired,
  birthday: PropTypes.shape({
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default SelectBirthday;

const DateSelect = styled.select`
  border-radius: 10px;
  width: 33%;
  height: 45px;
`;
