import { Avatar, Box, Button, Divider, Flex, Image,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from '../components/Actions'
import Comments from '../components/Comments'

const PostPage = () => {
  const [liked,setLiked] = useState(false)
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}> 
          <Avatar src='/zuck-avatar.png' size={'md'} name='Mark Zuckerberg'/>
          <Flex>
            <Text fontSize={"sm"} fontWeight={'bold'}>markzuckerberg</Text>
            <Image src='/verified.png' w={4} h={4} ml={4}/>
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={'center'}>
          <Text fontSize={"sm"} color={'gray.light'}>1d</Text>
          <BsThreeDots/>
        </Flex>
      </Flex>

      <Text my={3} >
        Let's Talk about Threads 
      </Text>
      <Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray.light'}>
            <Image src={'/post1.png'} w={'full'}/>
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked}/>
      </Flex>
      
      <Flex gap={2} alignItems={"center"}>
          <Text color={'gray.light'} fontSize={"sm"}>238 replies</Text>
          <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
          <Text color={'gray.light'} fontSize={"sm"}>{200+ (liked ? 1:0)} likes</Text>

      </Flex>
      <Divider my={4}/>

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={'2xl'}>👋</Text>
          <Text color={'gray.light'}>Get the App to like, and reply and post.</Text>
        </Flex>
        <Button>
          Get
        </Button>
      </Flex>

      <Divider my={4}/>
      <Comments comment='Looks really good' likes='100' createdAt={'2d'} userName='johndoe' userAvatar="https://bit.ly/dan-abramov"/>
      <Comments comment='Hello Brother' likes='21' createdAt={'4d'} userName='Msmcadams' userAvatar="https://bit.ly/code-beast"/>
      <Comments comment='Amazing ' likes='43' createdAt={'14d'} userName='johndoe' userAvatar="https://bit.ly/sage-adebayo"/>
    </>
  )
}

export default PostPage
