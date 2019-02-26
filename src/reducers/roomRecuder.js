export const roomRecuder = (state = [], action) => {
    switch (action.type) {
        case 'ROOM_STATE_CHANGED':
            return [
                ...action.room
            ];
        default:
            return state
    }
}