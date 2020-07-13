import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookings } from 'src/app/models/bookings';
import { BookingService } from 'src/app/services/bookings.service';

@Component({
    selector: 'app-search-fields',
    templateUrl: 'search-fields.component.html',
    styleUrls: ['search-fields.component.scss']
})
export class SearchFieldsComponent {
    public searchFieldsForm: FormGroup;
    @Output() valueChange = new EventEmitter();
    public res: Bookings[] = [];
    errorMessage = null;
    isLoading = true;


    constructor(private bookingSerivce: BookingService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
        const pitchId = route.snapshot.paramMap.get('pitchId');
        const starts = route.snapshot.paramMap.get('starts');
        const ends = route.snapshot.paramMap.get('ends');

        this.searchFieldsForm = this.fb.group({
            pitchId: [route.snapshot.paramMap.get('pitchId'), [Validators.required]],
            startDate: [route.snapshot.paramMap.get('starts'), [Validators.required]],
            endDate: [route.snapshot.paramMap.get('ends'), [Validators.required]],
        })

        if (pitchId && starts && ends) {
            this.onSubmit();
        }
        this.isLoading = false;
    }

    validateDateRange(): boolean {
        const startDate = Date.parse(this.searchFieldsForm.value.startDate);
        console.log(startDate);
        const endDate = Date.parse(this.searchFieldsForm.value.endDate);
        console.log(endDate)
        if (!startDate || !endDate || startDate > endDate)
            return false;

        let diffMs = (endDate - startDate);
        let diffDays = Math.floor(diffMs / 86400000); // calculate miliseconds down to days
        console.log(diffDays);
        if (diffDays > 14) {
            return false;
        }
        return true;
    }


    onSubmit() {
        this.bookingSerivce.fetchAllResults(this.searchFieldsForm.value).subscribe(
            res => {
                this.res = res.data;
                this.valueChange.emit(this.res);
                //emit entire response
                this.setRoute();
            }
        );
    }

    setRoute() {
        let pitchId = this.searchFieldsForm.get('pitchId').value;
        let startDate = this.searchFieldsForm.get('startDate').value;
        let endDate = this.searchFieldsForm.get('endDate').value;
        this.router.navigate(['playfinder', pitchId, startDate, endDate]);

    }

}