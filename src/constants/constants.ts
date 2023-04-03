export const DEFAULT_PROTO_PATH = 'node_modules/@fiu-fit/common/src/protos';

export const RoleEnumToName: Record<number, string> = {
    0: 'Admin',
    1: 'Athlete',
    2: 'Trainer',
};

export const RoleNameToEnum: Record<string, number> = {
    Admin: 0,
    Athlete: 1,
    Trainer: 2,
};
