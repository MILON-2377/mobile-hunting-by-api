import { useContext } from "react";
import { listedBooksToWishList } from "../Root/Root";

const ListBooks = () => {
    const {listBooks} = useContext(listedBooksToWishList);
    console.log(listBooks);
    return (
        <div>
            
        </div>
    );
};

export default ListBooks;