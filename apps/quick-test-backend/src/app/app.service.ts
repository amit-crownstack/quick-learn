import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPing(): { status: string } {
    return { status: 'OK' };
  }
}
