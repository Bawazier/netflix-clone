import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = (props) => {
  const sizeBoxOptions = {
    large: ["218px", "434px"],
    medium: ["158px", "280px"],
    small: ["300px", "170px"],
  };
  const handleOnError = () => {
    setImgSrc("https://loremflickr.com/640/480/people");
  };
  const scale = props.id === 1 ? { scaleY: 1.1 } : { scale: 1.1 };
  return (
    <Box cursor={"pointer"}>
      <Box
        as={motion.div}
        whileHover={props.animation ? scale : null}
        whileTap={{ scale: 0.9 }}
        _hover={{ zIndex: "99" }}
        position="relative"
        w={sizeBoxOptions[props.size][0]}
        h={sizeBoxOptions[props.size][1]}
        borderRadius="8px"
        overflow="hidden"
      >
        <Image
          src={props.cardImage}
          alt="Picture of the author"
          layout="fill"
          onError={handleOnError}
        />
      </Box>
    </Box>
  );
};

export default Card;
