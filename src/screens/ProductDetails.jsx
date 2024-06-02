import { useParams } from "react-router-dom"
import products from "../data/products"
import {Row,Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
const ProductDetails=()=>{
    const {id}=useParams()
    const product=products.find(v=>v._id==id)
    return <Row>
        <Col md={5}>
        <Image src={product.image} alt="product" fluid/>
        </Col>
        <Col md={4}>
         <ListGroup variant="flush">
            <ListGroup.Item>
                {product.name}
            </ListGroup.Item>
            <ListGroup.Item>
                Price:{product.price}
            </ListGroup.Item>
            <ListGroup.Item>
               Description:{product.description}
            </ListGroup.Item>
         </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>Price</Col>
                            <Col>{product.price}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status</Col>
                            <Col>{product.countInStock>0? "Instock":"out of stock"}</Col>
                        </Row>
                    </ListGroup.Item>
                
                </ListGroup>
                <Button className="btn btn-dark btn-block">
                    Add to Cart
                   </Button>
            </Card>
        </Col>
    </Row>
}
export default ProductDetails