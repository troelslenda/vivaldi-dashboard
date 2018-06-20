import { Component, OnInit, HostListener } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

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
  items: Observable<any[]>;


  searchGoogle(searchphrase: HTMLInputElement) {
    window.location.href = `https://www.google.com/search?q=${searchphrase.value}`;
  }


  openLink(link) {
    return this.sanitizer.bypassSecurityTrustUrl(link);
  }

  ngOnInit() {

  }
  constructor(db: AngularFirestore, private sanitizer: DomSanitizer) {
    this.items = db.collection('dashboards').doc('0CKGm2BdnLs4Ux85bzD9').collection('marks').valueChanges();
  }
}
