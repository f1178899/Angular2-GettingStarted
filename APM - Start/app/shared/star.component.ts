/**
 * Created by delonghuang on 18/07/16.
 */
import { Component, OnChanges, Input} from 'angular2/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;

    Onchanges():viod {
        return this.starWidth = this.rating  * 86 / 6;
    }
}