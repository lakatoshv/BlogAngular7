import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { AuthorizationComponent } from './user/authorization/authorization.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AboutComponent } from './default-pages/about/about.component';
import { ContactsComponent } from './default-pages/contacts/contacts.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponentComponent,
    children: [
      {
        path: "",
        loadChildren: '../shared/posts/posts.module#PostsModule'
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "contacts",
        component: ContactsComponent
      },
      {
        path: "registration",
        component: RegistrationComponent
      },
      {
        path: "authorization",
        component: AuthorizationComponent
      },
      {
        path: "profile",
        loadChildren: '../user-portal/profile/profile.module#ProfileModule'
      },
      /*{
        path: "my-profile",
        component: ProfilePageComponent
      },*/
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
