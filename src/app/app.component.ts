import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  searchGoogle(searchphrase: HTMLInputElement) {
    window.location.href = `https://www.google.dk/search?q=${searchphrase.value}`;
  }

  openLink() {
    console.log('open the link')
  }

  ngOnInit() {

  }
}
