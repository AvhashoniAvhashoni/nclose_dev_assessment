import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() disabled: boolean;

  constructor() {
    this.icon = "";
    this.disabled = false;
  }

  ngOnInit(): void {
  }

}
