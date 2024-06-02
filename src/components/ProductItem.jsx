import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const ProductItem=({product})=>{
    const {image,name,price,description,_id}=product 
    const redirectUrl=`product/${_id}`
    return <Link to={redirectUrl} className='link-card'>
    <Card className="m-y p-3" rounded
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
    </Link>
}
export default ProductItem