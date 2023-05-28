"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceName = exports.RoleNameToEnum = exports.RoleEnumToName = exports.DEFAULT_PROTO_PATH = void 0;
exports.DEFAULT_PROTO_PATH = 'node_modules/@fiu-fit/common/src/protos';
exports.RoleEnumToName = {
    0: 'Admin',
    1: 'Athlete',
    2: 'Trainer',
};
exports.RoleNameToEnum = {
    Admin: 0,
    Athlete: 1,
    Trainer: 2,
};
exports.ServiceName = {
    Workout: 'workout',
    User: 'user',
    Progress: 'progress',
    Goals: 'goals',
    Ratings: 'ratings',
    Followers: 'followers'
};
