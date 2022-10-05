import * as ACTION_TYPES from "@constants/ActionTypes";

export const Movies_detail              = payload   => ({ type: ACTION_TYPES.MOVIES_DETAIL, data: payload })
export const Movies_now_playing         = payload   => ({ type: ACTION_TYPES.MOVIES_NOW_PLAYING, data: payload })
export const Movies_popular             = payload   => ({ type: ACTION_TYPES.MOVIES_POPULAR, data: payload })
export const Movies_top_rated           = payload   => ({ type: ACTION_TYPES.MOVIES_TOP_RATED, data: payload })
export const Movies_upcoming            = payload   => ({ type: ACTION_TYPES.MOVIES_UPCOMING, data: payload })