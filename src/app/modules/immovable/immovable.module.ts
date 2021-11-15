import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FuseCardModule} from '../../../@fuse/components/card';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from "@angular/material/tooltip";
import {SharedModule} from '../../shared/shared.module';
import {SearchModule} from "../../layout/common/search/search.module";


const immovableRoute: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
  declarations: [
    SearchComponent,
    HomeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(immovableRoute),
        FuseCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatTooltipModule,
        FuseCardModule,
        SharedModule,
        SearchModule
    ]
})
export class ImmovableModule { }
