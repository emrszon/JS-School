import { Controller, Post, Body, Get, Param, UseGuards  } from '@nestjs/common';
import { BooksService } from './books.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAllBooks() {
        const books = await  this.booksService.getBooks();
        return books;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getBook(@Param('id') bookId: string) {
        return this.booksService.getSingleBook(bookId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('cities/:city')
    getBookbyCity(@Param('city') bookCity: string) {
        return this.booksService.getBooksByCity(bookCity);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('formats/:format')
    getBookbyFormat(@Param('format') bookFormat: string) {
        return this.booksService.getBooksByFormat(bookFormat);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('authors/:author')
    getBookbyAuthor(@Param('author') bookAuthor: string[]) {
        return this.booksService.getBooksByAuthor(bookAuthor);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('categories/:category')
    getBooksbyCategories(@Param('category') bookCategory: string[]) {
        return this.booksService.getBooksByCategory(bookCategory);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('volumes/:title')
    getBooksbyTitle(@Param('title') bookTitle: string) {
        return this.booksService.getBooksByTitle(bookTitle);
    }
}
