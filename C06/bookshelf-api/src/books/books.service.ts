import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
    private books: Book[] = [];

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book> ) {}

    async getBooks() {
        const result = await this.bookModel.find().exec();
        return result as Book[];
    }
    async getSingleBook(bookId: string) {
        if (bookId.length === 24) {
            const book = await this.bookModel.findById(bookId);
            if (!book) {
            throw new NotFoundException('This book don\'t exist');
            }
            return book;
        }
        if (bookId.length < 24 || bookId.length > 24) {
            const book = await this.bookModel.find({id: bookId});
            if (book.length === 0) {
                throw new NotFoundException('This book don\'t exist');
            }
            return book;
        }
    }
    async getBooksByCity(bookCity: string) {
        const book = await this.bookModel.find( {city: bookCity} );
        if (book.length === 0) {
            throw new NotFoundException('This city don\'t exist');
        }
        return book;
    }
    async getBooksByFormat(bookFormat: string) {
        const book = await this.bookModel.find({ format: bookFormat });
        if (book.length === 0) {
            throw new NotFoundException('This format don\'t exist');
        }
        return book;
    }
    async getBooksByAuthor(bookAuthor: string[]) {
        const book = await this.bookModel.find({ author: bookAuthor });
        if (book.length === 0) {
            throw new NotFoundException('This author don\'t exist');
        }
        return book;
    }
    async getBooksByCategory(bookCategory: string[]) {
        const book = await this.bookModel.find({ categories: bookCategory });
        if (book.length === 0) {
            throw new NotFoundException('This category don\'t exist');
        }
        return book;
    }
    async getBooksByTitle(bookTitle: string) {
        const book = await this.bookModel.find( {title: bookTitle} );
        if (book.length === 0) {
            throw new NotFoundException('This book don\'t exist');
        }
        return book;
    }
}
