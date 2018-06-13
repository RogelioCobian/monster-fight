
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'app';
 // we use this on monster
 // monsterName:string = 'kaiju';
 // monsterPower: number;

hero: any = {
  name: 'Internet',
  power: null
};

 monsters: any[] = [
   {

     monsterName: 'kaiju',
     monsterPower: null
   },
   {

     monsterName: 'smaug',
     monsterPower: null
   }
 ];

 monsterSelected;
 ngOnInit() {
   this.pickMonster();

 }
 pickMonster() {
   const index = Math.floor(Math.random() * this.monsters.length);
   this.monsterSelected = this.monsters[index];
 }

 generatePower() {
  this.monsterSelected.monsterPower = Math.floor(Math.random() * 1000);

 }
 generateHeroPower() {
  this.monsterSelected.monsterPower = Math.floor(Math.random() * 1000);

 }
}
