import {autoserialize, serialize} from 'cerialize';

export class Rule {
    @autoserialize  condition: string;
    @autoserialize  roll: number;
    @autoserialize  result: any;
}
