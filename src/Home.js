
import BlogPosts from './BlogPosts';
import useFetch from './useFetch';


const Home = () => {
    const {data:posts,isLoading,error,setData}= useFetch("https://my-json-server.typicode.com/abdo160996/blog-app/posts")
    const deletePost = (id) => {
        setData(posts.filter((post) => post.id !== id))
    }

   
    return (
        <div>
            {error && <div className="font-bold bg-red-500 text-center text-neutral-50">{error}</div>}
            {isLoading && <div>Data is Loading</div>}
            {posts && <BlogPosts posts={posts} deletePost={deletePost} />}
        </div>
    );

}

export default Home;
