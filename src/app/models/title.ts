import {Rule} from './rule';
import {serialize, serializeAs} from 'cerialize';

export class Title {
    @serialize value: string;
    @serialize id: number;
    @serialize x: number;
    @serialize y: number;
    @serialize label: string;
    // @serializeAs('rules') rules: Rule[] = [];
    @serialize width: number;
    @serialize height: number;
    @serialize type = 'title';

    // addRule(rule: Rule) {
    //     this.rules.push(rule);
    // }
}
