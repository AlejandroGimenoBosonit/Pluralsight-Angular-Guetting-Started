import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './Home/welcome.component';
import { ProductModule } from './products/product/product.module';
import { AboutComponent } from './about/about.component';

/**
 * * Decorator
 */
@NgModule({
  // wich components belong to this module
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent
  ],
  // external modules that we want to have avaible to all the components that belong to this Angular Module
  imports: [
    BrowserModule,
    HttpClientModule,
    /**
     * RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      ])
     * 
     */
    
    AppRoutingModule,
    ProductModule
  ],
  providers: [],
  // defines that startup component of the application
  bootstrap: [AppComponent]
})
/**
 * * Class
 */
export class AppModule { }
