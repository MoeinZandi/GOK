import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.html',
  styleUrls: ['./searchbox.scss']
})
export class Searchbox {
  query: string = '';

  onSearch() {
    console.log("Searching for:", this.query);
    // emit event, navigate, API call, etc.
  }
}
