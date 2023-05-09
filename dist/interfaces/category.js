"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryEnumToName = exports.Category = void 0;
var Category;
(function (Category) {
    Category[Category["LEGS"] = 0] = "LEGS";
    Category[Category["CHEST"] = 1] = "CHEST";
    Category[Category["BACK"] = 2] = "BACK";
    Category[Category["SHOULDERS"] = 3] = "SHOULDERS";
    Category[Category["ARMS"] = 4] = "ARMS";
    Category[Category["CORE"] = 5] = "CORE";
    Category[Category["CARDIO"] = 6] = "CARDIO";
    Category[Category["FULLBODY"] = 7] = "FULLBODY";
    Category[Category["FREEWEIGHT"] = 8] = "FREEWEIGHT";
    Category[Category["STRETCHING"] = 9] = "STRETCHING";
    Category[Category["STRENGTH"] = 10] = "STRENGTH";
    Category[Category["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Category = exports.Category || (exports.Category = {}));
exports.CategoryEnumToName = {
    [Category.LEGS]: "Piernas",
    [Category.CHEST]: "Pecho",
    [Category.BACK]: "Espalda",
    [Category.SHOULDERS]: "Hombros",
    [Category.ARMS]: "Brazos",
    [Category.CORE]: "Nucleo",
    [Category.CARDIO]: "Cardio",
    [Category.FULLBODY]: "Cuerpo completo",
    [Category.FREEWEIGHT]: "Peso libre",
    [Category.STRETCHING]: "Estiramiento",
    [Category.STRENGTH]: "Fuerza",
    [Category.UNRECOGNIZED]: "Desconocido",
};
