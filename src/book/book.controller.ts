import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { bookService } from "./book.service";
import { book } from "./data/book.dto";

@Controller()

export class BookController{
    constructor(private bookService : bookService){

    }
@Get('/findall')
getAllBook():book[]{
    return this.bookService.findAllBooks()
}
@Put('/update')
updateBook(@Body()book:book):string{
    return this.bookService.updateBookService(book);
}
@Delete('/delete')
deleteBook(@Param("id")bookId:string):string{
    return this.bookService.deleteBookService(bookId);
}

@Post('/add')
addBook(@Body()book:book):string{
    return this.bookService.addBookService(book);
}



}