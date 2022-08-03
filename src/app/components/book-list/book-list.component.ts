import { Component, OnInit } from '@angular/core';

import Book from '@/app/models/Book';
import { BookListService } from '@/app/services/book-list.service';
import { fadeIn, fadeOut } from '@/app/animations';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],  
    animations: [fadeIn, fadeOut]
})
export class BookListComponent implements OnInit {
    public isLoading: boolean = true;
    public books: Book[] = [];

    constructor(private _booksService: BookListService) { }

    ngOnInit(): void {
        this._booksService.getBooks().subscribe(list => {
            this.isLoading = false;
            this.books = list;
        });
    }
}
