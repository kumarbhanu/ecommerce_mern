
import { Link } from "react-router-dom";
import Message from "../components/Message";

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
  export default EmptyCart