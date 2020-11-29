import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

// Component
import UserComponent from "./components/UserComponent/index.component";
import { AppComponent } from "./app.component";
import { XyzComponent } from "./components/xyz/xyz.component";

const routes = [
  { path: "", component: AppComponent },
  { path: "xyz", component: XyzComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
