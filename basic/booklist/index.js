//book list class
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

//UI class
class UI{
    static displayBook(){
       const books = Store.getBooks();
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book){
        var list = document.querySelector('#book-list');
        var row = document.createElement('tr');
        const value = 
        `
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.isbn}</td>
              <td><a href = "#" class="btn btn-danger btn-sm delete">X</a></td> 
        `;
        row.innerHTML=value;
        list.appendChild(row);
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    static massage(msg,className){
        let div = document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(msg));
        let container = document.querySelector('.container');
        let form= document.querySelector('#book-form');
        container.insertBefore(div,form);
        setTimeout(()=>document.querySelector('.alert').remove(),3000);
    }
    static clearField(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
    }
}

//local Storage
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books')===null){
             books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();
    
        books.forEach((book, index) => {
          if(book.isbn === isbn) {
            books.splice(index, 1);
          }
        });
    
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//Display Book        
document.addEventListener('DOMContentLoaded',UI.displayBook);

// Add Book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
        e.preventDefault();
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let isbn = document.querySelector('#isbn').value;

        if(title==='' || author==='' || isbn === ''){
            UI.massage('plase Enter Mendentory Field','danger');
        }else{
        //InstattiniTE book
        const book = new Book(title,author,isbn);
        UI.addBookToList(book);
        //add book to store
        Store.addBook(book);
        //show sucesss msg
        UI.massage('Congartss.. Book Aded SucsessFully','success');
        //clear field
        UI.clearField();
}});

// Delete Book
    document.querySelector('#book-list').addEventListener('click',(e)=>{
        UI.deleteBook(e.target);
     

// Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

// Show success message
    UI.massage('Book Removed', 'warning');
    });
