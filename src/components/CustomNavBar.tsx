import Navbar from 'react-bootstrap/Navbar';

function CustomNavBar(): JSX.Element {
  return (
    <Navbar className="CustomNavBar" bg="black" data-bs-theme="dark">
      <div className="px-3">
        <Navbar.Brand>Alphabets</Navbar.Brand>
      </div>
    </Navbar>
  )
}

export default CustomNavBar;
