import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTocart, removeCart } from "../slices/cartSlice";
const EmptyCart = ({ cart }) => {
  return (
    <>
      {cart?.cartItems?.length == 0 && (
        <Message variant="secondary">
          Your cart is empty <Link to="/">Go Back</Link>
        </Message>
      )}
    </>
  );
};
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.cart);

  return (
    <Row>
      <Col md={2}>
        <Image src={item?.image} fluid="rounded" alt={item?.name} />
      </Col>
      <Col md={3}>
        <Link to={`/product/${item?._id}`}>{item?.name}</Link>
      </Col>
      <Col md={2}>${item?.price}</Col>
      <Col md={2}>
        <Form.Control
          as="select"
          value={item?.qty}
          onChange={(e) => {
            dispatch(addTocart({ ...item, qty: e.target.value }));
          }}
        >
          {[...Array(item?.countInStock).keys()].map((x) => (
            <option key={x + 1}>{x + 1}</option>
          ))}
        </Form.Control>
      </Col>
      <Col>
        <Button
          variant="light"
          onClick={() => {
            dispatch(removeCart(item?._id));
          }}
        >
          <FaTrash />
        </Button>
      </Col>
    </Row>
  );
};
const CartScreen = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state?.cart);

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: "15px", textAlign: "center" }}>
          shoping cart
        </h1>
        <EmptyCart cart={cart} />
        <ListGroup variant="flush">
          {cart?.cartItems?.map((v) => (
            <ListGroup.Item key={v?._id}>
              <CartItem item={v} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                SubTotal (
                {cart?.cartItems?.reduce(
                  (acc, item) => acc + Number(item.qty),
                  0
                )}
                ) Items
              </h2>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
export default CartScreen;
