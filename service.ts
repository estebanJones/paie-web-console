const request = require("request");
import requestNative from 'request-promise-native';
import Employe from './entities/employe';

export default class Service {
    private _request;
    constructor() {
        this._request = requestNative;
        
    }
    
    selectAll(url: string) : Promise<Employe[]> {
       return this._request.get(url, {json:true});
    }
    
    insert(url: string, matricule: string, idEntreprise: number, idProfil: number, idGrade: number) {
       return this._request.post({
            url: url,
            method : "POST",
            json: {
                matricule: matricule,
                idEntreprise: idEntreprise,
                idProfil: idProfil,
                idGrade: idGrade
    
            }})
    }
    
    selectEmployeById(url: string) : Promise<Employe> {
        return this._request.get({
            url: url,
            method : "GET"
        });
    }
    
    readline=require('readline');
    // création d'un objet `rl` permettant de récupérer la saisie utilisateur
    scanner= this.readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
}
