import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { CustomTwowayBindingComponent } from './custom-twoway-binding/custom-twoway-binding.component';
import { CustomTwowayBindingCopyComponent } from './custom-twoway-binding-copy/custom-twoway-binding-copy.component';
import { LContentProjectionComponent } from './l-content-projection/l-content-projection.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabGroupCopyComponent } from './tab-group-copy/tab-group-copy.component';
import { CounterComponent } from './counter/counter.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormatAdressPipe } from './pipe/format-address-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    CustomTwowayBindingComponent,
    CustomTwowayBindingCopyComponent,
    LContentProjectionComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabGroupCopyComponent,
    CounterComponent,
    PipeComponent,
    FormatAdressPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
