'use client'

import Profile from "@/components/Profile"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const MyProfile = () => {
  const router = useRouter()
  const [posts, setPosts] = useState([])
    useEffect(()=>{
    const fetchPosts = async ()=>{
        //fake user id
      const response = await fetch(`/api/users/${'12'}/posts`)
      const data = await response.json()

      setPosts(date)
    }
    fetchPosts()
  },[])

    const handleEdit =(post)=>{
      router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete = async (post)=>{
      const hasConfirmed = confirm('Are you sure?')

      if(hasConfirmed){
        try {
          await fetch(`/api/prompt/${post._id.toString()}`,{
            method:'DELETE'
          })
          const filteredPosts = posts.filter((p)=> p._id !== post._id)
          setPosts(filteredPosts)
        } catch (error) {
          
        }
      }
    }
    
  return (
    <Profile name='My' desc='Welcome' data={[posts]} handleEdit={handleEdit} handleDelete={handleDelete}/>
  )
}

export default MyProfile 