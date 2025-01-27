import Dropdown from 'react-bootstrap/Dropdown';
import "./Components.css"


function RegisterDropDown() {
  return (
    <>
      <Dropdown data-bs-theme="dark" className='component-bg'>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{width:"100%"}}>
          request role
        </Dropdown.Toggle>

        <Dropdown.Menu style={{width:"100%"}}>
          <Dropdown.Item href="#/action-1" >Admin</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Seller</Dropdown.Item>
          <Dropdown.Item href="#/action-3">car mechanic</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default RegisterDropDown;