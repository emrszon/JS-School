import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
    private books: Book[] = [];
    constructor(@InjectModel('Book') private readonly bookModel: Model<Book> ) {}

    async getBooks(page: number = 1) {
        const result = await this.bookModel.find().skip( 10 * (page - 1)).limit(10).exec();
        const totalResult = await this.bookModel.find();
        if (result.length === 0) {
            throw new NotFoundException('This page don\'t exist');
        }

        return {data: result as Book[], totalResults: totalResult.length, limit: 10, page, maxPages: totalResult.length / 10 };
    }

    async getBooksFiltered(query: any) {
        console.log(query);
        console.log(new RegExp(query.search, 'i'));
        let result;
        let totalResult = 0;

        if (query.search && (query.format || query.city)) {
            result = await this.bookModel.aggregate([]).facet({
                data: [ {$match: {$and : [{$or: [{format: query.format}, { city: query.city}]}, {title: { $regex: new RegExp(query.search), $options: 'i'} }]}},
                {$skip: ( 10 * (query.page - 1))}, {$limit: (10)}],
                pagination: [ {$match: {$or: [{format: query.format}, { city: query.city}]}}, {$count: 'total' }],
            });
            //     totalResult += await this.bookModel.countDocuments();
            } else {
        result = await this.bookModel.aggregate([]).facet({
                data: [ {$match: {$or: [{format: query.format}, { city: query.city}]}}, {$skip: ( 10 * (query.page - 1))}, {$limit: (10)}],
                pagination: [ {$match: {$or: [{format: query.format}, { city: query.city}]}}, {$count: 'total' }],
            });
        }
            //console.log(result);
    //     if (query.format) {
    //     result.push( await this.bookModel.find({format: query.format}).skip( 10 * (query.page - 1)).limit(10));
    //     totalResult += await this.bookModel.countDocuments({format: query.format});
    // }
    //     if (query.city) {
    //     result.push(await this.bookModel.find({city: query.city}).skip( 10 * (query.page - 1)).limit(10));
    //     totalResult += await this.bookModel.countDocuments({city: query.city});
    // }
    //     
        if (result.length === 0) {
            throw new NotFoundException('This page don\'t exist');
        }

        return {data: result as Book[], totalResults: totalResult, limit: 10, page: query.page, maxPages: Math.ceil(totalResult/10) };
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
