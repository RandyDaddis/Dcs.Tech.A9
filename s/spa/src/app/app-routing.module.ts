import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from 'src/app/core/components/public/contact-us/contact-us.component';
import { HomeComponent } from 'src/app/core/components/public/home/home.component';
import { ServicesComponent } from 'src/app/core/components/public/services/services.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '',
    children: [
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } /*debugging purposes only*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
