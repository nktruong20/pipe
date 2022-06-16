import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-bar',
  templateUrl: './slider-bar.component.html',
  styleUrls: ['./slider-bar.component.css']
})
export class SliderBarComponent implements OnInit {

  sliderIn4 = [
    {
      "id":1,
      "name":"one piece"
    },
    {
      "id":2,
      "name":"NKT"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
