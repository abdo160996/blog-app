import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const navigate = useNavigate()

    const addBlog = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const dataObj = { title, content, author }
        setTimeout(() => {
            fetch('http://localhost:8000/posts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataObj)
            }).then(() => {
                navigate('/')
                setIsLoading(false)
            })
        }, 1000);


    }

    return (
        <div className="create">
            <h1>Create Post</h1>
            <form className="mt-3 w-full" onSubmit={addBlog}>
                <label className="block">Blog title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" required placeholder="ex: How to learn javascript?" className="mt-2 border rounded-md px-1 py-2 mb-6 w-full" />

                <label className="block ">Blog Content:</label>
                <textarea required value={content} onChange={(e) => setContent(e.target.value)} name="content" className="border rounded-md px-1 py-2 w-full mt-2 mb-6" />

                <label className="block">Blog Author:</label>
                <select className="w-full bg-gray-100 p-2 rounded-sm border" value={author} onChange={(e) => setAuthor(e.target.value)} name="author" >
                    <option value={'abdo'} className="font-['Poppins']  text-darkPurple">bee</option>
                    <option value={'john'}>john</option>
                    <option value={'mario'}>mario</option>
                </select>
                {isLoading && <button disabled className="px-2 py-1 bg-indigo-600 text-white rounded-md mt-4">Loading...</button>}
                {!isLoading && <button className="px-2 py-1 bg-lightPurple hover:bg-darkPurple transition-colors text-white rounded-md mt-4">Add blog</button>}

            </form>
        </div>


    );
}

export default Create;
