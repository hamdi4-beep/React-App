import useFetch from './useFetch';

function Home() {
    const {data: blogs, isPending} = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            <div className="content">
                {isPending && <div>Loading...</div>}
                {blogs && blogs.map(function(blog) {
                    return (
                        <div className="blog-preview" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>Written By {blog.author}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;