/**
 * Created by delonghuang on 18/07/16.
 */
import { Component, OnChanges, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating:number;
    @Output() notify:EventEmitter<string> = new EventEmitter<string>();
    starWidth:number;

    ngOnChanges():viod {
        return this.starWidth = this.rating * 86 / 5;
    }

    onClick():void {
        console.log('Rate star clicked');
        this.notify.emit(this.rating.toString() + ' clicked!');
    }
}