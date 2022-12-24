import { Component, HostListener, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  canSearchAsOverlay = false;
  fullScreenSize: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkSearchAsOverlay(window.innerWidth);
  }

  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    this.checkSearchAsOverlay(window.innerWidth);
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkSearchAsOverlay(innerWidth: number) {
    if (innerWidth < 845) {
      this.canSearchAsOverlay = true;
    } else {
      this.canSearchAsOverlay = false;
    }
  }

  fullScreen() {
    const elem = document.documentElement;
    if (this.fullScreenSize === false) {
      const methodToBeInvoked = elem.requestFullscreen;
      if (methodToBeInvoked) { methodToBeInvoked.call(elem); }
      this.fullScreenSize = true;
    }
    else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      this.fullScreenSize = false;
    }
  }
}
