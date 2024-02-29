import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Favourite {}

@Injectable({ providedIn: 'root' })
export class FavouriteService {
    constructor(private http: HttpClient) {}

    getFavourites(): Observable<Favourite[]> {
        return this.http.get<Favourite[]>(`/api/user/favourite`);
    }
}