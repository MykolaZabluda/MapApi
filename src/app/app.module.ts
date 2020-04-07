import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWNlsBRdG1gqntKcuPn-NdKw4jsdTRz80'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
