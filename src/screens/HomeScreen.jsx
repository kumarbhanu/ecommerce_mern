import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem";

import { useGetProductsQuery } from "../slices/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const { data, isError, isLoading, refetch } = useGetProductsQuery();
if(isLoading) return <Loader/>
if(isError) return <Message>{data?.message?.error||data?.error}</Message>
  return (
    <>

<Message variant="success">All items</Message>
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
