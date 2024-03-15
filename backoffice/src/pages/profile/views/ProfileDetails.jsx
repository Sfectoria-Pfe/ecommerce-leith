import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../router/Router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom"
import {  useSelector } from "react-redux";
export default function ProfileDetails() {
  const user = useSelector((store) => store.auth.me);
  
const navigate=useNavigate()
  return (
    <section style={{ backgroundColor: "#eee" }} className="d-flex justify-content-center p-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.imageUrl} />
        <Card.Body>
          <Card.Title>{user.userName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="warning" onClick={()=>navigate("edit")}>Edit</Button>
        </Card.Body>
      </Card>
    </section>
  );
}
