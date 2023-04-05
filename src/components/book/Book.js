import Title from "./Title";
import BookImage from "./BookImage";
import Author from "./Author";

function Book(props){
    return (
        <article className={"book"}>
            <BookImage image={props.image}/>
            <Title title={props.title}/>
            <Author author={props.author}/>
        </article>);
}

export default Book;