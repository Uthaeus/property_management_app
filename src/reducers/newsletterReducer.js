import { FETCH_NEWSLETTER_ARCHIVE } from "../actions/types";


export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_NEWSLETTER_ARCHIVE:
      const latestItem = action.payload[0];
      const archive = action.payload;
      archive.shift();
      return { 
        ...state, 
        archive, 
        latestItem
      }
    default: return state;
  }
}