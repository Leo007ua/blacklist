import PropTypes from 'prop-types';
import { BsArchive } from "react-icons/bs";
import { ContactDivStyled } from './ContactItemStyled'
import { iconsSize } from 'components/Icon/iconSize';


const ContactItem = ({id, name, number, onRemoveContact})=>{
    return(
        <ContactDivStyled key={id}>
            <p>
              {name}: {number}
            </p>
            <button type='button' onClick={()=>onRemoveContact(id)}><BsArchive size={iconsSize.small}/></button>
          </ContactDivStyled>
    )
}

ContactItem.propTypes={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemoveContact: PropTypes.func.isRequired
}

export default ContactItem
