import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/user.model';
import { BooksService } from '../books/books.service';
import { Loan } from './loan.model';

@Injectable()
export class LoansService {

    constructor(@InjectModel('Loan') private readonly loanModel: Model<Loan>, private readonly booksService: BooksService) {}

    async insertProduct(user: string, bookId: string, duration: number, realizationDate: string) {
        if(duration=== 0){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'The duration of lend can\'t be 0',
              }, 403);
        }
        const book = await this.booksService.getSingleBook(bookId);
        const bookUnique =  book[0];
        console.log(bookUnique);
        if (bookUnique.copies<=0) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This book cannot be borrowed',
              }, 403);
        }
        this.booksService.lendBook(bookUnique.id);
        const newLoan =  await new this.loanModel({
            username: user,
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
