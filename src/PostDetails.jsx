import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

import Swal from 'sweetalert';
 



const PostDetails = () => {
    const { postId } = useParams()
    const { data: postDetails, isLoading, error } = useFetch(`https://my-json-server.typicode.com/abdo160996/blog-app/posts/${postId}`)
    
    const navigate = useNavigate()

    const deleteP = () => {

        Swal.fire({
            titleText: "Are you sure?",
            text: "You won't be able to revert this!",
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            allowOutsideClick: false,

        }).then((res) => {
            if (res.isConfirmed) {
                fetch(`https://my-json-server.typicode.com/abdo160996/blog-app/posts/${postId}`, {
                    method: "DELETE"
                }).then(() => {
                    Swal.fire({
                        title: 'Deleted!',
                    })
                    navigate('/')
                })
            }
        })
    }



    return (
        <div className="p-5 bg-slate-200 rounded-md">
            {isLoading && <div className="font-bold bg-purple text-center text-neutral-50">Data is loading</div>}
            {error && <div className="font-bold bg-red-500 text-center text-neutral-50">{error}</div>}
            {postDetails && (
                <article>
                    <h1 className="font-bold mb-3">{postDetails?.title}</h1>
                    <p className="bg-gray-100 p-2 rounded-md">{postDetails?.content}</p>
                    <button className='px-2 py-1 text-sm rounded-full bg-red-400 transition-colors hover:bg-red-700 text-white' onClick={deleteP}>DELETE</button>
                    <Link to={`/posts/edit/${postId}`} state={postDetails} className="bg-red-600 text-white">
                    Edit </Link>
                </article>

            )}

        </div>

    );
}

export default PostDetails
