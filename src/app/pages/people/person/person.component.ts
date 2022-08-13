import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit, OnChanges {
  @Input() personInfo: any;
  @Output() viewMore = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {
    console.log('component is ready');
  }

  ngOnChanges(change: any) {
    // console.log(change);
  }

  emitViewMore() {
    this.viewMore.emit(false);
  }

  ngOnDestroy() {
    console.log('Component is gone');
  }
}
