import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';

export type User = any;

@Injectable()
export class UsersService {
  private  users: User[] = [];

  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {
  }

  async findUser(username: string): Promise<User | undefined> {
   const user = await this.UserModel.findOne({ username });
   if (!user) {
       throw new NotFoundException('This user don\'t exist');
   }
   return user;
  }

  async register(username: string, password: string) {
    const userId = mongoose.Types.ObjectId();
    const newLoan = this.UserModel({ userId, username, password});
    const result = await newLoan.save();
    return result;
  }
}
