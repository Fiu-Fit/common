export enum Unit {
  SECONDS = 0,
  REPETITIONS = 1,
  METERS = 2,
  UNRECOGNIZED = -1,
}

export const UnitEnumToName = {
  [Unit.SECONDS]: "Segundos",
  [Unit.REPETITIONS]: "Repeticiones",
  [Unit.METERS]: "Metros",
  [Unit.UNRECOGNIZED]: "Desconocido",
};
