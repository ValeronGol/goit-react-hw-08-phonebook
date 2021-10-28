import PropTypes from 'prop-types';
import { Conteiner, Info } from './Contact.styled';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Contact = ({ name, number, id, onDelete }) => (
  <Conteiner>
    <Info>{`${name}: ${number}`}</Info>
    <Button
      variant="contained"
      size="small"
      startIcon={<DeleteIcon />}
      data-id={id}
      onClick={onDelete}
    >
      Delete
    </Button>
  </Conteiner>
);
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Contact;
