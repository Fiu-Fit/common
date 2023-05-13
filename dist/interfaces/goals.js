"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goalStatusToString = exports.GoalStatus = void 0;
var GoalStatus;
(function (GoalStatus) {
    GoalStatus[GoalStatus["InProgress"] = 0] = "InProgress";
    GoalStatus[GoalStatus["Completed"] = 1] = "Completed";
    GoalStatus[GoalStatus["CompletedLate"] = 2] = "CompletedLate";
})(GoalStatus = exports.GoalStatus || (exports.GoalStatus = {}));
const goalStatusToString = (status) => {
    const translation = {
        [GoalStatus.InProgress]: 'En progreso',
        [GoalStatus.Completed]: 'Completada',
        [GoalStatus.CompletedLate]: 'Completada tarde',
    };
    return translation[status];
};
exports.goalStatusToString = goalStatusToString;
