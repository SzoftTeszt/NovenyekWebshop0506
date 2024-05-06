import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-plants-admin',
  templateUrl: './plants-admin.component.html',
  styleUrls: ['./plants-admin.component.css']
})
export class PlantsAdminComponent {
  Plants:any
  newPlant:any={}

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

  SavePlant(p:any){
    console.log(p)
    this.base.updatePlant(p)
  }
  DeletePlant(p:any){
    // console.log(p)
    this.base.deletePlant(p)
  }
  AddPlant(){
    // console.log(p)
    this.base.addPlant(this.newPlant)
    this.newPlant={}
  }
}
