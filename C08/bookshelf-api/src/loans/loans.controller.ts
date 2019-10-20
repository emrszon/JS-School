import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
    constructor(private readonly loansService: LoansService) {}

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async addLoan(
        @Body('username') username: string,
        @Body('id') id: string,
        @Body('duration') duration: Date,
    ) {
        const realizationDate = new Date();
        const loanGenerated = await this.loansService.insertProduct(username, id, duration, realizationDate);
        return { loanGenerated };
    }

    @UseGuards(AuthGuard('jwt'))
  @Get('personalLoans')
  getProfile(@Request() req) {
    return this.loansService.getLoansByUser(req.user.username);
  }
}
