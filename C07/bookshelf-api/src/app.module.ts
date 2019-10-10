import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [AuthModule, BooksModule, MongooseModule.forRoot('mongodb://localhost/booksData'),  UsersModule, LoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
