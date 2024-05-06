import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  novenyekLst : AngularFireList<any>

  constructor(private db: AngularFireDatabase) { 
    this.novenyekLst= db.list('/Novenyek')
  }

  // CRUD
  getPlants(){
    return this.novenyekLst
  }

  deletePlant(plant:any){   
    this.novenyekLst.remove(plant.key)
  }
  
  updatePlant(plant:any){ 
    let key= plant.key
    delete plant.key
    this.novenyekLst.update(key, plant.key)
  }

  addPlant(plant:any){   
    this.novenyekLst.push(plant)
  }


}
