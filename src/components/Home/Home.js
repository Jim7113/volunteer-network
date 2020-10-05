import React from "react";
import {
  Container,
  Jumbotron,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import EventContainer from "../EventsContainer/EventContainer";
import NavbarTop from "../Navbar/NavbarTop";

const Home = () => {
  return (
    <div>
      <NavbarTop />
      <Jumbotron fluid style={{ height: 300, backgroundColor: "#F5F5F5" }}>
        <Container>
          <h2 className="text-center">I GROW BY HELPING PEOPLE IN NEED</h2>
          <Form inline className="d-flex justify-content-center mt-4">
            <FormControl
              type="text"
              placeholder="Search"
              style={{ width: 350 }}
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Container>
      </Jumbotron>
      <EventContainer />
    </div>
  );
};

export default Home;
