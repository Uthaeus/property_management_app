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