import { Component, OnInit} from '@angular/core';


@Component({
  template: `<p>todo: hero detail component</p>`,
})
export class HeroDetailComponent implements OnInit {

  constructor(
    // todo: inject router and hero service
  ) {}

  ngOnInit() {
    // todo: fetch individual hero
  }
}
