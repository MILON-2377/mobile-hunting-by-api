import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import React, { useState } from "react";

export const bookDetailsContext = React.createContext();
export const listedBooksToWishList = React.createContext();
const Root = () => {
    const [bookDetails, setBookDetails] = useState();
    const [listBooks, setListBooks] = useState();
    // console.log(bookDetails)
    return (
        <div>
            <Nav></Nav>
            <bookDetailsContext.Provider value={{setBookDetails, bookDetails}}>
                <listedBooksToWishList.Provider value={{setListBooks, listBooks}}>
                    <Outlet></Outlet>
                </listedBooksToWishList.Provider>
            </bookDetailsContext.Provider>
        </div>
    );
};

export default Root;