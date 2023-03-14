import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { InputTextFieldComponent } from './../../component/text-field/input-text-field/input-text-field.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // calling values from the input child component
  @ViewChild(InputTextFieldComponent) inputTextFieldValue: InputTextFieldComponent;
  // list to store task; used in view
  public tasks: string[];

  constructor(private _matSnackBar: MatSnackBar) {
    // Decleare default values
    this.tasks = JSON.parse(localStorage.getItem("tasks")!) ?? [];
    this.inputTextFieldValue = new InputTextFieldComponent();
  }

  ngOnInit(): void { }

  // methord to update task in localStorage
  private updateTasks(tasks: string[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  // metord to disable add task button
  get disableBtn(): boolean {
    // check if the input task is not empty
    return this.inputTextFieldValue.task.length > 0 ? false : true;
  }

  // add tasks to list
  public addTaskToList(): void {
    // if input task is valid add task 
    if (this.inputTextFieldValue.task.length > 0) {
      // add new task to the top of array
      this.tasks = [this.inputTextFieldValue.task, ...this.tasks];
      // reset input task value 
      this.inputTextFieldValue.task = "";
      // update tasks in localStorage
      this.updateTasks(this.tasks);
      this.openSnackBar('You have added a task!', 'snackBarSuccess');
    } else {
      this.openSnackBar('Failed to add a task!', 'snackBarFail');
    }
  }

  // drag and drop methord
  public moveTaskInList(event: CdkDragDrop<string[]>): void {
    // changes the task index in the object
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    // update tasks in localStorage
    this.updateTasks(this.tasks);
  }

  // methord to remove task from a list 
  public removeTaskFromList(task: string): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.updateTasks(this.tasks);
    this.openSnackBar('You have removed a task!', 'snackBarDelete');
  }

  //  metord to clear all tasks
  public clearTask() {
    // clear tasks from view 
    this.tasks = [];
    // remove all tasks from localStorage
    localStorage.removeItem('tasks');
    this.openSnackBar('You have removed all tasks!', 'snackBarDelete');
  }

  public openSnackBar(message: string, color: string): void {
    this._matSnackBar.open(message, '', {
      // position snackBar
      horizontalPosition: 'end',
      verticalPosition: 'top',
      // color
      panelClass: [color, 'snackBar'],
      duration: 2000,
    });
  }
}
