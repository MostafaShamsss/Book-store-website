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


// function addBooks()
// {
//     books.push(new Books(inp.value));
// }

function browseBooks()
{
    var flag = true;
    for(let counter = 0; counter < books.length; counter++)
    {
        if(inp.value.localeCompare(books[counter].getBook()))   //localCompare() returns 0 if the strings are equal and -1 if they are not equal
        {
            output.innerHTML = "Sorry this book does not exist";    
            flag = false;
        }
    }

    if(flag)
    {
        output.innerHTML = "this book exists";
        //link to the book results page
        window.open("BookResults.html",'_blank');
    }
}