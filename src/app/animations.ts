import { animate, style, transition, trigger } from '@angular/animations';

const enterTrans = (targetOpacity: number = 1) => 
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('1s ease-in', style({
            opacity: targetOpacity
        }))
    ]);

const leaveTrans = (targetOpacity: number = 1) =>
    transition(':leave', [
        style({
            opacity: targetOpacity
        }),
        animate('1s ease-out', style({
            opacity: 0
        }))
    ]);

export const fadeInOut = (targetOpacity: number = 1) => trigger(
    'fadeInOut',
    [
        enterTrans(targetOpacity),
        leaveTrans(targetOpacity)
    ]);
export const fadeOutIn = (targetOpacity: number = 1) => trigger(
    'fadeOutIn',
    [
        leaveTrans(targetOpacity),
        enterTrans(targetOpacity)
    ]);
