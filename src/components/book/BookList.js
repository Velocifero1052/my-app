import Book from "./Book";
import EventExamples from "./EventExamples";

function BookList(props){

    return (
        <>
            <h2>Amazon best sellers</h2>
            <section className={"booklist"}>
                <EventExamples />
                {props.books.map((book, index) =>
                    <Book title={book.title} image={book.image}
                          author={book.author} key={book.id}
                          number={index}
                    />)
                }
            </section>
        </>
    );
}

export default BookList;
