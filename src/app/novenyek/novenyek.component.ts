import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-novenyek',
  templateUrl: './novenyek.component.html',
  styleUrls: ['./novenyek.component.css']
})
export class NovenyekComponent {
  
  Plants:any

  constructor(private base:BaseService){
    this.base.getPlants().snapshotChanges().pipe(
      map(
        (ch)=>ch.map(
          (c)=>({key: c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(
      {
        next: adat=>this.Plants=adat,
        error: err=> console.log("Hiba van: ", err)
      }
    )
  }

}
