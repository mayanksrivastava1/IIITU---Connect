import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'
import { useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import useShowToast from '../hooks/useShowToast'
import { Flex, Spinner } from '@chakra-ui/react'


const UserPage = () => {
  const [user,setUser] = useState(null)
  const { username } = useParams()
  const [loading,setLoading] = useState(true)
  const showToast = useShowToast()
  useEffect(()=>{
    const getUser = async ()=>{
      try {
        const res = await fetch(`/api/users/profile/${username}`)
        const data = await res.json();
        if(data.error){
            showToast("Error",data.error,"error")
            return;
        }
        setUser(data)
        console.log(data)
      } catch (error) {
        showToast("Error",error,"error")
      }finally{
        setLoading(false)
      }
      
    }

    getUser();
  },[username,showToast]);

  if(!user && loading){
    return (
      <Flex justifyContent = {"center"}>
      <Spinner size={'xl'}/>
      </Flex>
    )
  }

  if(!user && !loading) return <h1>User Not Found</h1>;

  return (
    <>
      <UserHeader user={user} />
      <UserPost likes={1200} replies={481} postImg ={'/post1.png'} postTitle={"Let's talk about threads."}/>
      <UserPost likes={451} replies={251} postImg ={'/post2.png'} postTitle={"Nice Tutorial"}/>
      <UserPost likes={348} replies={345} postImg ={'/post3.png'} postTitle={"This is the most weird Guy"}/>    
      <UserPost likes={121} replies={21} postTitle={"This is my First thread."}/>    
    </>
    
  )
}

export default UserPage
