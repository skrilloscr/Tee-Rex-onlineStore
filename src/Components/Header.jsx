import { Badge, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const cart = useSelector((state) => state.cartReducer);

  return (
    <Navbar expand="lg" className="bg-black fixed">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '35px' }}>
            <img style={{ width: '80px', height: '60px' }} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c62197da-4508-4cf8-b207-79135ce6f44c/d92xhyl-5cbcd0a2-765d-4f86-bfcd-b9888668723e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MjE5N2RhLTQ1MDgtNGNmOC1iMjA3LTc5MTM1Y2U2ZjQ0Y1wvZDkyeGh5bC01Y2JjZDBhMi03NjVkLTRmODYtYmZjZC1iOTg4ODY2ODcyM2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8qWKNReAj215qY7zN57glZfHhHr2wAxN6PT9JN-pBmQ'></img>TEE-REX
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto">
          <Form className="d-flex me-2 border rounded">
              <FormControl
                type="text"
                placeholder="Search Here"
                className="mr-2"
                // Add your search input handling logic here
              />
              <Button className='btn btn-rounded d-flex align-items-center me-2' style={{background:'black'}} variant='outline-black'><i class="fa-brands fa-searchengin"></i></Button>
            </Form>

            <Nav.Link className='btn btn border rounded'>
              <Link to={'/wishlist'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'yellow', fontWeight: 'bold' }}>
                <i className='fa-solid fa-heart text-light me-2'></i>WishList
                <Badge className='ms-2 rounded' bg='dark'>{wishlist.length}</Badge>
              </Link>
            </Nav.Link>
            <Nav.Link className='btn btn border rounded ms-2'>
              <Link to={'/cart'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'yellow', fontWeight: 'bold' }}>
                <i className='fa-solid fa-cart-shopping text-light me-2'></i>Cart
                <Badge className='ms-2 rounded' bg='dark'>{cart.length}</Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
