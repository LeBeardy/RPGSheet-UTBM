import {Rule} from './rule';
import {autoserialize, autoserializeAs, serialize, serializeAs} from 'cerialize';

export class SelectComponent {
    @autoserialize  value: string;
    @autoserialize  id: number;
    @autoserialize  x: number;
    @autoserialize  y: number;
    @autoserializeAs ('options') options: string[] = [];
    @autoserialize  label: string;
    // @serializeAs('rules') rules: Rule[] = [];
    @autoserialize  width: number;
    @autoserialize  height: number;
    @autoserialize  type = 'select';

    addOption(option: string) {
        this.options.push(option);
    }
    // addRule(rule: Rule) {
    //     this.rules.push(rule);
    // }
}
