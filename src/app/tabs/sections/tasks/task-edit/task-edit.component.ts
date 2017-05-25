import { Component, OnInit } from "@angular/core";

import { ViewController, NavParams } from "ionic-angular";

import "rxjs/Rx";

import { Task } from "../../../../core/core.module";

@Component({
  selector: "task-edit",
  templateUrl: "task-edit.component.html"
})
export class TaskEditComponent implements OnInit {
  private viewCtrl: ViewController;
  private navParams: NavParams;

  private task: Task;

  constructor(viewCtrl: ViewController, navParams: NavParams) {
    this.viewCtrl = viewCtrl;
    this.navParams = navParams;
  }

  public ngOnInit(): void {
    this.task = this.navParams.get("task");
  }

  public changeStatus(task: Task): void {
    task.done = !task.done;
  }

  public save(): void {
    this.viewCtrl.dismiss(this.task);
  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
