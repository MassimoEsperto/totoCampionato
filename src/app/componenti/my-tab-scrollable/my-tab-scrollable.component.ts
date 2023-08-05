import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-tab-scrollable',
  templateUrl: './my-tab-scrollable.component.html',
  styleUrls: ['./my-tab-scrollable.component.scss'],

})
export class MyTabScrollable implements OnInit {
  @Input() tabs:any;
  @Input() first:boolean=false;
  selectedIndex!: number;
  abc: string="";
  leftTabIdx = 0;
  atStart = true;
  atEnd = false
  @Output() emitSelectedTab = new EventEmitter()
  constructor() { }

  ngOnInit() {
    if(this.first){
    this.emitSelectedTab.emit(this.tabs[0])
    this.abc = `translateX(0px)`
    }
  }

  selectTab(index:any) {
    this.selectedIndex = index
    this.emitSelectedTab.emit(this.tabs[index])
    this.scrollTab(index-this.leftTabIdx-1)
  }

  scrollTab(x:any) {
    if (this.atStart && x < 0 || this.atEnd && x > 0) {
      return
    }
    this.leftTabIdx = this.leftTabIdx + x
    this.abc = `translateX(${(this.leftTabIdx) * -140}px)`
    this.atStart = this.leftTabIdx === 0
    this.atEnd = this.leftTabIdx === this.tabs.length -1
  }

}