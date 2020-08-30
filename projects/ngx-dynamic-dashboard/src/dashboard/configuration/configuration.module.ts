import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardsConfigurationTabComponent} from './tab-boards/boards-configuration-tab.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OptionsConfigurationTabComponent} from './tab-options/options-configuration-tab.component';
import {ConfigurationComponent} from './configuration-component';
import {OptionsService} from './tab-options/service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatChipsModule
    ],
    declarations: [
        BoardsConfigurationTabComponent,
        OptionsConfigurationTabComponent,
        ConfigurationComponent
    ],
    providers: [
        OptionsService
    ],
    exports: [
        BoardsConfigurationTabComponent,
        OptionsConfigurationTabComponent,
        ConfigurationComponent
    ]
})
export class ConfigurationModule {
}
