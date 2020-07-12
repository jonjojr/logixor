import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'welcome to junimation. soon, i\'ll be able to tell you a whole lot more. stick around for project "journey". "You can use logic to justify almost anything. That\'s its power. And its flaw." - Capt. Janeway';
  }
}
