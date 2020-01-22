import { Component } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public draggables = [
    {
      content: 'testdata',
      effectAllowed: 'copy',
      disable: false,
      handle: false,
    },
    {
      content: 'testdata2',
      effectAllowed: 'move',
      disable: false,
      handle: false,
    },
    {
      content: 'testdata3',
      effectAllowed: 'link',
      disable: false,
      handle: false
    },
    {
      content: 'testdata4',
      effectAllowed: 'copy',
      disable: true,
      handle: false,
    },
    {
      content: 'testdata5',
      effectAllowed: 'copy',
      disable: false,
      handle: true,
    }
  ];

  public dropzoneEnabled = true;
  public lastDropEvent: DndDropEvent | null = null;

  constructor( ) {
  }

  onDragStart(event:DragEvent) {

    console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event:DragEvent) {

    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDragged($event:DragEvent, effect:string ) {

    console.log('dragged ' + effect, JSON.stringify(event, null, 2));
  }

  onDrop(event:DndDropEvent) {

    console.log("dropped", JSON.stringify(event, null, 2));
  }
  onDragover(event:DragEvent) {

    console.log("dragover", JSON.stringify(event, null, 2));
  }


}
