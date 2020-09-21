"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var presentation_1 = __importDefault(require("./presentation"));
var service_1 = __importDefault(require("./service"));
var service = new service_1.default();
var presentation = new presentation_1.default(service);
presentation.menu();
