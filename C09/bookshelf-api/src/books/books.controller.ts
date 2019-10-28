import { Controller,  Get, Param, UseGuards, Patch, Query  } from '@nestjs/common';
import { BooksService } from './books.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAllBooks(@Query() query ) {
        const books = await  this.booksService.getBooks(query);
        return books;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async  getBook(@Param('id') bookId: string) {
        return this.booksService.getSingleBook(bookId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('book/:id')
    async lendbook(@Param('id') bookId: string) {
        return await this.booksService.lendBook(bookId);
    }
}
