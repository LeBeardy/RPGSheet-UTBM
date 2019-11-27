import {serialize} from 'cerialize';

export class Canvas {
    @serialize canvas: any[] = [];

    addElement(compo: any){
        this.canvas.push(compo);
    }
}
