import {autoserialize} from 'cerialize';

export class Canvas {
    @autoserialize  title = 'untitledModel';
    @autoserialize  canvas: any[] = [];

    addElement(compo: any) {
        this.canvas.push(compo);
    }

    length() {
        return this.canvas.length;
    }
}
