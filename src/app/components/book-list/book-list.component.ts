import { Component, OnInit } from '@angular/core';

import { BookListService } from '@/app/services/book-list.service';
import { fadeInOut, fadeOutIn } from '@/app/animations';
import BookVM from '@/app/viewmodels/BookVM';
import Book from '@/app/models/Book';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],  
    animations: [fadeInOut(), fadeOutIn()]
})
export class BookListComponent implements OnInit {
    public isLoading: boolean = true;
    public hasBooksMatchingSearchCriteria: boolean = true;
    public books: BookVM[] = [];

    constructor(private _booksService: BookListService) { }

    ngOnInit(): void {
        this._listBooks();
    }

    onBookNameSearchRequested(name: string): void {
        this.isLoading = true;
        this.hasBooksMatchingSearchCriteria = false;

        if (name.length == 0) {
            this._listBooks();
        }
        else {
            this._booksService
                .findBooksByName(name)
                .subscribe({
                    next: b => this._onBooksLoaded(b),
                    error: _ => this._onBooksLoaded([])
                });
        }
    }

    onAuthorNameSearchRequested(name: string): void {
        this.isLoading = true;
        this.hasBooksMatchingSearchCriteria = false;

        if (name.length == 0) {
            this._listBooks();
        }
        else {
            this._booksService
                .findBooksByAuthor(name)
                .subscribe({
                    next: b => this._onBooksLoaded(b),
                    error: _ => this._onBooksLoaded([])
                });
        }
    }

    private _listBooks() {
        this._booksService
            .getBooks()
            .subscribe({
                next: b => this._onBooksLoaded(b),
                error: _ => this._onBooksLoaded([])
            });
    }

    private _onBooksLoaded(books: Book[]) {
        this.isLoading = false;
        this.hasBooksMatchingSearchCriteria = books.length > 0;
        this.books = books.map(b => new BookVM(b));
    }
}
