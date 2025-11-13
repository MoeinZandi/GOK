import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//loader factory
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'src/translations/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ],

   imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
}).catch(err => console.error(err));
