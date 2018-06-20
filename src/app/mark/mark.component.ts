import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  @Input() mark

  openLink(link) {
    return this.sanitizer.bypassSecurityTrustUrl(link);
  }

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
  }

}
