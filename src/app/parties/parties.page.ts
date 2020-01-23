import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.page.html',
  styleUrls: ['./parties.page.scss'],
})
export class PartiesPage implements OnInit {
  constructor(public PopUpCreate: AlertController) { }
  ngOnInit() {
  }
  inputName:string = "";
  idPartie:number;
  nomPartie:string = "";

  async showPopUpCreate() {
    // @ts-ignore
    let alert = this.PopUpCreate.create({
      header: 'Créer une partie',
      inputs: [
        {
          name: 'nomPartie',
          placeholder: 'Entrer un nom de partie'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: data => {
            console.log('Annulé');
          }
        },
        {
          text: 'Valider',
          role: 'validate',
          handler: data => {
            this.inputName=data.nomPartie + "#";
            this.idPartie = Math.floor(Math.random()*9999+1);
            this.nomPartie = this.inputName + this.idPartie;
          }
        }
      ]
    }).then(alert=> alert.present());
  }
  async showPopUpJoin() {
    // @ts-ignore
    let alert = this.PopUpCreate.create({
      header: 'Rejoindre une partie',
      inputs: [
        {
          name: 'ID de partie',
          placeholder: 'Entrer un ID de partie'
        },
        {
          name: 'Nom du joueur',
          placeholder: 'entrer votre nom de joueur'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: data => {
            console.log('Annulé');
          }
        },
        {
          text: 'Valider',
          role: 'cancel',
          handler: data => {
            console.log('Validé');
          }
        }
      ]
    }).then(alert=> alert.present());
  }
  updateTitle(NomPartie) {

  }
}
