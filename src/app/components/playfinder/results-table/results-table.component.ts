import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-results-table',
    templateUrl: 'results-table.component.html',
    styleUrls: ['results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {
    title = "Results Table"
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
        if(end < start){
            throw new Error("invalid date range");
         }
         let endDate: any = new Date(end);
         let purchaseDate: any = new Date(start);
        let diffMs = (endDate - purchaseDate); // milliseconds
        let diffHrs = Math.floor((diffMs % 86400000) / 3600000); //miliseconds in a 24 hour day and then divinding by milliseconds in an hour 
        let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // miliseconds in a 24 hour day, miliseconds in an hour, and milseconds in a minute
        return  diffHrs + " hours " + diffMins + " minutes";


    }


}