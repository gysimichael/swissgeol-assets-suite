import { LV95 } from '@asset-sg/shared';
import { AssetId } from '@/features/assets/asset.model';

export interface Study {
  id: StudyId;
  center: LV95;
  isPoint: boolean;
  assetId: AssetId;
}

export type StudyId = `study_${StudyType}_${number}`;
export enum StudyType {
  Area = 'area',
  Location = 'location',
  Trace = 'trace',
}
