import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isOpen: boolean = false;
  ngOnInit() {
    this.openSidebar();
  }
  openSidebar() {
    const offcanvasElement = document.getElementById("offcanvasWithBothOptions");
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    offcanvas.show();
  }
  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
