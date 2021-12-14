import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  tabChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  setTabIndex(tabIndex: number): void {
    this.tabChanged.emit(tabIndex);
  }
}
