import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-learn-more-side-bar',
  templateUrl: './learn-more-side-bar.component.html',
  styleUrl: './learn-more-side-bar.component.css'
})
export class LearnMoreSideBarComponent {
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  LearnMoreSideBar: boolean = false;
  constructor() { }

  ngOnInit() { }

  //closeSideBar(): void {
  //  this.LearnMoreSideBar = false;
  //}
  closeNav(): void {
    this.close.emit();
  }
}
