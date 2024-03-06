import React, {useState , useContext} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { UserContext } from "../../../router/Router";
import {useNavigate} from "react-router-dom"

export default function EditProfile() {
    const [updatedName,setUpdatedName]=useState("")
    const { user, setUser } = useContext(UserContext);
    const navigate=useNavigate()
  return (
    <section
      style={{ backgroundColor: "#eee" }}
      className="d-flex justify-content-center p-5"
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.imageUrl} />
        <Card.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="name" onChange={(e)=>setUpdatedName(e.target.value)} />
          </Form.Group>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success" onClick={() =>{
            setUser({...user,userName:updatedName})
            navigate(-1)}}>
          Save
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
}
