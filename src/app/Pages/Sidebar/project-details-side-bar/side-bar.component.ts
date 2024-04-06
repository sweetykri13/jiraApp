import { Component, Input } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Input() isOpen: boolean = false;
 // isOpen: boolean = false;
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
  openNav(): void {
    this.isOpen = true;
  }

  //closeNav(): void {
  //  this.isOpen = false;
  //}
 

  closeNav(): void {
    this.isOpen = false;
  }
}
