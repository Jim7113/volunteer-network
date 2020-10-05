import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const NavbarTop = () => {
  let history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  function redirectAdmin() {
    history.push("/admin/volunteer-list");
  }

  function redirectVolunteer() {
    history.push(`/volunteers/${loggedInUser.email}`);
  }

  function manageUser() {
    history.push("/manage-user");
  }
  function redirectToHome() {
    history.push("/home");
  }

  return (
    <Navbar
      expand="lg"
      className="px-5"
      style={{ backgroundColor: "#F5F5F5", cursor: "pointer" }}
    >
      <Navbar.Brand href="" onClick={redirectToHome}>
        <img
          src="https://i.ibb.co/ckQkMZ2/Group-1329.png"
          alt="logo"
          style={{ width: 200 }}
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="" className="mr-5">
            Home
          </Nav.Link>
          <Nav.Link href="" className="mr-5">
            Donation
          </Nav.Link>
          <Nav.Link href="" className="mr-5" onClick={redirectToHome}>
            Events
          </Nav.Link>
          <Nav.Link href="" className="mr-5">
            Blog
          </Nav.Link>
          {loggedInUser.email ? (
            <>
              <Button
                className="btn btn-primary mr-3"
                onClick={redirectVolunteer}
              >
                {loggedInUser.name}
              </Button>
              <Button
                className="btn btn-warning mr-3 text-light"
                onClick={manageUser}
              >
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Button className="btn btn-primary mr-3" onClick={manageUser}>
                SignIn
              </Button>
              <Button
                className="btn btn-secondary mr-3"
                onClick={redirectAdmin}
              >
                Admin
              </Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarTop;
