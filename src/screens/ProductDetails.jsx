import { useNavigate, useParams } from "react-router-dom";

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { useGetProductDetailsQuery } from "../slices/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../slices/cartSlice";
const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isError, isLoading, refetch } = useGetProductDetailsQuery(id);
  const product = data?.product;
  const addCartHandler = (product) => {
    const newProduct = { ...product, qty };
    dispatch(addTocart(newProduct));
    navigate("/cart");
  };
  if (isLoading) return <Loader />;
  if (isError) return <Message></Message>;
  return (
    <Row>
      <Col md={5}>
        <Image src={product?.image} alt="product" fluid />
      </Col>
      <Col md={4}>
        <ListGroup variant="flush">
          <ListGroup.Item>{product?.name}</ListGroup.Item>
          <ListGroup.Item>Price:{product?.price}</ListGroup.Item>
          <ListGroup.Item>Description:{product?.description}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>{product?.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>
                  {product?.countInStock > 0 ? "Instock" : "out of stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            {product?.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>qty</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                    >
                      {[...Array(product?.countInStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
          </ListGroup>
          <Button
          disabled={product?.countInStock==0}
            className="btn btn-dark btn-block"
            onClick={() => {
              addCartHandler(product);
            }}
          >
            Add to Cart
          </Button>
        </Card>
      </Col>
    </Row>
  );
};
export default ProductDetails;
