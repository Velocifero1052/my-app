import Book from "./Book";

function BookList(){

    const firstBook = {
        image: './so_good.jpg',
        title : "So good they can't ignore you",
        author: "Cal Newport"
    }

    const secondBook = {
        image: './gift_of_done.jpg',
        title : "Finish - give yourself the gift of done",
        author: "Jon Acuff"
    }

    const thirdBook = {
        image: './cracking.jpg',
        title : "Cracking the coding interview",
        author: "Gayle Laakman Mcdowell"
    }

    return (
        <section className={"booklist"}>
            <Book image={firstBook.image} title={firstBook.title} author={firstBook.author}/>
            <Book image={secondBook.image} title={secondBook.title} author={secondBook.author}/>
            <Book image={thirdBook.image} title={thirdBook.title} author={thirdBook.author}/>
        </section>
    );
}

export default BookList;
