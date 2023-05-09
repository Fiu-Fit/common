"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitEnumToName = exports.Unit = void 0;
var Unit;
(function (Unit) {
    Unit[Unit["SECONDS"] = 0] = "SECONDS";
    Unit[Unit["REPETITIONS"] = 1] = "REPETITIONS";
    Unit[Unit["METERS"] = 2] = "METERS";
    Unit[Unit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Unit = exports.Unit || (exports.Unit = {}));
exports.UnitEnumToName = {
    [Unit.SECONDS]: "Segundos",
    [Unit.REPETITIONS]: "Repeticiones",
    [Unit.METERS]: "Metros",
    [Unit.UNRECOGNIZED]: "Desconocido",
};
