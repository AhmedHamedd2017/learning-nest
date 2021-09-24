import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats: {}[] = [];

  getList(): any {
    return [...this.cats];
  }

  addCat({ name, age }: { name: string; age: number }): boolean {
    this.cats.push({ name: name, age: age });
    return true;
  }
}
