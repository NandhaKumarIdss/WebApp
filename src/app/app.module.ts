import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { BodyComponent } from './shared/body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarComponent } from './shared/topBar/topBar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { SublevelMenuComponent } from './shared/sidenav/sublevel-menu.component';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ResourcesComponent } from './resources/resources.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SiteHelpComponent } from './site-help/site-help.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopBarComponent,
    BodyComponent,
    FooterComponent,
    DashboardComponent,
    SublevelMenuComponent,
    BootcampsComponent,
    EnterpriseComponent,
    ResourcesComponent,
    GalleryComponent,
    SiteHelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
