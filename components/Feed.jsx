'use client'

import { useEffect, useState } from "react"
import PromptCard from "./PromptCard"

const PromptCardList =({data, handleTagClick})=>{
return(
  <div className="mt-16 prompt_layout ">
    {data.map((post)=>(
      <PromptCard
      key={posts._id} post={post} handleTagClick={handleTagClick}
      />
    ))}
  </div>
)
}
const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchTerm = (e)=>{

  }
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const response = await fetch('/api/prompt')
      const data = await response.json()

      setPosts(date)
    }
    fetchPosts()
  },[])
  return (
    <section>
      <form action="" className="relative w-full flex-center">
        <input type="text" placeholder="Search for a tag or username" value={searchText} onChange={handleSearchTerm} required className="search_input peer" />
      </form>
      <PromptCardList data={posts} handleTagClick={()=>{}}/>
    </section>
  )
}

export default Feed