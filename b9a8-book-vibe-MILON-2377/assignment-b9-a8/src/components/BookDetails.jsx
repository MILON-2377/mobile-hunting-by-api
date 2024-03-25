import { useContext } from "react";
import { bookDetailsContext } from "../Root/Root";

const BookDetails = () => {
  const { bookDetails } = useContext(bookDetailsContext);

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
  } = bookDetails;

  return (
    <div className="flex gap-6">
      <div className="card w-[45%] bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
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
            <button className="btn border">Read</button>
            <button className="btn bg-blue-800 text-white">Wishslist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;