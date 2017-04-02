import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PrefLanguage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pref-language',
  templateUrl: 'pref-language.html'
})
export class PrefLanguagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrefLanguagePage');
  }

  trans()
  {
var translationsEN = {
	VARIABLE_REPLACEMENT: 'Selected Language is:',
	PASSED_AS_TEXT: 'Change Language',
	SELECT_LANGUAGE: 'Select Language',
	Sample: 'Sample Steps',
	Step1: 'Step 1',
	Step1Detail: 'Click on a number',
	Step2: 'Step 2:',
	Step2Detail: 'Click on an operand',
	Step3: 'Step 3:',
	Step3Detail: 'Click on another number',
	Step4: 'Step 4',
	Step4Detail: 'Click on = sign',
	Result: 'Result will be displayed in the text box',
	FUNCTIONSSUPPORTED: 'Addition,Subtraction,Mutltiplication,Division,Square and SquareRoot',
	CHOOSELANGUAGE: 'Choose Language',
	TITLE: 'ENGLISH'
}

var translationsFR = {
	VARIABLE_REPLACEMENT: 'Langue sélectionnée est:{{name}}',
	PASSED_AS_TEXT: 'Passé sous forme de texte',
	SELECT_LANGUAGE: 'Choisir la langue',
	Sample: 'échantillon pas',
	Step1: 'étape 1',
	Step1Detail: 'Cliquez sur un numéro',
	Step2: 'étape 2:',
	Step2Detail: 'Cliquez sur un opérande',
	Step3: 'étape 3:',
	Step3Detail: 'Cliquez sur un autre numéro',
	Step4: 'étape 4',
	Step4Detail: 'Cliquez sur = signe',
	Result: 'Le résultat s\'affiche dans la zone de texte',
	FUNCTIONSSUPPORTED: 'Addition, soustraction, multiplication multiple, division, carré et racine carrée',
	CHOOSELANGUAGE: 'Choisissez la langue',
	TITLE: 'FRANÇAIS'
}


}






}


