import { Controller, Post, Body, Get, Param, UseGuards, Patch, Query  } from '@nestjs/common';
import { BooksService } from './books.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAllBooks(@Query('page') page: number ) {
        const books = await  this.booksService.getBooks(page);
        return books;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async  getBook(@Param('id') bookId: string) {
        return this.booksService.getSingleBook(bookId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('cities/:city')
    async getBookbyCity(@Param('city') bookCity: string) {
        return await this.booksService.getBooksByCity(bookCity);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('formats/:format')
    async getBookbyFormat(@Param('format') bookFormat: string) {
        return await this.booksService.getBooksByFormat(bookFormat);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('authors/:author')
    async getBookbyAuthor(@Param('author') bookAuthor: string[]) {
        return await this.booksService.getBooksByAuthor(bookAuthor);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('categories/:category')
    async getBooksbyCategories(@Param('category') bookCategory: string[]) {
        return await this.booksService.getBooksByCategory(bookCategory);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('volumes/:title')
    async getBooksbyTitle(@Param('title') bookTitle: string) {
        return await this.booksService.getBooksByTitle(bookTitle);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('book/:id')
    async lendbook(@Param('id') bookId: string) {
        return await this.booksService.lendBook(bookId);
    }
}
