import { Injectable } from "@angular/core";

import "rxjs/Rx";

import { AppConstantsService } from "./services/app-constants.service";

@Injectable()
export class ActionsService {
  private history: string[];

  constructor(private appConstants: AppConstantsService) {
    this.history = [];
  }

  public addAction(desc: string): void {
    this.history.unshift(desc);
    if (this.history.length > this.appConstants.Application.ACTIONS_LENGHT) {
      this.history.pop();
    }
  }

  public getActions(): string[] {
    return this.history;
  }
}
