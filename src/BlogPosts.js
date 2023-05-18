import { Link } from 'react-router-dom';
import img from './logo.svg'
const BlogPosts = ({ posts }) => {

    return (
        <div className="blog-posts">

            {posts.map((post) => (
                <div className='blog-post flex flex-col p-2 bg-neutral-100 mb-4 rounded-md hover:shadow-sm' key={post.id} >
                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold'>{post.title}</h3>
                        <img src={img} className='w-20' alt="" />
                       
                    </div>
                    <div className='flex'>
                        <span className='px-2 py-1 rounded-full transition-colors bg-lightPurple text-neutral-50 text-sm mr-1  hover:bg-darkPurple'>By {post.author}</span>
                        <Link to={`/posts/${post.id}`} className='px-2 py-1 rounded-full transition-colors bg-lightPurple text-neutral-50 text-sm hover:bg-darkPurple'>Read more</Link>
                    </div>
                </div>
            )


            )}
        </div>);
}

export default BlogPosts;