import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

const UserPage = () => {
  return (
    <>
      <UserHeader/>
      <UserPost likes={1200} replies={481} postImg ={'/post1.png'} postTitle={"Let's talk about threads."}/>
      <UserPost likes={451} replies={251} postImg ={'/post2.png'} postTitle={"Nice Tutorial"}/>
      <UserPost likes={348} replies={345} postImg ={'/post3.png'} postTitle={"This is the most weird Guy"}/>    
      <UserPost likes={121} replies={21} postTitle={"This is my First thread."}/>    
    </>
    
  )
}

export default UserPage
