import React from 'react'
import { Button,Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div>
      <Link to={'/shyam1'}>
        <Flex w={'full'} justifyContent={"center"}>
            <Button mx={"auto"}>Visit Profile Page</Button>
        </Flex>
      </Link>
    </div>
  )
}

export default HomePage
