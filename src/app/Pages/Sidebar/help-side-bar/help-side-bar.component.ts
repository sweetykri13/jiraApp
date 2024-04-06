import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-help-side-bar',
  templateUrl: './help-side-bar.component.html',
  styleUrl: './help-side-bar.component.css'
})
export class HelpSideBarComponent {
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {

  }
  openNav(): void {
    this.isOpen = true;
  }

  closeNav(): void {
    this.close.emit();
  }
}
