import { VStack, Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { MenuButton, MenuItem, MenuList, Portal,Menu, useToast } from "@chakra-ui/react";

const UserHeader = () => {
    const toast = useToast()
    const copyURL=()=>{
        const currentURL= window.location.href;
        navigator.clipboard.writeText(currentURL).then(()=>{
            toast({
                title:"Account Created",
                description:"Profile Link Copied",
                status:'success',
                duration:'300',
                isClosable:true
            })
        })
    }
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Mark Zukerberg
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>zuckerberg</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="Mark Zukerberg" src="/zuck-avatar.png" size=
          {{
            base:'md',
            md:"xl",
          }} />
        </Box>
      </Flex>
      <Text>Co-founder Executive Chairman and CEO of Meta Platform</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                        <MenuItem  bg={"gray.dark"} onClick={copyURL}>
                            Copy link
                        </MenuItem>
                    </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>


      <Flex w={"full"}>
        <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={'center'} pb='3' cursor={"pointer"}>
            <Text fontWeight={"bold"}>Threads</Text>
        </Flex>
        <Flex flex={1} borderBottom={"1px solid gray"} justifyContent={'center'} pb='3' color={'gray.light'} cursor={"pointer"}>
        <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>

    </VStack>
  );
};

export default UserHeader;
