import { Component } from "@angular/core";

@Component({
    selector: 'app-playfinder',
    templateUrl: 'playfinder.component.html',
    styleUrls: ['playfinder.component.scss']
})

export class PlayfinderComponent {

    constructor() { }

    results: any = [];

    OnSearch(results: any) {
        this.results = results;
    }
}