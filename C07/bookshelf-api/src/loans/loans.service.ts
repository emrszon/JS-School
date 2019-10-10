import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/user.model';
import { BooksService } from '../books/books.service';
import { Loan } from './loan.model';

@Injectable()
export class LoansService {

    constructor(@InjectModel('Loan') private readonly loanModel: Model<Loan>, private readonly booksService: BooksService) {}

    async insertProduct(user: User, bookId: string, duration: number, realizationDate: string) {
        const book = await this.booksService.getSingleBook(bookId);
        const bookUnique =  book[0];
        if (this.loanModel.findOne({book: bookUnique})) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This book cannot be borrowed',
              }, 403);
        }
        const newLoan =  await new this.loanModel({
            username: user.username,
            book: bookUnique,
            duration,
            realizationDate});
        const result = await newLoan.save();
        return result;
    }

    async getLoansByUser(use: User) {
        const book = await this.loanModel.find({username: use.username});
        if (book.length === 0) {
            throw new NotFoundException('This user don\'t have loans');
            }
        return book;
    }
}
