import { Alert } from "react-bootstrap";

const Message=({children,variant})=>(
    <Alert variant={variant} style={{textAlign:"center"}}>
        {children}
    </Alert>
)
export default Message