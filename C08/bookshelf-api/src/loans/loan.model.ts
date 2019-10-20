import * as mongoose from 'mongoose';
import { Book, BookSchema } from '../books/book.model';

export const LoanSchema = new mongoose.Schema({
    username: { type: String, required: true},
    book: { type: BookSchema, required: true},
    duration: { type: Date, required: true},
    realizationDate: { type: Date, required: true},
});

export interface Loan {

        username: string;
        Book: Book;
        duration: Date;
        realizationDate: Date;
}
