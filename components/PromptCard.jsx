'use client'

import Image from "next/image"
import tickSrc from '../public/assets/icons/tick.svg'
import copySrc from '../public/assets/icons/copy.svg'
import { useState } from "react"
import { useRouter } from "next/navigation"

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const [copied, setCopied] = useState('')
  const router = useRouter()

  const handleCopy = ()=>{
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(()=>setCopied(''),3000)
  }
  return (
    <div className="prompt_card" >
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer " >
          <Image 
          src={post?.creator?.image || copySrc }
          alt='user_image'
          width={40}
          height={40}
          className="rounded-full object-contain"/>

          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900" >{post?.creator?.username || '12'}</h3>
            <p className="text-sm text-gray-500">{post?.creator?.email || null}</p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy} >
          <Image src={copied ===post.prompt ? tickSrc : copySrc} 
          width={12} height={12} alt="copy"
          />
        </div>
      </div> 
      <p className="my-4 text-sm text-gray-700" >{post.prompt}</p>
      <p className="text-sm blue_gradient cursor-pointer"  onClick={()=>handleTagClick && handleTagClick(post.tag)} >{post.tag}</p>

      <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3" >
        <p className="text-sm green_gradient cursor-pointer "
        onClick={handleEdit}
        > Edit </p>
        <p className="text-sm orange_gradient cursor-pointer "
        onClick={handleDelete}
        > Delete </p>
      </div>
      </div>
  )
}

export default PromptCard