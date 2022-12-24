import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ResourcesComponent } from './resources/resources.component';
import { SiteHelpComponent } from './site-help/site-help.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses-routing.module').then(m => m.CoursesRoutingModule)
  },
  { path: 'bootcamps', component: BootcampsComponent },
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'help', component: SiteHelpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
