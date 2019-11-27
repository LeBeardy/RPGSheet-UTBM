import { serialize } from 'cerialize';

export class Rule {
    @serialize condition: string;
    @serialize roll: number;
    @serialize result: any;
}
