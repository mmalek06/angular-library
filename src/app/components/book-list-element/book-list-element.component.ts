import { Component, Input, OnInit } from '@angular/core';

import Book from '@/app/models/Book';

@Component({
    selector: 'app-book-list-element',
    templateUrl: './book-list-element.component.html',
    styleUrls: ['./book-list-element.component.css']
})
export class BookListElementComponent implements OnInit {
    @Input() public book?: Book;

    constructor() { }

    ngOnInit(): void {
    }
}
