import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog'
import { ConfirmPopup } from 'primeng/confirmpopup'
import { LayoutDashboardComponent, LayoutPublicComponent, PageLayout, PageLayoutService } from '../libs/common-components';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, AsyncPipe, LayoutPublicComponent, LayoutDashboardComponent, ConfirmDialog, ConfirmPopup],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly PageLayout = PageLayout
  protected layoutService = inject(PageLayoutService)

}
