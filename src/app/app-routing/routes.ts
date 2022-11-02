import { Routes } from "@angular/router";

import { AboutComponent } from '../component/about/about.component';
import { ContactComponent } from '../component/contact/contact.component';
import { DishdetailComponent } from '../component/dishdetail/dishdetail.component';
import { HomeComponent } from '../component/home/home.component';
import { MenuComponent } from '../component/menu/menu.component';

export const routes:Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'menu',     component: MenuComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contactus',     component: ContactComponent },
    { path: 'aboutus',     component: AboutComponent },
    { path: 'dishdetail/:id',     component: DishdetailComponent },


]