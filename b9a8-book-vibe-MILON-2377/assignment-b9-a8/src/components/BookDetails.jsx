import { useContext, useState } from "react";
import { bookDetailsContext, listedBooksToWishList } from "../Root/Root";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { listedBooksId } from "../Utilities/listedBooks";

const BookDetails = () => {
  const { bookDetails } = useContext(bookDetailsContext);
  const {setListBooks, listBooks} = useContext(listedBooksToWishList); 
//   const [read, setRead] = useState(true);
  const [toastContainer, setToastContainer] = useState([]);

  const notifyMe = () => {
        listedBooksId(bookId);
        if(!toastContainer.includes('read')){
            toast('Read is marked!!');
            const readToast = [...toastContainer, 'read'];
            setToastContainer(readToast);
        }else{
            toast('You have already read this content!!!')
        }
    }   

  const wishListToast = () => {
    if(toastContainer.includes('read')){
        toast('Opps!! You read it, You can not addedt it to the wish list!!!')
    }else if(toastContainer.includes('wish')){
        toast('This content alread added to the wish list!!')
    }
    else{
        
        const listBook = [...listBooks, bookDetails];
        setListBooks(listBook);
        const wishTost = [...toastContainer, 'wish'];
        setToastContainer(wishTost);
        toast('Added to the wish list')
    }
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
            <button onClick={notifyMe} className="btn border">Read</button>
            <button onClick={wishListToast} className="btn bg-blue-800 text-white">Wishslist</button>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;