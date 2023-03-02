import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import PrivateComponents from "./components/PrivateComponents";
import Login from "./components/Login";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import UpdateProduct from "./pages/UpdateProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Flex
          flexDir={"column"}
          minH={"99.7vh"}
          justifyContent={"space-between"}
        >
          <Box>
            <Navbar />
            <Routes>
              <Route element={<PrivateComponents />}>
                <Route
                  exact
                  path="/addproduct"
                  element={<AddProduct/>}
                />
                <Route exact path="/products" element={<Products/>} />
                <Route exact path="/updateproducts/:id" element={<UpdateProduct/>} />
                <Route exact path="/profile" element={<h1>profile</h1>} />
              </Route>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </BrowserRouter>
    </>
  );
};

export default App;
