"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitToString = exports.Unit = void 0;
var Unit;
(function (Unit) {
    Unit[Unit["KILOGRAMS"] = 0] = "KILOGRAMS";
    Unit[Unit["METERS"] = 1] = "METERS";
    Unit[Unit["SECONDS"] = 2] = "SECONDS";
    Unit[Unit["REPETITIONS"] = 3] = "REPETITIONS";
})(Unit = exports.Unit || (exports.Unit = {}));
const unitToString = (unit) => {
    const translation = {
        [Unit.KILOGRAMS]: 'Kilogramos',
        [Unit.METERS]: 'Metros',
        [Unit.SECONDS]: 'Segundos',
        [Unit.REPETITIONS]: 'Repeticiones',
    };
    return translation[unit];
};
exports.unitToString = unitToString;
