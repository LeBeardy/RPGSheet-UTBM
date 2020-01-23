import {Rule} from './rule';
import {autoserialize, serialize, serializeAs} from 'cerialize';

export class Text {
    @autoserialize  value: string;
    @autoserialize  id: number;
    @autoserialize  x: number;
    @autoserialize  y: number;
    @autoserialize  label: string;
    // @serializeAs('rules') rules: Rule[] = [];
    @autoserialize  width: number;
    @autoserialize  height: number;
    @autoserialize  type = 'text';

    // addRule(rule: Rule) {
    //     this.rules.push(rule);
    // }
}
