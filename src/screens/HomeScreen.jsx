import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import products from '../data/products'
const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeScreen;
