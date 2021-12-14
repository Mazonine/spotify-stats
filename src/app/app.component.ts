import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TABS } from './constants/TabDefinitions';
import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'spotify-stats';
  tabIndex$: Observable<number>;
  showInstructorsButton$: Observable<boolean>;
  showClassesButton$: Observable<boolean>;
  showWorkoutsButton$: Observable<boolean>;
  showAnalyticsButton$: Observable<boolean>;
  TABS: typeof TABS = TABS;
  currentButtonSelected = 0;

  constructor(
    private messagingService: MessagingService
  ) {}

  ngOnInit(): void {
    this.tabIndex$ = this.messagingService.tabChanged.pipe(
      map((results: number) => {
        return results || TABS.HOME;
      })
    );

    // this.showInstructorsButton$ =
    //   this.messagingService.instructorButtonChanged.pipe(
    //     map((results: boolean) => {
    //       return results;
    //     })
    //   );

    // this.showClassesButton$ = this.messagingService.classesButtonChanged.pipe(
    //   map((results: boolean) => {
    //     return results;
    //   })
    // );

    // this.showWorkoutsButton$ =
    //   this.messagingService.workoutsButtonChanged.pipe(
    //     map((results: boolean) => {
    //       return results;
    //     })
    // );

    // this.showAnalyticsButton$ =
    //   this.messagingService.analyticsButtonChanged.pipe(
    //     map((results: boolean) => {
    //       return results;
    //     })
    //   );
  }

  onTabIndexChanged(event: any): void {
    this.currentButtonSelected = event;
    this.messagingService.setTabIndex(event);
  }

  navigate(destination: TABS): void {
    // if (destination === TABS.CLASSES) {
    //   this.messagingService.setClass('All');
    // }

    this.messagingService.setTabIndex(destination);
  }
}
