import { Component } from '@angular/core';
import {SelectComponent} from '../models/selectComponent';
import {Rule} from '../models/rule';
import {Serialize, serialize} from 'cerialize';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tooltipExpand: boolean;
  canvas: any[] = [];

  constructor() {
    this.tooltipExpand = true;

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

    this.canvas.push(t);
    alert(JSON.stringify(Serialize(t)));

  }

  toggleTooltip(): void {
    this.tooltipExpand = !this.tooltipExpand;
  }

}
