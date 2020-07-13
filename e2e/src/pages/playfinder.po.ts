import { browser } from 'protractor';
import { AppPageBase } from './app-page-base.po';

export class PlayfinderPage extends AppPageBase {

    public static url: string = `${browser.baseUrl}playfinder`;



}