import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {

  constructor() { }
  imgPath = ""
  ngOnInit(): void {
    this.imgPath = "assets/images/pic_bulboff.gif";
  }

  stateChange() {
    if (this.imgPath.endsWith("off.gif")) {
      this.imgPath = "assets/images/pic_bulbon.gif"
    } else {
      this.imgPath = "assets/images/pic_bulboff.gif"

    }
  }
}
