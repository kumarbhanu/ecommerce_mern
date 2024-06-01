import {Card} from 'react-bootstrap'
const ProductItem=({product})=>{
    const {image,name,price,description}=product
    return <Card className="m-y p-3" rounded
    >
<Card.Img src={image} variant='top'/>
<Card.Body>
    <Card.Title as="div">
        <strong>{name}</strong>
    </Card.Title>
    <Card.Text as="h3">
$ {price}
    </Card.Text>
</Card.Body>
    </Card>
}
export default ProductItem