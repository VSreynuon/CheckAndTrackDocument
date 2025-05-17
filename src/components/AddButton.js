import { FaPlus } from 'react-icons/fa6';
import "../styles/addbutton.css";

function AddButton() { 
  return (
      <button className="add-button">
        <FaPlus className="icon"/>
      </button>
  );
}

export default AddButton;  



