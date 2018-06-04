import { 
  FETCH_NEWSLETTER_ARCHIVE,
  FETCH_NEWSLETTER_BY_ID
} from "../actions/types";


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

    case FETCH_NEWSLETTER_BY_ID:
      var fetchedItem = {};
      state.archive.find((object, index) => {
        if (object._id == action.payload) {
          fetchedItem = object;
        }
      })
      return {
        ...state,
        fetchedItem
      }
    default: return state;
  }
}