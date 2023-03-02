import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate("/products");
    }
  });

  const handleSubmit = async () => {
    const result = await axios.post(`http://localhost:5000/api/users/login`, {
      email,
      password,
    });
    console.log(result);
    setEmail("");
    setPassword("");
    if (result) {
      localStorage.setItem("user",JSON.stringify(result.data));
      localStorage.setItem("token",JSON.stringify(result.data.token));
      navigate("/products");
      window.location.reload();
    }
  };

  return (
    <>
      <Container maxW={"container.sm"} mt={"10"}>
        <form action="#">
        <FormControl mt={"4"}>
          <FormLabel>Email : </FormLabel>
          <Input
            type={"email"}
            placeholder={"Enter your Email "}
            name={"email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email ? email : ""}
          />
        </FormControl>
        <FormControl mt={"4"}>
          <FormLabel>Password : </FormLabel>
          <Input
            type={"password"}
            placeholder={"Enter your Password "}
            name={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete={"on"}
            value={password ? password : ""}
          />
        </FormControl>
        <Button
          type="button"
          size={"lg"}
          bgColor={"linkedin.200"}
          mt={"4"}
          onClick={handleSubmit}
        >
          Login
        </Button>
        </form>
      </Container>
    </>
  );
};

export default Login;
