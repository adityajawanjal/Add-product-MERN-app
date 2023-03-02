import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }
  return (
    <>
      <HStack
        h={"28"}
        bgColor={"whatsapp.100"}
        justifyContent={"space-between"}
        pr={"5"}
        pl={"5"}
      >
        <HStack>
          <Text fontSize={"3xl"} fontWeight={"bold"} >E-Commerce</Text>
        </HStack>
        <HStack gap={2}>
          {
            auth ? <>
            <Link to={"/products"}>Products</Link>
            <Link to={"/addproduct"}>Add Product</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link onClick={logout}>Logout</Link>  
            </> :
            <>
            <Link to={"/"}>Home</Link>
            <Link to={"/signup"}>Sign up</Link>
            <Link to={"/login"}> Login</Link>
            </>

          }
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
