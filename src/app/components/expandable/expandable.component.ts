import { Component, OnInit , Input, ViewChild,  ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss']
})
export class ExpandableComponent implements OnInit {
  @ViewChild('expandWrapper', { read: ElementRef, static: true }) expandWrapper: ElementRef;
  @Input('expanded') expanded: boolean ;
  @Input('expandWidth') expandWidth: string ;
  constructor(public renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, 'max-width', this.expandWidth);
    this.renderer.setStyle(this.expandWrapper.nativeElement, 'left', '0');

    this.renderer.setStyle(this.expandWrapper.nativeElement, 'border-left', this.expanded ? 'grey 1px solid' : 'none');

  }

}
