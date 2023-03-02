import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await axios.get("http://localhost:5000/api/products/");
    setproducts(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    window.location.reload();
  };

  const editProduct = async (id) => {
    navigate(`/updateproducts/${id}`);
  };

  const search = async (key) => {
    const result = await axios.get(
      `http://localhost:5000/api/products/search/${key}`
    );
    setproducts(result);
  };

  return (
    <>
      <Input
        type={"search"}
        onChange={(e) => search(e.target.value)}
        border={"3px solid red"}
      />
      <TableContainer>
        <Table variant={"striped"}>
          <TableCaption>This is a Products List.</TableCaption>
          <Thead>
            <Tr>
              <Th>Sr.No</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Brand</Th>
              <Th>Category</Th>
              <Th>User</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((e, i) => {
              return (
                <Tr key={e._id}>
                  <Td>{i + 1}</Td>
                  <Td>{e.name}</Td>
                  <Td>{e.price}</Td>
                  <Td>{e.brand}</Td>
                  <Td>{e.category}</Td>
                  <Td>{e.userId}</Td>
                  <Td>
                    <Button
                      type="button"
                      size={"lg"}
                      bgColor={"linkedin.100"}
                      onClick={() => editProduct(e._id)}
                    >
                      Edit
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      type="button"
                      size={"lg"}
                      bgColor={"linkedin.100"}
                      onClick={() => deleteProduct(e._id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Products;
