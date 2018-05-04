import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { FriendsComponent } from './friends/friends.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FormsComponent} from './forms/forms.component'
import { NavigationComponent } from './navigation/navigation.component'
import { LayoutComponent } from './layout/layout.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalsComponent } from './modals/modals.component';
import { AddfriendComponent } from './addfriend/addfriend.component';

const routes:Routes = [
  {path:'friends',component:FriendsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: FriendDetailComponent },
  {path:'dashboard', component:DashboardComponent },
  { path:'forms', component:FormsComponent },
  { path:'navigation', component:NavigationComponent },
  { path:'layout' , component:LayoutComponent },
  { path:'buttons', component:ButtonsComponent },
  {path:'modals', component:ModalsComponent},
  {path:'addfriend',component:AddfriendComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
