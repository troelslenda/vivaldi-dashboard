import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  searchGoogle(searchphrase: HTMLInputElement) {
    switch (searchphrase.value.slice(0, 2)) {
      case 'g ':
        window.location.href = `https://www.google.com/search?q=${searchphrase.value.slice(2)}`;
        break;
      case 'y ':
        window.location.href = `https://www.youtube.com/results?search_query=${searchphrase.value.slice(2)}`;
        break;
      default:
        window.location.href = 'http://'+ searchphrase.value;
        break;
    }
  }

  openLink() {
    console.log('open the link')
  }

  ngOnInit() {

  }
}
