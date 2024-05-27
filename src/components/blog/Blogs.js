import BlogCard from "./BlogCard";

const blogs = [
    {
        image: 'https://example.com/blog1.jpg',
        imageTitle: 'Blog 1 Image',
        title: 'Blog 1',
        description: 'This is the first blog.',
        link: 'https://example.com/blog1',
    },
    {
        image: 'https://example.com/blog2.jpg',
        imageTitle: 'Blog 2 Image',
        title: 'Blog 2',
        description: 'This is the second blog.',
        link: 'https://example.com/blog2',
    },
    {
        image: 'https://example.com/blog3.jpg',
        imageTitle: 'Blog 3 Image',
        title: 'Blog 3',
        description: 'This is the third blog.',
        link: 'https://example.com/blog3',
    },
    // Add more blogs as needed
];
function Blogs(){
    return (
        <div>
            <h1>Blogs</h1>
            <div>
                <h2>Subscribe to my Newletter</h2>
                <form>
                    <input type="email" placeholder="Your Email"/>
                    <button type="submit">Submit</button>
                    <p>You won't receive any spam!✌️</p>

                </form>

            </div>
            {blogs.map((blog, index) => (
                <BlogCard 
                key={index}
                image={blog.image}
                imageTitle={blog.imageTitle}
                title={blog.title} 
                description={blog.description} 
                link={blog.link}
                />
            ))}

        </div>
    )
}
export default Blogs;