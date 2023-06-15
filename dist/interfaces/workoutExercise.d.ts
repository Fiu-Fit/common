import { Unit } from './unit';
export interface WorkoutExercise {
    exerciseId: string;
    sets: number;
    reps: number;
    weight?: number;
    unit: Unit;
    repDuration: number;
    exercise?: {
        _id: string;
        name: string;
        description: string;
        duration: number;
    };
}
