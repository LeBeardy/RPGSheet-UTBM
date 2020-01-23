import { Component } from '@angular/core';
import {SelectComponent} from '../models/selectComponent';
import {DeserializeInto, Serialize} from 'cerialize';
import {Canvas} from '../models/canvas';
import {ResizeEvent} from 'angular-resizable-element';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { DndDropEvent } from 'ngx-drag-drop';
import {InputComponent} from '../models/inputComponent';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  tooltipExpand: boolean;
  canvas: Canvas;

  public defaultModel =
      {
        title: 'untitledModel',
        canvas: [
          {
            id: 1, x: 1, y: 2, options: ['test1', 'test2', 'test3'],
            label: 'test',
            width: 150,
            height: 100,
            type: 'select'
          },
          {
            id: 2,
            x: 1,
            y: 2,
            label: 'test',
            width: 150,
            height: 100,
            type: 'input'
          },
          {
            id: 1, x: 1, y: 2, options: ['test1', 'test2', 'test3'],
            label: 'test',
            width: 150,
            height: 100,
            type: 'select'
          },
          {
            id: 2,
            x: 1,
            y: 2,
            label: 'test',
            width: 150,
            height: 100,
            type: 'input'
          }
        ]
      };


  constructor() {
    this.tooltipExpand = true;
    this.canvas = new Canvas();
  }

  updateTitle(event) {
    this.canvas.title = event.target.value;
  }

  ExportJSONCanvas() {

    // @ts-ignore
    const FileSaver = require('file-saver');

    const json = [JSON.stringify( Serialize( this.canvas ) )];
    const file = new File( json, this.canvas.title + '.json', {type: 'text/JSON;charset=utf-8'});
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

  chargeDefaultModel() {
    DeserializeInto(this.defaultModel, Canvas, this.canvas);
  }

}
