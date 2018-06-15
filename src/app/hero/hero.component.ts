import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: any = {
    name: '',
    power: null
  };

  @Output() heroPower = new EventEmitter<number>();

  ngOnInit() {
  }

  generateHeroPower() {
    this.hero.power = Math.floor(Math.random() * 1000);
    // console.log(this.hero.power);
    this.heroPower.emit(this.hero.power);
   }
}
