

const getListedBook = () => {
    const getBooksId = localStorage.getItem('listedBook');
    if(getBooksId){
        return JSON.parse(getBooksId);
    }

    return [];
}

const listedBooksId = (bookId) => {
    const booksIdList = getListedBook();
    if(!booksIdList.includes(bookId)){
        booksIdList.push(bookId);
        localStorage.setItem('listedBook', JSON.stringify(booksIdList));
    }
}

export {getListedBook, listedBooksId}