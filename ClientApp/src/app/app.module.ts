// Angular Core
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { AppComponent } from './core/app/app.component';
import { HomeComponent } from './core/home/home.component';
import { NavMenuComponent } from './core/nav-menu/nav-menu.component';
// Modules
import { SharedModule } from "./shared/shared.module";
import { DialogsModule } from "./dialogs/dialog.module";
import { CustomMaterialModule } from "./shared/customer-material.module";
// Services
import { ShareService } from "./shared/share.service";
import { MessageService } from "./shared/message.service";
import { HttpErrorHandler } from "./shared/http-error-handler.service";


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    // Angular Core
    HttpModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    // Modules
    DialogsModule,
    CustomMaterialModule,
    //SharedModule,
    // Router
    RouterModule.forRoot([
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      {
        path: "customer",
        loadChildren: './customers/customer.module#CustomerModule',
      },
      { path: "**", redirectTo: "home" },
    ]),
  ],
  providers: [
    ShareService,
    MessageService,
    HttpErrorHandler,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
