import { Component } from '@angular/core';
import {SelectComponent} from '../models/selectComponent';
import {Rule} from '../models/rule';
import {Serialize, serialize} from 'cerialize';
import {Canvas} from '../models/canvas';
import {ResizeEvent} from 'angular-resizable-element';

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

      // alert(JSON.stringify(Serialize(this.canvas)));
    }

    ExportPDFCanvas(){
      alert('pdf');
    }
  toggleTooltip(): void {
    this.tooltipExpand = !this.tooltipExpand;
  }

  onResizeEnd(event: ResizeEvent, id): void {
    document.getElementById(id).style.position = 'fixed';
    document.getElementById(id).style.left = `${event.rectangle.left}px`;
    document.getElementById(id).style.width = `${event.rectangle.width}px`;
  }

}
