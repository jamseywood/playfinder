import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-results-table',
    templateUrl: 'results-table.component.html',
    styleUrls: ['results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {

    page = 1;
    pageSize = 10;
    collectionSize = 0;
    @Input('results')
    set searchResults(value: any) {
        this.res = value;
        this.collectionSize = value.length;
    }
    
    res: any = [];
    public isLoading = true;
    constructor() { }

    get bookings(): any[] {
        return this.res
            .map((pitch: any, i: any) => ({ id: i + 1, ...pitch }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    ngOnInit() {
        this.collectionSize = this.res.length;
    }

    getDuration(start, end) {
        let timeDifference = Math.abs(new Date(start).getTime() - (new Date(end).getTime()));
        let minutes = Math.floor((timeDifference/1000)/60)
        let hours = Math.round(timeDifference / 60)
        return hours + ' hours ' + minutes + ' minutes';
    }


}