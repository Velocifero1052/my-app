import Title from "./Title";
import BookImage from "./BookImage";
import Author from "./Author";

function Book(){
    return (
        <article className={"book"}>
            <BookImage />
            <Title />
            <Author />
        </article>);
}

export default Book;