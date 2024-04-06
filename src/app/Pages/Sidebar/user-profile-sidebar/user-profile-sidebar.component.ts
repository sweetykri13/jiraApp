import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile-sidebar',
  templateUrl: './user-profile-sidebar.component.html',
  styleUrl: './user-profile-sidebar.component.css'
})
export class UserProfileSidebarComponent {
  @Input() isOpen: boolean = false;
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
}
