import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const params = useParams();

 
  useEffect(() => {
    const fetchProductDetails = async () => {
      const result = await axios.get(
        `http://localhost:5000/api/products/${params.id}`
      );
      setName(result.data.name);
      setPrice(result.data.price);
      setBrand(result.data.brand);
      setCategory(result.data.category);
    };
    fetchProductDetails();
  },[params.id]);

  const handleSubmit = async () => {
    const result = await axios.put(
      `http://localhost:5000/api/products/${params.id}`,
      {
        name,
        brand,
        category,
        price,
      }
    );
    if (result) {
      alert("Product Updated.");
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
            Update Product
          </Button>
        </form>
      </Container>
    </>
  );
};

export default UpdateProduct;
