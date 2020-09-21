"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = __importDefault(require("./service"));
var employe_1 = __importDefault(require("./entities/employe"));
var Presentation = /** @class */ (function () {
    function Presentation(_service) {
        this._service = _service;
        this._service = new service_1.default();
    }
    Presentation.prototype.start = function () {
        return "1. Lister les employés\n 2. Ajouter employé\n 3. Rechercher un employé par matricule\n 99. Sorti";
    };
    Presentation.prototype.menu = function () {
        var _this = this;
        console.log("** Administration Paie **");
        this._service.scanner.question(this.start(), function (saisie) {
            switch (saisie) {
                case "1":
                    console.log(">> Liste employés");
                    _this._service.selectAll("http://localhost:8080/paieapp/employe")
                        .then(function (employes) {
                        return employes.map(function (employe) { return console.log(new employe_1.default(employe.id, employe.id_remuneration)); })
                            .join("\n");
                    })
                        .catch(function (err) { return console.log(err); })
                        .finally(function () {
                        _this.start();
                    });
                    break;
                case "2":
                    console.log(">> Ajouter un employé");
                    _this._service.scanner.question("matricule ?", function (matricule) {
                        _this._service.scanner.question("idEntreprise ?", function (idEntreprise) {
                            _this._service.scanner.question("idProfil ?", function (idProfil) {
                                _this._service.scanner.question("idGrade ?", function (idGrade) {
                                    _this._service.insert("http://localhost:8080/paieapp/insertemploye", matricule, idEntreprise, idProfil, idGrade);
                                });
                            });
                        });
                    });
                    break;
                case "3":
                    console.log(">> Rechercher un employé");
                    _this._service.scanner.question("idEmploye ?", function (idEmploye) {
                        return _this._service.selectEmployeById("http://localhost:8080/paieapp/employe/" + idEmploye).then(function (employe) {
                            console.log(new employe_1.default(employe.id, employe.id_remuneration));
                        });
                    });
                    break;
                case "99":
                    console.log("Au revoir");
                    _this._service.scanner.close;
                default:
                    console.log("Demande inconnue");
                    break;
            }
        });
    };
    return Presentation;
}());
exports.default = Presentation;
