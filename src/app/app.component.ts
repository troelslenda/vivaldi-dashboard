import { Component, OnInit, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  searchGoogle(searchphrase: HTMLInputElement) {
    window.location.href = `https://www.google.com/search?q=${searchphrase.value}`;
  }

  ngOnInit() {

  }
}
