import Book from "./Book";

function BookList(){
    return(
        <section className={"booklist"}>
            <Book image={'./so_good.jpg'} title={"So good they can't ignore you"} author={"Cal Newport"}/>
            <Book image={'./gift_of_done.jpg'} title={"Finish - give yourself the gift of done"} author={"Jon Acuff"}/>
            <Book image={'./cracking.jpg'} title={'Cracking the coding interview'} author={"Gayle Laakman Mcdowell"}/>
        </section>
    );
}

export default BookList;
