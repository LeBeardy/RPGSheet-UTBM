import {serialize} from 'cerialize';

export class InputComponent {
    @serialize value: any;
    @serialize id: number;
    @serialize x: number;
    @serialize y: number;
    @serialize label: string;
    @serialize width: number;
    @serialize height: number;
    @serialize type = 'input';

}
