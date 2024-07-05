import * as D from 'io-ts/Decoder';

import { LV95FromSpaceSeparatedString } from './lv95';

export const AllStudyDTOFromAPI = D.struct({
  studyId: D.string,
  assetId: D.number,
  isPoint: D.boolean,
  centroid: LV95FromSpaceSeparatedString,
});
export type AllStudyDTOFromAPI = D.TypeOf<typeof AllStudyDTOFromAPI>;
export const AllStudyDTOsFromAPI = D.array(AllStudyDTOFromAPI);

export interface AllStudyRaw {
  studyId: string;
  assetId: number;
  isPoint: boolean;
  centroid: string;
}
