import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-text-field',
  templateUrl: './input-text-field.component.html',
  styleUrls: ['./input-text-field.component.scss']
})
export class InputTextFieldComponent implements OnInit {
  public task: string;

  constructor() {
    this.task = "";
  }

  ngOnInit(): void { }

}
