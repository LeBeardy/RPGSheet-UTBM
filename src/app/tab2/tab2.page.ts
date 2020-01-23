import { Component } from '@angular/core';
import {SelectComponent} from '../models/selectComponent';
import {Serialize} from 'cerialize';
import {Canvas} from '../models/canvas';
import {ResizeEvent} from 'angular-resizable-element';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { DndDropEvent } from 'ngx-drag-drop';
import {InputComponent} from '../models/inputComponent';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tooltipExpand: boolean;
  canvas: Canvas;
    public draggables = [
        {
            content: 'select',
            effectAllowed: 'copy',
            disable: false,
            handle: false,
        },
        {
            content: 'champ',
            effectAllowed: 'copy',
            disable: false,
            handle: false,
        }
    ];


    public defaultInput =
        {
            content: 'input',
            effectAllowed: 'select',
            disable: false,
            handle: false,
        };

  constructor() {
    this.tooltipExpand = true;
    this.canvas = new Canvas();
  }

  updateTitle(event) {
      this.canvas.title = event.target.value;
  }
  getElementId() {
      return this.canvas.length() + 1;
  }

  createSelect() {
        const t = new SelectComponent();
        t.id = this.getElementId();
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
    createInput() {
        const t = new InputComponent();
        t.id = this.getElementId();
        t.x = 1;
        t.y = 2;
        t.width = 150;
        t.height = 100;
        t.label = 'test';
        this.canvas.addElement(t);

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

    toggleTooltip(): void {
     this.tooltipExpand = !this.tooltipExpand;
  }

  onResizeEnd(event: ResizeEvent, id): void {
    document.getElementById(id).style.position = 'fixed';
    document.getElementById(id).style.left = `${event.rectangle.left}px`;
    document.getElementById(id).style.width = `${event.rectangle.width}px`;
  }

    onDrop(event: DndDropEvent) {
        console.log('dropped', JSON.stringify(event, null, 2));

        if ( event.data === 'select') {
            this.createSelect();
        } else if (event.data === 'champ') {
            this.createInput();
        }
    }

}
