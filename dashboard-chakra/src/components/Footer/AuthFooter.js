/*!

=========================================================
* MAIS VALOR Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function AuthFooter(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
      }}
      justifyContent='space-between'
      pb='20px'
      fontSize='sm'>
      <Text
        color='white'
        textAlign={{
          base: "center",
        }}
        mb={{ base: "20px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span' mx='2px'>
          {document.documentElement.dir === "rtl"
            ? " "
            : " "}
        </Text>
        <Link href='https://www.simmmple.com' target='_blank'>
          {document.documentElement.dir === "rtl"
            ? " Developer By"
            : "Developer By "}
        </Link>
        
        <Link href='https://www.creative-tim.com' target='_blank'>
          {document.documentElement.dir === "rtl" ? "Brito " : " Brito"}
        </Link>
        {document.documentElement.dir === "rtl"
          ? " With Creative Tim"
          : " With Creative Tim"}
      </Text>
    </Flex>
  );
}
