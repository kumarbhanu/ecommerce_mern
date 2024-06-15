import {  useNavigate } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Row, Col, ListGroup, Button, Card } from "react-bootstrap";

import { useSelector } from "react-redux";
import CartItem from "./CartItems";
import EmptyCart from "./EmptyCart";

const CartScreen = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state?.cart);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      tax:{cart?.taxPrice} + shippingPrice: {cart?.shippingPrice} + price:
      {cart?.itemPrice}
    </Tooltip>
  );
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

              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <div>
                  {" "}
                  Total Price:${" "}
                  {Number(
                    cart?.cartItems?.reduce(
                      (acc, item) =>
                        acc + Number(item.qty) * Number(item.price),
                      0
                    )
                  ).toFixed(2)}{" "}
                </div>
              </OverlayTrigger>
            </ListGroup.Item>
          </ListGroup>
          <Button
            type="button"
            variant="dark"
            disabled={cart?.cartItems?.length === 0}
            className="btn btn-block"
          >
            Proceed To Checkout
          </Button>
        </Card>
      </Col>
    </Row>
  );
};
export default CartScreen;
