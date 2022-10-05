import * as ACTION_TYPES from "@constants/ActionTypes";

export const TV_detail              = payload   => ({ type: ACTION_TYPES.TV_DETAIL, data: payload })
export const TV_airing_today        = payload   => ({ type: ACTION_TYPES.TV_AIRING_TODAY, data: payload })
export const TV_on_the_air          = payload   => ({ type: ACTION_TYPES.TV_ON_THE_AIR, data: payload })
export const TV_popular             = payload   => ({ type: ACTION_TYPES.TV_POPULAR, data: payload })
export const TV_top_rated           = payload   => ({ type: ACTION_TYPES.TV_TOP_RATED, data: payload })