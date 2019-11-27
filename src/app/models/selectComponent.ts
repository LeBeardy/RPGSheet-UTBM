import {Rule} from './rule';
import {serialize, serializeAs} from 'cerialize';

export class SelectComponent {
    @serialize id: number;
    @serialize x: number;
    @serialize y: number;
    @serializeAs('options') options: string[] = [];
    @serialize label: string;
    // @serializeAs('rules') rules: Rule[] = [];
    @serialize width: number;
    @serialize height: number;
    @serialize type = 'select';

    addOption(option: string) {
        this.options.push(option);
    }
    // addRule(rule: Rule) {
    //     this.rules.push(rule);
    // }
}
