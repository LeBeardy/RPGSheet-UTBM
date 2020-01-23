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

  async showPopUpCreate() {
    // @ts-ignore
    let alert = this.PopUpCreate.create({
      header: 'Créer une partie',
      inputs: [
        {
          name: 'Nom de Partie',
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
          role: 'cancel',
          handler: data => {
            console.log('Validé');
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
  updateTitle() {

  }
}
