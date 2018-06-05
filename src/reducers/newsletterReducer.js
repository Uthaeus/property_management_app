import { 
  FETCH_NEWSLETTER_ARCHIVE,
  FETCH_NEWSLETTER_BY_ID
} from "../actions/types";

const INITIAL_STATE = {
  archive: [],
  latestItem: {},
  fetchedItem: {}
}


export default function(state = INITIAL_STATE, action) {
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

      if (state.latestItem._id == action.payload) {
        return { ...state, fetchedItem: state.latestItem }
      }
      
      const fetchedItem = state.archive.find( newsletterItem => {
        if (newsletterItem._id == action.payload) {
          return newsletterItem;
        }
      })
      return {
        ...state,
        fetchedItem
      }
    default: return state;
  }
}