import PropTypes from "prop-types";
import { useEffect } from "react";
import { getLocalStorage } from "../utlis/localStorage";
const AuthContext = ({ children }) => {

    useEffect(() => {
    getLocalStorage()
   
  }, )
  


  return <div>{children}</div>;
};
AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthContext;
