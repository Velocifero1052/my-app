import Book from "./Book";

function BookList(props){

    return (
        <section className={"booklist"}>
            {props.books.map(book =>
                <Book {...book} />)
            }
        </section>
    );
}

export default BookList;
