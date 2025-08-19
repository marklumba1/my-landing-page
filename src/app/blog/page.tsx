import fetchUtil from "@/app/_lib/fetchUtil";
import Link from "next/link";

export interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Blog() {
  const blogs = await fetchUtil<BlogPost[]>(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
         <p>{blog.title}</p>
         <Link href={`blog/${blog.id}`}>View Post</Link>
        </div>
       
      ))}
    </div>
  );
}
