import PropTypes from 'prop-types';
import { InputStyled } from './FilterStyled';
import { FiFilter } from "react-icons/fi";
import { iconsSize } from 'components/Icon/iconSize';

const Filter = ({ value, handleOnChangeFilter }) => {
  return (
    <>
      <h3>Find contacts by name <FiFilter  size={iconsSize.medium}/></h3>
      <InputStyled
       type="text"
       value={value}
       onChange={handleOnChangeFilter}
       placeholder="Search name" />
    </>
  );
};

Filter.propTypes = {  
  handleOnChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
