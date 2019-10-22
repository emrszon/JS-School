import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LoanSchema } from './loan.model';
import { BooksModule } from '../books/books.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, BooksModule, MongooseModule.forFeature([{name: 'Loan', schema: LoanSchema}])],
  controllers: [LoansController],
  providers: [ LoansService],
})
export class LoansModule {}
