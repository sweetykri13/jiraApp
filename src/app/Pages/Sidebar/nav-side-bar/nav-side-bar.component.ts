import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GiveFeedbackComponent } from '../../dailoge/give-feedback/give-feedback.component';
import { LearnMoreSideBarComponent } from '../learn-more-side-bar/learn-more-side-bar.component';

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrl: './nav-side-bar.component.css'
})
export class NavSideBarComponent {
  @Input() isOpen: boolean = false;
  LearnMoreSidebar: boolean = false;
  sideBarOpen: boolean = false;
  sideBarSettingOpen: boolean = false;
  sideBarUserOpen: boolean = false;
  searchVisible: boolean = false;
  constructor(private dailoge:MatDialog) {

  }
  
 ngOnInit() { }

  toggleSearchInput() {
    this.searchVisible = !this.searchVisible;
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
  openNav(): void {
    this.isOpen = true;
  }
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeNav(): void {
    this.close.emit();
  }
  closeSideBar(): void {
    this.LearnMoreSidebar = false;
  }
  LearnMoreSideBar(): void {
    this.LearnMoreSidebar = true;
    this.sideBarOpen = false;
    this.sideBarSettingOpen = false;
    this.sideBarUserOpen = false;
  }
  OpenLearnMoreDailoge() {
    const learnMoreDail = this.dailoge.open(LearnMoreSideBarComponent, {
      width: '400px',
      height: '500px'
    });
    learnMoreDail.afterClosed().subscribe((result: any) => {
      if (result) {

      }
    })
  }
  OpenFeedbackModel() {
    const feedbackdail = this.dailoge.open(GiveFeedbackComponent, {
      width: '650px',
      height: '330px'
    });
    feedbackdail.afterClosed().subscribe((result: any) => {
      if (result){

      }
    })
  }
}
