import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/user.model';
import { BooksService } from '../books/books.service';
import { Loan } from './loan.model';

@Injectable()
export class LoansService {

    constructor(@InjectModel('Loan') private readonly loanModel: Model<Loan>, private readonly booksService: BooksService) {}

    async insertProduct(user: string, bookId: string, duration: Date, realizationDate: Date) {
        
        const book = await this.booksService.getSingleBook(bookId);
        const bookUnique =  book[0];
        const loans = await this.loanModel.find({username: user});
        for(let i=0;i<loans.length;i++){
            if(loans[i].book.id===bookUnique.id){
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'This book cannot be borrowed for this user',
                  }, 403);
            }
        }
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

    async getLoansByUser(use: string) {
        const loans = await this.loanModel.find({username: use});
        if (loans.length === 0) {
            throw new NotFoundException('This user don\'t have loans');
            }
        return loans;
    }
}
