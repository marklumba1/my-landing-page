import fetchUtil from "@/app/_lib/fetchUtil"
import type { BlogPost } from "../page"
import Link from "next/link"

export default async function BlogPost({params}: {
    params: Promise<{
        blogId: string
    }>
}){
    const {blogId} = await params
    const blog = await fetchUtil<BlogPost>(`https://jsonplaceholder.typicode.com/posts/${blogId}`)

    return (
        <div>
             <p>{blog.body}</p>
             <Link href={"/blog"}>Back</Link>
        </div>
    )
}