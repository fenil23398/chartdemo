import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { mcategory } from "../../shared/mcategory";
import { CategorydbProvider } from "../../providers/categorydb/categorydb";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arr:mcategory[]=[];
i:number=0;

  constructor(public navCtrl: NavController,
  public _data:CategorydbProvider) {

  }
  z:any;
  ionViewDidLoad() {
    this.defineData();
    
  }
  defineData(){
    this._data.getAllCategories().subscribe(
      (data:mcategory[])=>{
        
        this.arr=data;
      this.z=this.arr.length;
      alert(this.z);
      }
    );
    
    alert(this.arr.length);
    for(this.i=0;this.i<this.arr.length;this.i++)
    {
      alert('hiee');
      alert(this.arr[this.i].cat_name);
    }

  }

}
