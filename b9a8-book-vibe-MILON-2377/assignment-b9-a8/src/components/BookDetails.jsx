import { useContext, useState } from "react";
import { bookDetailsContext } from "../Root/Root";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { listedBooksId } from "../Utilities/listedBooks";

const BookDetails = () => {
  const { bookDetails } = useContext(bookDetailsContext);
  const [read, setRead] = useState(false);

  const notifyMe = () => {
    toast('Added to the Read List');
    listedBooksId(bookId);
    }   

    if(read){
        notifyMe();
    }
   

  const wishListToast = () => {
    toast('Added to the wishtlist');
    listedBooksId(bookId);
  }

  const {
    bookName,
    author,
    category,
    review,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
    image,
    rating,
    bookId
  } = bookDetails;

  return (
    <div className="flex gap-6">
      <div className="card w-[45%] bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card flex-1 bg-base-100 shadow-xl">
        <h2>{bookName}</h2>
        <p>By: {author}</p>
        <p>{category}</p>
        <p>{review}</p>
        <div>
          <p>{tags[0]}</p>
          <p>{tags[1]}</p>
          <p>{tags[2]}</p>
        </div>

        <div className="flex items-center gap-28 text-xl font-medium">
          <div>
            <p>Number Of Pages: </p>
            <p>Publisher: </p>
            <p>Year of Publishing: </p>
            <p>Rating: </p>
          </div>
          <div>
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>

        <div className="flex gap-5">
            <button onClick={() => setRead(true)} className="btn border">Read</button>
            <button onClick={wishListToast} className="btn bg-blue-800 text-white">Wishslist</button>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;