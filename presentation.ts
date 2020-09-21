import Service from "./service";
import Employe from "./entities/employe";

export default class Presentation {
    constructor(private _service : Service) {
        this._service = new Service();
    }

    start() : string {
        return "1. Lister les employés\n 2. Ajouter employé\n 3. Rechercher un employé par matricule\n 99. Sorti";
    }
    
    menu() : any {
        console.log("** Administration Paie **");
        this._service.scanner.question(this.start(), (saisie: string) => {
            switch (saisie) {
                case "1":
                    console.log(">> Liste employés");
                    this._service.selectAll("http://localhost:8080/paieapp/employe")
                        .then((employes : Employe[]) => 
                        employes.map((employe: Employe) => console.log(new Employe(employe.id, employe.id_remuneration))) 
                                .join("\n"))
                        .catch(err => console.log(err))
                        .finally(() => {
                            this.start();
                        });
                        
                    break;
                case "2":
                    console.log(">> Ajouter un employé");
                    this._service.scanner.question("matricule ?", (matricule: string) => {
                        this._service.scanner.question("idEntreprise ?", (idEntreprise: number) => {
                            this._service.scanner.question("idProfil ?", (idProfil: number) => {
                                this._service.scanner.question("idGrade ?", (idGrade: number) => {
                                    this._service.insert("http://localhost:8080/paieapp/insertemploye", matricule, idEntreprise, idProfil, idGrade);
                                });
                            });
                        });
                    });
                    break;
                case "3":
                    console.log(">> Rechercher un employé");
                    this._service.scanner.question("idEmploye ?", (idEmploye: number) => 
                        this._service.selectEmployeById(`http://localhost:8080/paieapp/employe/${idEmploye}`).then((employe : Employe) => {
                            console.log(new Employe(employe.id, employe.id_remuneration))
                        }));
                   break;
                case "99":
                    console.log("Au revoir");
                    this._service.scanner.close;
                default:
                    console.log("Demande inconnue");
                    break;
            }
        })
    }

}