import { Exercise } from './exercise.interface';

export interface Training{
    day: string,
    level: number,
    target: string,
    workout: Exercise[]
}