import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';


@Component({
    selector: 'pm-app',
    template: `
    <div>
    <h1>Hello {{pageTitle}}</h1>
    <pm-products></pm-products>
    </div>

    `,
    directives: [ProductListComponent]
})

export class AppComponent {
    public pageTitle:string = "Welcome";
}