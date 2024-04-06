import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-setting-side-bar',
  templateUrl: './setting-side-bar.component.html',
  styleUrl: './setting-side-bar.component.css'
})
export class SettingSideBarComponent {
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
