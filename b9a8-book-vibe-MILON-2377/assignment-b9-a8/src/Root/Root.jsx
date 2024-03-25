import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import React, { useState } from "react";

export const bookDetailsContext = React.createContext();

const Root = () => {
    const [bookDetails, setBookDetails] = useState();
    // console.log(bookDetails)
    return (
        <div>
            <Nav></Nav>
            <bookDetailsContext.Provider value={{setBookDetails, bookDetails}}>
                <Outlet></Outlet>
            </bookDetailsContext.Provider>
        </div>
    );
};

export default Root;