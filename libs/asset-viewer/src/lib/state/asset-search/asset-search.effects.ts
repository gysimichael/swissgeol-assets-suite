import { inject, Injectable } from '@angular/core';
import { NavigationStart, Params, Router } from '@angular/router';
import { AppState, assetsPageMatcher, AuthService } from '@asset-sg/client-shared';
import { deepEqual, isNotNull, isNull, ORD } from '@asset-sg/core';
import { AssetSearchQuery, LV95, Polygon } from '@asset-sg/shared';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedPayload } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { filter, map, of, startWith, switchMap, take, withLatestFrom } from 'rxjs';
import { AllStudyService } from '../../services/all-study.service';
import { AssetSearchService } from '../../services/asset-search.service';

import * as actions from './asset-search.actions';
import { LoadingState } from './asset-search.reducer';
import {
  selectAssetDetailLoadingState,
  selectAssetSearchIsInitialized,
  selectAssetSearchQuery,
  selectCurrentAssetDetail,
  selectIsSearchQueryEmpty,
  selectSearchLoadingState,
  selectStudies,
} from './asset-search.selector';

@UntilDestroy()
@Injectable()
export class AssetSearchEffects {
  private readonly store = inject(Store<AppState>);
  private readonly actions$ = inject(Actions);
  private readonly assetSearchService = inject(AssetSearchService);
  private readonly allStudyService = inject(AllStudyService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  public queryParams$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    filter(
      ({ payload }: { payload: RouterNavigatedPayload }) =>
        assetsPageMatcher(payload.routerState.root.firstChild?.url ?? []) !== null
    ),
    map(({ payload }) => {
      const routerState = payload.routerState;
      const url = routerState.root.firstChild?.url ?? [];
      const params = payload.routerState.root.queryParams;
      const query: AssetSearchQuery = {};
      const assetId: number | undefined = readNumberParam(params, QUERY_PARAM_MAPPING.assetId);
      query.text = readStringParam(params, QUERY_PARAM_MAPPING.text);
      query.polygon = readPolygonParam(params, QUERY_PARAM_MAPPING.polygon);
      query.authorId = readNumberParam(params, QUERY_PARAM_MAPPING.authorId);
      const min = readDateParam(params, QUERY_PARAM_MAPPING.createDate.min);
      const max = readDateParam(params, QUERY_PARAM_MAPPING.createDate.max);
      query.createDate = min && max ? { min, max } : undefined;
      query.manCatLabelItemCodes = readArrayParam(params, QUERY_PARAM_MAPPING.manCatLabelItemCodes);
      query.assetKindItemCodes = readArrayParam(params, QUERY_PARAM_MAPPING.assetKindItemCodes);
      query.usageCodes = readArrayParam(params, QUERY_PARAM_MAPPING.usageCodes);
      query.geometryCodes = readArrayParam(params, QUERY_PARAM_MAPPING.geometryCodes);
      query.languageItemCodes = readArrayParam(params, QUERY_PARAM_MAPPING.languageItemCodes);
      query.workgroupIds = readArrayParam<number>(params, QUERY_PARAM_MAPPING.workgroupIds);
      query.favoritesOnly = url.length === 2 && url[1].path === 'favorites';
      return { query, assetId };
    })
  );

  public isMostRecentPage$ = this.router.events.pipe(
    filter((event): event is NavigationStart => event instanceof NavigationStart),
    map((event) => event.restoredState == null),
    startWith(false)
  );

  public readSearchQueryParams1$ = createEffect(() =>
    this.queryParams$.pipe(
      withLatestFrom(
        this.store.select(selectAssetSearchQuery),
        this.store.select(selectCurrentAssetDetail),
        this.isMostRecentPage$
      ),
      filter(([params, storeQuery, storeDetail]) => {
        return !deepEqual(params.query, storeQuery) || params.assetId != storeDetail?.assetId;
      }),
      map(([params, storeQuery, storeDetail, isMostRecentPage]) => {
        const { favoritesOnly, ...query } = params.query;
        const hasNoQueryParams = Object.values(query).every((v) => v == null);
        const hasQueryOrAssetIdInStore =
          !Object.values(storeQuery).every((v) => v == null || v == false) || storeDetail;
        // We only use the values from the store if all of the below are true:
        // - There are no Url query params
        // - There are query or assetId values in the store
        // - The current page is the most recent page
        if (hasNoQueryParams && hasQueryOrAssetIdInStore && isMostRecentPage) {
          return actions.runCombinedSearch({ query: { ...storeQuery, favoritesOnly }, assetId: storeDetail?.assetId });
        }
        return actions.runCombinedSearch({ query: params.query, assetId: params.assetId });
      })
    )
  );

  public updateParamsFromQuery$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.search, actions.resetSearch, actions.setSelectedAsset, actions.clearSelectedAsset),
        withLatestFrom(
          this.store.select(selectAssetSearchQuery),
          this.store.select(selectCurrentAssetDetail),
          this.store.select(selectAssetDetailLoadingState),
          this.store.select(selectSearchLoadingState),
          this.store.select(selectAssetSearchIsInitialized)
        ),
        filter(([_, _query, _asset, _assetLoadingState, _searchLoadingState, isInitialized]) => isInitialized),
        withLatestFrom(this.authService.isInitialized$),
        filter(([_search, isInitialized]) => isInitialized),
        map(([search]) => search),

        switchMap(([_, query, asset, assetLoadingState, searchLoadingState]) => {
          const params: Params = {};
          updatePlainParam(params, QUERY_PARAM_MAPPING.text, query.text);
          updateArrayParam(
            params,
            QUERY_PARAM_MAPPING.polygon,
            query.polygon?.map(({ x, y }) => `${x}:${y}`)
          );
          updatePlainParam(params, QUERY_PARAM_MAPPING.authorId, query.authorId);
          updateDateParam(params, QUERY_PARAM_MAPPING.createDate.min, query.createDate?.min);
          updateDateParam(params, QUERY_PARAM_MAPPING.createDate.max, query.createDate?.max);
          updateArrayParam(params, QUERY_PARAM_MAPPING.manCatLabelItemCodes, query.manCatLabelItemCodes);
          updateArrayParam(params, QUERY_PARAM_MAPPING.assetKindItemCodes, query.assetKindItemCodes);
          updateArrayParam(params, QUERY_PARAM_MAPPING.usageCodes, query.usageCodes);
          updateArrayParam(params, QUERY_PARAM_MAPPING.geometryCodes, query.geometryCodes);
          updateArrayParam(params, QUERY_PARAM_MAPPING.languageItemCodes, query.languageItemCodes);
          updateArrayParam(params, QUERY_PARAM_MAPPING.workgroupIds, query.workgroupIds);
          if (assetLoadingState !== LoadingState.Loading) {
            updatePlainParam(params, QUERY_PARAM_MAPPING.assetId, asset?.assetId);
          }

          const isLoading = searchLoadingState === LoadingState.Loading || assetLoadingState === LoadingState.Loading;
          if (!isLoading) {
            return this.router.navigate([], {
              queryParams: params,
              queryParamsHandling: 'merge',
            });
          } else {
            return of(null);
          }
        })
      ),
    { dispatch: false }
  );

  public initializeAsset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.runCombinedSearch),
      map(({ assetId }) => (assetId == null ? actions.clearSelectedAsset() : actions.selectAsset({ assetId })))
    )
  );

  public initializeQuery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.runCombinedSearch),
      map(({ query }) => actions.search({ query }))
    )
  );

  public mergeQuery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.mergeQuery),
      withLatestFrom(this.store.select(selectAssetSearchQuery)),
      map(([{ query: nextQuery }, currentQuery]) => {
        return actions.search({ query: { ...currentQuery, ...nextQuery } });
      })
    )
  );

  public loadSelectedAsset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.selectAsset),
      switchMap(({ assetId }) => this.assetSearchService.fetchAssetEditDetail(assetId)),
      map((asset) => actions.setSelectedAsset({ asset }))
    )
  );

  public loadStudies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.initialize),
      switchMap(() => this.store.select(selectStudies).pipe(take(1))),
      filter(isNull),
      switchMap(() => this.allStudyService.getAllStudies().pipe(ORD.fromFilteredSuccess)),
      map((studies) => actions.setStudies({ studies }))
    );
  });

  public triggerSearchExecution$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.search, actions.resetSearch, actions.clearPolygon),
      switchMap((action) => {
        if ('query' in action) {
          return of(action.query);
        }
        return this.store.select(selectAssetSearchQuery).pipe(take(1));
      }),
      map((query) => actions.executeSearch({ query }))
    )
  );

  public loadResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.executeSearch),
      switchMap(({ query }) => this.assetSearchService.search(query)),
      map((results) => actions.updateResults({ results }))
    )
  );

  public loadStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.executeSearch),
      switchMap(({ query }) => this.assetSearchService.searchStats(query)),
      map((stats) => actions.updateStats({ stats }))
    )
  );

  public toggleResultsTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateResults),
      map(({ results }) => results.page.total !== 0),
      withLatestFrom(this.store.select(selectIsSearchQueryEmpty)),
      map(([hasResults, isSearchQueryEmpty]) =>
        !hasResults || isSearchQueryEmpty ? actions.closeResults() : actions.openResults()
      )
    )
  );

  public handleAssetClick$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.assetClicked),
      withLatestFrom(this.store.select(selectCurrentAssetDetail)),
      map(([{ assetId }, currentAssetDetail]) =>
        assetId === currentAssetDetail?.assetId ? actions.clearSelectedAsset() : actions.selectAsset({ assetId })
      )
    );
  });

  public closeDetailOnUpdateSearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.search),
      withLatestFrom(this.store.select(selectAssetDetailLoadingState)),
      filter(([, loadingState]) => loadingState != LoadingState.Loading),
      map(() => actions.clearSelectedAsset())
    );
  });
}

const QUERY_PARAM_MAPPING = {
  text: 'search[text]',
  polygon: 'search[polygon]',
  authorId: 'search[author]',
  createDate: {
    min: 'search[createDate][min]',
    max: 'search[createDate][max]',
  },
  manCatLabelItemCodes: 'search[manCat]',
  assetKindItemCodes: 'search[kind]',
  usageCodes: 'search[usage]',
  geometryCodes: 'search[geometry]',
  languageItemCodes: 'search[lang]',
  assetId: 'assetId',
  workgroupIds: 'search[workgroup]',
  categories: 'search[categories]',
};

const updatePlainParam = (params: Params, name: string, value: string | number | undefined): void => {
  params[name] = value == null || value === '' ? null : value;
};

const updateDateParam = (params: Params, name: string, value: Date | undefined): void => {
  updatePlainParam(params, name, value?.toISOString());
};

const updateArrayParam = (params: Params, name: string, value: Array<string | number> | undefined): void => {
  updatePlainParam(params, name, value == null ? undefined : JSON.stringify(value));
};

const readStringParam = (params: Params, name: string): string | undefined => params[name];

const readNumberParam = (params: Params, name: string): number | undefined => {
  const stringValue = readStringParam(params, name);
  if (stringValue == null) {
    return undefined;
  }
  const value = parseFloat(stringValue);
  if (isNaN(value)) {
    return undefined;
  }
  return value;
};

const readArrayParam = <T>(params: Params, name: string): T[] | undefined => {
  const stringValue = readStringParam(params, name);
  if (stringValue == null) {
    return undefined;
  }
  return JSON.parse(stringValue);
};

const readDateParam = (params: Params, name: string): Date | undefined => {
  const stringValue = readStringParam(params, name);
  if (stringValue == null) {
    return undefined;
  }
  return new Date(stringValue);
};

const readPolygonParam = (params: Params, name: string): Polygon | undefined => {
  const arrayValue = readArrayParam<string>(params, name);
  if (arrayValue == null) {
    return undefined;
  }
  return arrayValue
    .map((it) => {
      const parts = it.split(':');
      if (parts.length !== 2) {
        return null;
      }
      const x = parseFloat(parts[0]);
      const y = parseFloat(parts[1]);
      if (isNaN(x) || isNaN(y)) {
        return null;
      }
      return { x, y } as LV95;
    })
    .filter(isNotNull);
};
