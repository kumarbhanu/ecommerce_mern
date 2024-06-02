import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem";

import { useGetProductsQuery } from "../slices/productApiSlice";

const HomeScreen = () => {
  const { data, isError, isLoading, refetch } = useGetProductsQuery();

  return (
    <>
      <Row>
        {data?.products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeScreen;
