import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookings } from '../models/bookings';
import { environment } from 'src/environments/environment';
import { iHttpPaginatedResponse } from '../interfaces/iHttpPaginatedResponse';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BookingService {

    constructor(private http: HttpClient) { }

    public fetchAllResults(searchFields: any): Observable<iHttpPaginatedResponse<Bookings[]>> {
        const finalUrl =  'pitches/' + searchFields['pitchId'] + '/slots?filter%5Bstarts%5D=' + searchFields['startDate'] + '&filter%5Bends%5D=' + searchFields['endDate'];
        return this.http.get<iHttpPaginatedResponse<Bookings[]>>(environment.apiEndpoint + finalUrl).pipe(
            map(res => {
               let bookingsArray = [];
               res.data.forEach(slot => {
                   bookingsArray.push(new Bookings(slot));
               })
               res.data = bookingsArray;
               return res;
            }));
    }
}