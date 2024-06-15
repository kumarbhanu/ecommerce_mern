import { Link } from "react-router-dom";

import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeCart } from "../slices/cartSlice";
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
export default CartItem;
