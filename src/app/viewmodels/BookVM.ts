import Author from '@/models/Author';
import Book from '@/models/Book';

export default class BookVM implements Book {
    isbn: string;
    title: string;
    authors: Author[];
    stock: number;

    constructor(book: Book) {
        this.isbn = book.isbn;
        this.title = book.title;
        this.authors = book.authors;
        this.stock = book.stock;
    }

    get isBorrowable(): boolean {
        return this.stock > 0;
    }
}