import { PushComponent } from './push/push.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { NotificationlistComponent } from './notificationlist/notificationlist.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'pushlist',component: NotificationlistComponent  },
    { path: 'pushsettings', component: PushComponent },
    { path: 'location', component: LocationComponent}
  ];
