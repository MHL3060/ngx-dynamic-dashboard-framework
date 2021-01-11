import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigurationModule} from '../configuration/configuration.module';
import {LayoutModule} from '../layout/layout.module';
import {AddGadgetModule} from '../add-gadget/add-gadget.module';
import {NotificationModule} from '../notification/notification.module';
import {ConfigurationService} from '../services/configuration.service';
import {RuntimeService} from '../services/runtime.service';
import {ObservableWebSocketService} from '../services/websocket-service';
import {TypeAheadInputModule} from '../typeahead-input/typeahead-input.module';
import {MenuComponent} from './menu.component';
import {MenuEventService} from './menu-service';
import {AboutModule} from '../about/about.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {GadgetPropertyService} from '../gadgets/_common/gadget-property.service';
import {MatDialogModule} from '@angular/material/dialog';
import {AddGadgetComponent} from '../add-gadget/add-gadget-component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule,
        NotificationModule,
        AddGadgetModule,
        LayoutModule,
        AboutModule,
        ConfigurationModule,
        TypeAheadInputModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatToolbarModule
    ],
    providers: [
        RuntimeService,
        ConfigurationService,
        GadgetPropertyService,
        ObservableWebSocketService,
        MenuEventService
    ],
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ],
    entryComponents: [
        AddGadgetComponent
    ]
})
export class MenuModule {
}
