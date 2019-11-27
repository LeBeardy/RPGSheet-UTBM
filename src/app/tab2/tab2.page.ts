import { Component } from '@angular/core';
import {SelectComponent} from '../models/selectComponent';
import {Rule} from '../models/rule';
import {Serialize, serialize} from 'cerialize';
import {Canvas} from '../models/canvas';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tooltipExpand: boolean;
  canvas: Canvas ;

  constructor() {
    this.tooltipExpand = true;
    this.canvas = new Canvas();
  }

  createSelect() {
    const t = new SelectComponent();
    t.id = 0;
    t.x = 1;
    t.y = 2;
    t.width = 150;
    t.height = 100;
    t.label = 'test';
    t.addOption('test1');
    t.addOption('test2');
    t.addOption('test3');

    const r = new Rule();
    r.result = true;
    r.roll = 10;
    r.condition = '>';
    t.addRule(r);

    this.canvas.addElement(t);
    // alert(JSON.stringify(Serialize(t)));

  }

    ExportJSONCanvas() {

      alert(JSON.stringify(Serialize(this.canvas)));
    }

    ExportPDFCanvas() {
      const data = document.getElementById('canvas');
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png')
        const pdf = new jspdf('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('MYPdf.pdf');

      });
      }

    toggleTooltip(): void {
     this.tooltipExpand = !this.tooltipExpand;
  }

}
