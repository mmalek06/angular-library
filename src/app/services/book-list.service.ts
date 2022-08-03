import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import Book from '@/app/models/Book';

import { environment } from '@/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BookListService {
    constructor(
        private _http: HttpClient
    ) { }

    getBooks(): Observable<Book[]> {
        return this._http.get<Book[]>(`${environment.serverBaseAddress}/library/list-stock`);
    }

    findBooksByName(name: string): Observable<Book[]> {
        return this._http
            .get<Book[]>(`${environment.serverBaseAddress}/library/find-book?book-title=${name}`);
    }

    findBooksByAuthor(name: string): Observable<Book[]> {
        return this._http.get<Book[]>(`${environment.serverBaseAddress}/library/author-books?author-name=${name}`);
    }
}
