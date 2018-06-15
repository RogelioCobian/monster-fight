import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  @Input() heroPower: number;

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
    console.log(this.pickMonster);
  }

 generatePower() {
  this.monsterSelected.monsterPower = Math.floor(Math.random() * 1000);
 }

}
