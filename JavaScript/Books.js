var inp = document.getElementById("inp1");
var output = document.getElementById("parrError");


class Books
{
    constructor(bookName)
    {
        this.bookName = bookName;
    }

    getBook()
    {
        return this.bookName;
    }
}

var book1 = new Books("The beginner's guide to Engineering");
var books = [book1];

function addBooks()
{
    var newBook = new Books(inp.value);
    books.push(newBook);
}

function browseBooks()
{
    var flag = true;
    for(let counter = 0; counter < books.length; counter++)
    {
        if(inp.value.localeCompare(books[counter].getBook()))   //localCompare() returns 0 if the strings are equal and -1 if they are not equal
        {
            output.innerHTML = "Sorry this book does not exist";    
            flag = false;
            //link to the book page
            //window.location.href = "http://facebook.com";
        }
    }

    if(flag)
    {
        output.innerHTML = "this book exists";
    }
}