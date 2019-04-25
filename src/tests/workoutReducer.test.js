import workouts from '../redux/reducers/workout';

describe('workouts', () => {
    test('should be an empty array by default.', () => {
        const returnState = workouts(undefined, { type: undefined });
        expect(Array.isArray(returnState)).toBe(true);
        expect(returnState.length).toBe(0);
        expect(returnState).toEqual([]);
    });

    test('should take on the value of any array given.', () => {
        const newWorkoutState = ['test1', 'test2', 'test3'];
        const returnState = workouts(undefined, { type: 'SET_WORKOUTS', payload: newWorkoutState });
        expect(returnState).toEqual(newWorkoutState);
    });
});