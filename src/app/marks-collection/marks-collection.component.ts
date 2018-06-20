import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-marks-collection',
  templateUrl: './marks-collection.component.html',
  styleUrls: ['./marks-collection.component.css']
})
export class MarksCollectionComponent implements OnInit {
  marks: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.marks = db.collection('dashboards').doc('0CKGm2BdnLs4Ux85bzD9').collection('marks').valueChanges();
  }

  ngOnInit() {
  }

}
