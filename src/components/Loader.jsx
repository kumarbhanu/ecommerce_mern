import { Spinner } from "react-bootstrap";

const Loader = () => (
  <Spinner
    role="status"
    animation="border"
    variant="dark"
  style={{
    width:"200px",
    height:"200px",
    margin:"auto",
    display:"block"
  }}
  ></Spinner>
);
export default Loader;
