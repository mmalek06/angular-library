import Author from './Author';

interface Book {
    isbn: string;
    title: string;
    authors: Author[];
    stock: number;
}

export default Book;
