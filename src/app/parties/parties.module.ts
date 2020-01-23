import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartiesPage } from './parties.page';
import {ResizableModule} from "angular-resizable-element";

const routes: Routes = [
  {
    path: '',
    component: PartiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ResizableModule
  ],
  declarations: [PartiesPage]
})
export class PartiesPageModule {}
