export const REMOVE_CLIENT = 'REMOVE_CLIENT';
export const clientRemove = (state) => {
    return ({ type: REMOVE_CLIENT, array: state });
}