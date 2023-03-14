import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-text-field',
  templateUrl: './output-text-field.component.html',
  styleUrls: ['./output-text-field.component.scss']
})
export class OutputTextFieldComponent implements OnInit {
  @Input() content: string;

  constructor() {
    this.content = '';
  }

  ngOnInit(): void { }
}
