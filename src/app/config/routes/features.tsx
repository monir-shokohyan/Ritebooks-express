import { EBRPage } from '@pages/features/Ebr'
import { IMPage } from '@pages/features/Im'
import { POSPage } from '@pages/features/Pos'
import { SAPage } from '@pages/features/Sa'
import { Paths } from '@shared/api/paths'
import { RouteType } from '@shared/types/router/route-type'
import { ErrorSuspense } from '@shared/ui/error-suspense'

export const featuresRoute: RouteType[] = [
  {
    key: Paths.SimplifiedAccounting,
    guarded: '',
    path: Paths.SimplifiedAccounting,
    element: (
      <ErrorSuspense suspenseKey={Paths.SimplifiedAccounting}>
        <SAPage />
      </ErrorSuspense>
    ),
  },
  {
    key: Paths.InventoryManagement,
    guarded: '',
    path: Paths.InventoryManagement,
    element: (
      <ErrorSuspense suspenseKey={Paths.InventoryManagement}>
        <IMPage />
      </ErrorSuspense>
    ),
  },
  {
    key: Paths.PointOfSale,
    guarded: '',
    path: Paths.PointOfSale,
    element: (
      <ErrorSuspense suspenseKey={Paths.PointOfSale}>
        <POSPage />
      </ErrorSuspense>
    ),
  },
  {
    key: Paths.EssentialBusinessReporting,
    guarded: '',
    path: Paths.EssentialBusinessReporting,
    element: (
      <ErrorSuspense suspenseKey={Paths.EssentialBusinessReporting}>
        <EBRPage />
      </ErrorSuspense>
    ),
  },
]
