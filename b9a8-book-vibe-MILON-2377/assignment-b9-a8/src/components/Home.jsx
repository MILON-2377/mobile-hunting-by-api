import { useLoaderData } from "react-router-dom";
import Books from "./Books";


const Home = () => {
    const books = useLoaderData();
    // console.log(books);
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                books.map(book => <Books key={book.id} book={book}></Books>)
            }
        </div>
    );
};

export default Home;