import { Injectable } from '@nestjs/common';
import { Book } from './books.interface';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    return this.books.find((book) => book.id == id);
  }

  create(book: Book): Book {
    const newBook = { ...book, id: this.books.length + 1 };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, update: Book): Book {
    const index = this.books.findIndex((book) => book.id == id);
    if (index === -1) {
      throw new Error(`Book with ID ${id} not found`);
    }
    this.books[index] = { ...update, id };
    return this.books[index];
  }

  delete(id: number): void {
    const index = this.books.findIndex((book) => book.id == id);
    if (index === -1) {
      throw new Error(`Book with ID ${id} not found`);
    }
    this.books.splice(index, 1);
  }
}
