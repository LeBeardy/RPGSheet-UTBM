import {autoserialize, serialize} from 'cerialize';

export class InputComponent {
    @autoserialize  value: any;
    @autoserialize  id: number;
    @autoserialize  x: number;
    @autoserialize  y: number;
    @autoserialize  label: string;
    @autoserialize  width: number;
    @autoserialize  height: number;
    @autoserialize  type = 'input';

}
