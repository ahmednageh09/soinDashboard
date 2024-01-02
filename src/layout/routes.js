import React from 'react'

const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'))
const Stock = React.lazy(() => import('../pages/stock/stock'))
const UpdateStock = React.lazy(() => import('../pages/stock/updateStock/updateStock'))
const Orders = React.lazy(() => import('../pages/orders/orders'))
const Financial = React.lazy(() => import('../pages/financial/financial'))
const FinancialDetails = React.lazy(() =>
  import('../pages/financial/financialDetails/financialDetails'),
)
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
const CustomersSearch = React.lazy(() => import('../pages/reports/customersSearch/customersSearch'))
const RewardsPoins = React.lazy(() => import('../pages/reports/rewardsPoins/rewardsPoints'))
const Taxes = React.lazy(() => import('../pages/reports/taxes/taxes'))
const Shipping = React.lazy(() => import('../pages/reports/shipping/shipping'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/stock', name: 'Stock', element: Stock },
  { path: '/stocks/updateStock', name: 'Stock / Update Stock', element: UpdateStock },
  { path: '/orders/all', name: 'Orders', element: Orders },
  { path: '/orders/financial_transactions', name: 'Financial Transactions', element: Financial },
  {
    path: '/orders/financial_transactions/details',
    name: 'Transactions Details',
    element: FinancialDetails,
  },
  { path: '/countries', name: 'Countries', element: Countries },
  { path: '/cities', name: 'Cities', element: Cities },
  { path: '/regions', name: 'Regions', element: Regions },
  { path: '/reports', name: 'Reports', element: Reports },
  { path: '/reports/products_prices', name: 'Products Prices', element: ProductsPrices },
  { path: '/reports/affiliateSystem', name: 'Affiliate System', element: AffiliateSystem },
  { path: '/reports/log', name: 'Customers Log', element: CustomersLog },
  { path: '/reports/customers_balances', name: 'Customers Balances', element: CustomersBalances },
  { path: '/reports/customers_orders', name: 'Customers Orders', element: CustomersOrders },
  { path: '/reports/customers_search', name: 'Customers Search', element: CustomersSearch },
  { path: '/reports/rewards_points', name: 'Rewards Points', element: RewardsPoins },
  { path: '/reports/taxes', name: 'Taxes', element: Taxes },
  { path: '/reports/shipping', name: 'Shipping', element: Shipping },
]

export default routes
