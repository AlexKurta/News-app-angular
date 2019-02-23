import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NewsApiService } from "./services/news-api.service";
import { CustomColorDirective } from './directives/custom-color.directive';
import { ShowDescriptionDirective } from './directives/show-description.directive';
import { CustomIfDirective } from './directives/custom-if.directive';

@NgModule({
  declarations: [AppComponent, HomeComponent, CustomColorDirective, ShowDescriptionDirective, CustomIfDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
