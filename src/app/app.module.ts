import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsTableComponent } from './components/playfinder/results-table/results-table.component';
import { SearchFieldsComponent } from './components/playfinder/search-fields/search-fields.component';
import { PlayfinderComponent } from './components/playfinder/playfinder.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultsTableComponent,
    SearchFieldsComponent,
    PlayfinderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
