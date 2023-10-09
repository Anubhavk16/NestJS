
import { book } from "./data/book.dto";
import { Injectable } from "@nestjs/common/decorators/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class bookService{
    public books : book[]=[]

    addBookService(book:book) : string{
        book.id=uuidv4()
        this.books.push(book);
        return "Book has been succesfully added";

        
    }
    updateBookService(book:book) : any {
        let index=this.books.findIndex((currentBook)=>{
            return currentBook.id==book.id;

        });
        this.books[index]=book;
        return `book has been succesfully inserted`


    }
    
    deleteBookService(bookId:string): any {
        this.books=this.books.filter((book)=>{
            return book.id!==bookId
        })
        return "Book has  been deleted";

    }
    findAllBooks() :book[] {
        return this.books;
    }
}