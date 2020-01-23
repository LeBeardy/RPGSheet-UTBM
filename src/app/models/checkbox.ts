import {Rule} from './rule';
import {autoserialize, serialize, serializeAs} from 'cerialize';

export class Checkbox {
    @autoserialize  value: boolean;
    @autoserialize  id: number;
    @autoserialize  x: number;
    @autoserialize  y: number;
    @autoserialize  label: string;
    // @serializeAs('rules') rules: Rule[] = [];
    @autoserialize  width: number;
    @autoserialize  height: number;
    @autoserialize  type = 'checkbox';

    // addRule(rule: Rule) {
    //     this.rules.push(rule);
    // }
}
