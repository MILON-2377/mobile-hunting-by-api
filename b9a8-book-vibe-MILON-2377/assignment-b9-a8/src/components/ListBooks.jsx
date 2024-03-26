import { useContext, useState } from "react";
import { listedBooksToWishList } from "../Root/Root";
import ListBook from "./ListBook";


const ListBooks = () => {

    const [clickBtn, setClickBtn] = useState();

    const { listBooks } = useContext(listedBooksToWishList);
//   console.log(listBooks);
    console.log(clickBtn);


  return (
    <div>
        <div className="flex">
            <button onClick={() => setClickBtn(1)} className={`${clickBtn === 1 ? 'border-b-0 rounded-t-md font-medium' : 'border border-t-0 border-l-0 border-r-0'} px-4 py-3 border-2`}>Read Books</button>
            <button onClick={() => setClickBtn(2)} className={`${clickBtn === 2 ? 'border-b-0 rounded-t-md font-medium' : 'border border-t-0 border-l-0 border-r-0'} px-4 py-3 border-2`}>Wishlist Books</button>
            <div className="border-2 flex-1 border-t-0 border-l-0 border-r-0"></div>
        </div>
        {
            listBooks.map(books => <ListBook key={books.id} book ={books}></ListBook>)
        }
    </div>
  );
};

export default ListBooks;
