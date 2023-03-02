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

const AddProduct = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const [userId, setuserId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    const user = JSON.parse(auth);
    setuserId(user._id);
    if (!auth) {
      navigate("/");
    }
  }, [userId, navigate]);

  const handleSubmit = async () => {
    const result = await axios.post(
      `http://localhost:5000/api/products/addproduct`,
      {
        name,
        price,
        brand,
        category,
        userId,
      }
    );
    if (result) {
      alert("Product added.");
      setName("");
      setPrice("");
      setBrand("");
      setCategory("");
    }
  };

  return (
    <>
      <Container maxW={"container.sm"} mt={"10"}>
        <form action="#">
          <FormControl mt={"4"}>
            <FormLabel>Name : </FormLabel>
            <Input
              type={"text"}
              placeholder={"Enter product name "}
              name={"name"}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name ? name : ""}
            />
          </FormControl>
          <FormControl mt={"4"}>
            <FormLabel>Price : </FormLabel>
            <Input
              type={"number"}
              placeholder={"Enter product Price "}
              name={"price"}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price ? price : ""}
            />
          </FormControl>
          <FormControl mt={"4"}>
            <FormLabel>Brand : </FormLabel>
            <Input
              type={"text"}
              placeholder={"Enter product Brand "}
              name={"brand"}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
              value={brand ? brand : ""}
            />
          </FormControl>
          <FormControl mt={"4"}>
            <FormLabel>Category : </FormLabel>
            <Input
              type={"text"}
              placeholder={"Enter Category "}
              name={"category"}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              value={category ? category : ""}
            />
          </FormControl>
          <Button
            type="button"
            size={"lg"}
            bgColor={"linkedin.200"}
            mt={"4"}
            onClick={handleSubmit}
          >
            Add Product
          </Button>
        </form>
      </Container>
    </>
  );
};

export default AddProduct;
