"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var Service = /** @class */ (function () {
    function Service() {
        this.readline = require('readline');
        // création d'un objet `rl` permettant de récupérer la saisie utilisateur
        this.scanner = this.readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this._request = request_promise_native_1.default;
    }
    Service.prototype.selectAll = function (url) {
        return this._request.get(url, { json: true });
    };
    Service.prototype.insert = function (url, matricule, idEntreprise, idProfil, idGrade) {
        return this._request.post({
            url: url,
            method: "POST",
            json: {
                matricule: matricule,
                idEntreprise: idEntreprise,
                idProfil: idProfil,
                idGrade: idGrade
            }
        });
    };
    Service.prototype.selectEmployeById = function (url) {
        return this._request.get({
            url: url,
            method: "GET"
        });
    };
    return Service;
}());
exports.default = Service;
