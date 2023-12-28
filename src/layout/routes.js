import React from 'react'

const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'))
const Stock = React.lazy(() => import('../pages/stock/stock'))
const Countries = React.lazy(() => import('../pages/countries/countries'))
const Cities = React.lazy(() => import('../pages/cities/cities'))
const Regions = React.lazy(() => import('../pages/regions/regions'))
const Reports = React.lazy(() => import('../pages/reports/reports'))
const ProductsPrices = React.lazy(() => import('../pages/reports/productsPrices/productsPrices'))
const AffiliateSystem = React.lazy(() => import('../pages/reports/affiliateSystem/affiliate'))
const CustomersLog = React.lazy(() => import('../pages/reports/customersLog/customersLog'))
const CustomersBalances = React.lazy(() =>
  import('../pages/reports/customersBalances/customersBalances'),
)
const CustomersOrders = React.lazy(() => import('../pages/reports/customersOrders/customersOrders'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/stock', name: 'Stock', element: Stock },
  { path: '/countries', name: 'Countries', element: Countries },
  { path: '/cities', name: 'Cities', element: Cities },
  { path: '/regions', name: 'Regions', element: Regions },
  { path: '/reports', name: 'Reports', element: Reports },
  { path: '/reports/products_prices', name: 'Products Prices', element: ProductsPrices },
  { path: '/reports/affiliateSystem', name: 'Affiliate System', element: AffiliateSystem },
  { path: '/reports/log', name: 'Customers Log', element: CustomersLog },
  { path: '/reports/customers_balances', name: 'Customers Balances', element: CustomersBalances },
  { path: '/reports/customers_orders', name: 'Customers Orders', element: CustomersOrders },
]

export default routes
