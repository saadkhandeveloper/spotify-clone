export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //REMOVE AFTER FINISHED DEVELOPMENT
// token:"BQCwua3JB_B-nEtMFYb3wW4E3ex1YrqkPCzTEvc8Hs2AEMApdGKVWGAWvgL8rDOJrP0szC96osTPuJrgbBqGDawmoB8u_FHMfyQB4ISHt54DG2sXwGSidJ3YdUMILxP3wVJITS1mzsWDRtYyKzruOR2cKB2oepMG_co5kHA7lcb1hNLIZqxH-ReNsxPsLkvjcEJZoIdUmbsHncaw8rWkMQ"
};

const reducer = (state, action) => {

//ACtion 

switch(action.type) {
    case "SET_USER":
        return {
            ...state,
            user:action.user
        };
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token,
            };
case "SET_PLAYLISTS":
    return {
        ...state,
        playlists:action.playlists,
    };

    case "SET_DISCOVER_WEEKLY":
        return {
            ...state,
            discover_weekly:action.discover_weekly,
        }

 default:
    return state;
}

}

export default reducer;