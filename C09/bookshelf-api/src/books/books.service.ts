import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
    private books: Book[] = [];
    constructor(@InjectModel('Book') private readonly bookModel: Model<Book> ) {}

    async getBooks(query: any) {

        const currentPage = query.page === undefined ?  1 : query.page;
        const limit = query.limit === undefined ? 10 : query.limit;

        console.log(currentPage , limit);
        console.log(new RegExp(query.search, 'i'));
        let result;

        if (query.search && (query.format || query.city)) {
            result = await this.bookModel.aggregate([]).facet({
                data: [ {$match: {$and : [{$or: [{format: query.format}, { city: query.city}]}, {title: { $regex: new RegExp(query.search), $options: 'i'} }]}},
                {$skip: ( limit * (currentPage - 1))}, {$limit: limit }],
                pagination: [ {$match: {$or: [{format: query.format}, { city: query.city}]}}, {$count: 'total' }],
            });
            } else if (query.search) {
        result = await this.bookModel.aggregate([]).facet({
                data: [ {$match: {title: { $regex: new RegExp(query.search), $options: 'i'} }},
                {$skip: ( limit  * (currentPage - 1))}, {$limit: limit }],
                pagination: [ {$match: {title: { $regex: new RegExp(query.search), $options: 'i'} }}, {$count: 'total' }],
            });
        } else if (query.format || query.city) {
            result = await this.bookModel.aggregate([]).facet({
                data: [ {$match: {$or: [{format: query.format}, { city: query.city}]}},
                {$skip: ( limit  * (currentPage - 1))}, {$limit: limit }],
                pagination: [ {$match: {$or: [{format: query.format}, { city: query.city}]}}, {$count: 'total' }],
            });
        } else {
            result = await this.bookModel.aggregate([]).facet({
                data: [ {$skip: ( limit  * (currentPage - 1))}, {$limit: limit}],
                pagination: [ {$count: 'total' }],
            });
        }
           // console.log(result[0].pagination);
        if (result.length === 0) {
            throw new NotFoundException('This page don\'t exist');
        }

        return {data: result[0].data as Book[], totalResults: result[0].pagination[0].total,
            limit: limit, page: currentPage, maxPages: Math.ceil(result[0].pagination[0].total / limit) };
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
    async lendBook(bookId: string) {
        if (bookId.length < 24 || bookId.length > 24) {
            const bookTest = await this.bookModel.find({id: bookId});
            if (bookTest.length === 0) {
                throw new NotFoundException('This book don\'t exist');
            }
            bookId = bookTest[0]._id;
            const book = await this.bookModel.findById(bookId);
            book.copies--;
            book.save();
            return book as Book[];
        }
    }

    async getBooksByCity(bookCity: string) {
        const book = await this.bookModel.find( {city: bookCity} );
        if (book.length === 0) {
            throw new NotFoundException('This city don\'t exist');
        }
        return book as Book[];
    }
    async getBooksByFormat(bookFormat: string) {
        const book = await this.bookModel.find({ format: bookFormat });
        if (book.length === 0) {
            throw new NotFoundException('This format don\'t exist');
        }
        return book as Book[];
    }
    async getBooksByAuthor(bookAuthor: string[]) {
        const book = await this.bookModel.find({ author: bookAuthor });
        if (book.length === 0) {
            throw new NotFoundException('This author don\'t exist');
        }
        return book as Book[];
    }
    async getBooksByCategory(bookCategory: string[]) {
        const book = await this.bookModel.find({ categories: bookCategory });
        if (book.length === 0) {
            throw new NotFoundException('This category don\'t exist');
        }
        return book as Book[];
    }
    async getBooksByTitle(bookTitle: string) {
        const book = await this.bookModel.find( {title: bookTitle} );
        if (book.length === 0) {
            throw new NotFoundException('This book don\'t exist');
        }
        return book as Book[];
    }

}
