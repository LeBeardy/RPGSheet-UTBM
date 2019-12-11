import { Component } from '@angular/core';
import {SelectComponent} from '../models/selectComponent';
import {Rule} from '../models/rule';
import {Serialize, serialize} from 'cerialize';
import {Canvas} from '../models/canvas';
import {ResizeEvent} from 'angular-resizable-element';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {DndDropEvent} from 'ngx-drag-drop';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tooltipExpand: boolean;
  canvas: Canvas ;
    private currentDragEffectMsg: string;

  constructor() {
    this.tooltipExpand = true;
    this.canvas = new Canvas();
  }

  createSelect() {
    const t = new SelectComponent();
    t.id = this.canvas.length() + 1;
    t.x = 1;
    t.y = 2;
    t.width = 150;
    t.height = 100;
    t.label = 'test';
    t.addOption('test1');
    t.addOption('test2');
    t.addOption('test3');
    this.canvas.addElement(t);

  }

    ExportJSONCanvas() {

      // @ts-ignore
      const FileSaver = require('file-saver');

      const json = [JSON.stringify( Serialize( this.canvas ) )];

      alert(json);

      const file = new File( json, 'hello world.json', {type: 'text/JSON;charset=utf-8'});
      FileSaver.saveAs(file);
   }

  ExportPDFCanvas() {
      const data = document.getElementById('canvas');
      html2canvas(data).then(canvas => {
          const imgWidth = 208;
          const pageHeight = 295;
          const imgHeight = canvas.height * imgWidth / canvas.width;
          const heightLeft = imgHeight;
          const contentDataURL = canvas.toDataURL('image/png');
          const pdf = new jspdf('p', 'mm', 'a4');
          const position = 0;
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
          pdf.save('MYPdf.pdf');
        });
      }

    toggleTooltip(): void {
     this.tooltipExpand = !this.tooltipExpand;
  }

  onDrop(event: DndDropEvent ) {
      alert(JSON.stringify(event));
  }
    onDragged( $event: DragEvent, effect:string ) {

        this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;
    }
  // drawComponents(component: any){
  //
  // }
  onResizeEnd(event: ResizeEvent, id): void {
    document.getElementById(id).style.position = 'fixed';
    document.getElementById(id).style.left = `${event.rectangle.left}px`;
    document.getElementById(id).style.width = `${event.rectangle.width}px`;
  }

}
