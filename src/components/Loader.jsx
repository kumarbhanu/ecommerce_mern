import { Spinner } from "react-bootstrap";

const Loader = () => (
  <Spinner
    role="status"
    animation="border"
    variant="dark"
  style={{
    width:"400px",
    height:"400px",
    margin:"auto",
    display:"block"
  }}
  ></Spinner>
);
export default Loader;
