import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { BookingService } from 'src/app/services/bookings.service';
import { Bookings } from 'src/app/models/bookings';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-search-fields',
    templateUrl: 'search-fields.component.html',
    styleUrls: ['search-fields.component.scss']
})
export class SearchFieldsComponent {
    public searchFieldsForm: FormGroup;
    @Output() valueChange = new EventEmitter();
    public res: Bookings[] = [];

    constructor(private bookingSerivce: BookingService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe((params) => {
            this.searchFieldsForm = this.fb.group({
                pitchId: [params['pitchid'], [Validators.required]],
                startDate: [params['start'], [Validators.required]],
                endDate: [params['end'], [Validators.required]],
            });
        });
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