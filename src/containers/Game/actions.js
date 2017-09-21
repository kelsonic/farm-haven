import {
  SELECT_FARM,
} from './constants';

export function selectFarmAction(farm) {
  return {
    type: SELECT_FARM,
    farm,
  };
}
