import React, { useEffect, Suspense } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import './scss/style.scss'
import { useSelector } from 'react-redux'
// import routes from './layout/routes'
import { AppFooter, AppHeader, AppSidebar } from './components'
import { CSpinner } from '@coreui/react'

// Container
// const Layout = React.lazy(() => import('./layout/Layout'))

// Pages
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))
const Login = React.lazy(() => import('./pages/login/Login'))
const Stock = React.lazy(() => import('./pages/stock/stock'))
const UpdateStock = React.lazy(() => import('./pages/stock/updateStock/updateStock'))
const Orders = React.lazy(() => import('./pages/orders/orders'))
const EditOrder = React.lazy(() => import('./pages/orders/edit'))
const ShowOrder = React.lazy(() => import('./pages/orders/show'))
const Financial = React.lazy(() => import('./pages/financial/financial'))
const FinancialDetails = React.lazy(
  () => import('./pages/financial/financialDetails/financialDetails'),
)
const Products = React.lazy(() => import('./pages/products/products'))
const ProductOrders = React.lazy(() => import('./pages/products/productOrders'))
const LabelsTranslate = React.lazy(() => import('./pages/products/labelsTranslate'))
const Categories = React.lazy(() => import('./pages/products/categories'))
const RequestProduct = React.lazy(() => import('./pages/requestProduct/requestProduct'))
const Notify = React.lazy(() => import('./pages/notifyMe/notifyMe'))
const Countries = React.lazy(() => import('./pages/countries/countries'))
const CountryCities = React.lazy(() => import('./pages/countries/countryCities'))
const Cities = React.lazy(() => import('./pages/cities/cities'))
const CityRegions = React.lazy(() => import('./pages/cities/cityRegions'))
const Regions = React.lazy(() => import('./pages/regions/regions'))
const Offers = React.lazy(() => import('./pages/offers/offers'))
const OffersOneFree = React.lazy(() => import('./pages/offers/oneFree/oneFree'))
const OffersDuration = React.lazy(() => import('./pages/offers/duration/duration'))
const OffersExtra = React.lazy(() => import('./pages/offers/extra/extra'))
const EditOffer = React.lazy(() => import('./pages/offers/extra/edit'))
const OfferMembers = React.lazy(() => import('./pages/offers/extra/members'))
const OffersVoucher = React.lazy(() => import('./pages/offers/voucher/voucher'))
const OffersVoucherFree = React.lazy(() => import('./pages/offers/voucherFree/voucherFree'))
const OffersVoucherUserFree = React.lazy(
  () => import('./pages/offers/voucherUserFree/voucherUserFree'),
)
const OffersCommission = React.lazy(() => import('./pages/offers/commission/commision'))
const OffersSettings = React.lazy(() => import('./pages/offers/settings/settings'))
const Discounts = React.lazy(() => import('./pages/discounts/discounts'))
const EditCode = React.lazy(() => import('./pages/discounts/edit'))
const Benficary = React.lazy(() => import('./pages/discounts/benficary'))
const Customers = React.lazy(() => import('./pages/customers/customers'))
const CustomerOrders = React.lazy(() => import('./pages/customers/customerOrders'))
const EditUser = React.lazy(() => import('./pages/customers/editUser'))
const CreateUser = React.lazy(() => import('./pages/customers/createUser'))
const Comments = React.lazy(() => import('./pages/comments/comments'))
const Contacts = React.lazy(() => import('./pages/contacts/contacts'))
const Reports = React.lazy(() => import('./pages/reports/reports'))
const ProductsPrices = React.lazy(() => import('./pages/reports/productsPrices/productsPrices'))
const AffiliateSystem = React.lazy(() => import('./pages/reports/affiliateSystem/affiliate'))
const CustomersLog = React.lazy(() => import('./pages/reports/customersLog/customersLog'))
const CustomersBalances = React.lazy(
  () => import('./pages/reports/customersBalances/customersBalances'),
)
const CustomersOrders = React.lazy(() => import('./pages/reports/customersOrders/customersOrders'))
const CustomersSearch = React.lazy(() => import('./pages/reports/customersSearch/customersSearch'))
const RewardsPoins = React.lazy(() => import('./pages/reports/rewardsPoins/rewardsPoints'))
const Taxes = React.lazy(() => import('./pages/reports/taxes/taxes'))
const Shipping = React.lazy(() => import('./pages/reports/shipping/shipping'))
const Refund = React.lazy(() => import('./pages/reports/refund/refund'))
const RefundDetails = React.lazy(() => import('./pages/reports/refund/details'))
const Sales = React.lazy(() => import('./pages/reports/sales/sales'))
const DiscountCodes = React.lazy(() => import('./pages/reports/discountCodes/discountCodes'))
const ProductsVisits = React.lazy(() => import('./pages/reports/productsVisits/productsVisits'))
const ProductsPurchased = React.lazy(
  () => import('./pages/reports/productsPurchased/productsPurchased'),
)
const ProductsPurchasedDetails = React.lazy(
  () => import('./pages/reports/productsPurchased/details'),
)
const AbandonedCarts = React.lazy(() => import('./pages/reports/abandonedCarts/abandonedCarts'))
const InactiveCustomers = React.lazy(
  () => import('./pages/reports/inactiveCustomers/inactiveCustomers'),
)
const StockReport = React.lazy(() => import('./pages/reports/stock/stockReport'))
const NewProducts = React.lazy(() => import('./pages/reports/newProducts/newProducts'))
const CommentsReport = React.lazy(() => import('./pages/reports/comments/comments'))
const Payments = React.lazy(() => import('./pages/reports/payments/payments'))
const FavProducts = React.lazy(() => import('./pages/reports/favProducts/favProducts'))
const OffersReport = React.lazy(() => import('./pages/reports/offers/offers'))
const Abandoned = React.lazy(() => import('./pages/abandonedCarts/abandonedCarts'))
const CategoriesLinks = React.lazy(() => import('./pages/links/categories'))
const ProductsLinks = React.lazy(() => import('./pages/links/products'))
const PagesLinks = React.lazy(() => import('./pages/links/pages'))
const TemplatesPage = React.lazy(() => import('./pages/templatesPage/templates'))
const StylesPage = React.lazy(() => import('./pages/stylesPage/styles'))
const CreateStyle = React.lazy(() => import('./pages/stylesPage/createStyle'))
const MailingTemplates = React.lazy(() => import('./pages/mailingTemplates/mailingTemplates'))
const MailingList = React.lazy(() => import('./pages/mailingList/mailingList'))
const Notifications = React.lazy(() => import('./pages/notificationsPage/notifications'))
const Tickets = React.lazy(() => import('./pages/tickets/activeTickets'))
const OnlineCustomers = React.lazy(() => import('./pages/onlineCustomers/onlineCustomers'))
const Roles = React.lazy(() => import('./pages/security/roles/roles'))
const Permissions = React.lazy(() => import('./pages/security/roles/permissions'))
const Admins = React.lazy(() => import('./pages/security/admins/admins'))
const AddAdmin = React.lazy(() => import('./pages/security/admins/addAdmin'))
const Settings = React.lazy(() => import('./pages/settingsPage/settings'))
const Error = React.lazy(() => import('./pages/page404/Page404'))
function App() {
  const direction = useSelector((state) => state.lang.direction)

  useEffect(() => {
    document.documentElement.dir = direction
  }, [direction])

  return (
    <>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center">
            <CSpinner color="primary" />
          </div>
        }
      >
        <div className="d-flex flex-column">
          <AppSidebar />
          <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader />
            <div className="container body flex-grow-1 px-3">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route exact path="/login" name="Login Page" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="updateStock" element={<UpdateStock />} />
                <Route path="/orders">
                  <Route path="all" element={<Orders />} />
                  <Route path="edit">
                    <Route path=":id" element={<EditOrder />} />
                  </Route>
                  <Route path=":id">
                    <Route path="show" element={<ShowOrder />} />
                  </Route>
                </Route>
                <Route path="/financial_transactions" element={<Financial />}>
                  <Route path="details">
                    <Route path=":id" element={<FinancialDetails />} />
                  </Route>
                </Route>
                <Route path="/products" element={<Products />}>
                  <Route path="productOrder">
                    <Route path=":id" element={<ProductOrders />} />
                  </Route>
                  <Route path="labelsTranslate">
                    <Route path=":id" element={<LabelsTranslate />} />
                  </Route>
                </Route>
                <Route path="/request" element={<RequestProduct />} />
                <Route path="/notify" element={<Notify />} />
                <Route path="/product">
                  <Route path="categories" element={<Categories />} />
                </Route>
                <Route path="/country" element={<Countries />}>
                  <Route path="cities">
                    <Route path=":id" element={<CountryCities />} />
                  </Route>
                </Route>
                <Route path="/city" element={<Cities />}>
                  <Route path="regions">
                    <Route path=":id" element={<CityRegions />} />
                  </Route>
                </Route>
                <Route path="/regions" element={<Regions />} />
                <Route path="/offers" element={<Offers />}>
                  <Route path="extra" element={<OffersExtra />} />
                  <Route path="edit/:id" element={<EditOffer />} />
                  <Route path="members/:id" element={<OfferMembers />} />
                  <Route path="duration" element={<OffersDuration />} />
                  <Route path="onefree" element={<OffersOneFree />} />
                  <Route path="voucher" element={<OffersVoucher />} />
                  <Route path="voucher-free" element={<OffersVoucherFree />} />
                  <Route path="voucher-user-free" element={<OffersVoucherUserFree />} />
                  <Route path="commission" element={<OffersCommission />} />
                  <Route path="settings" element={<OffersSettings />} />
                </Route>
                <Route path="/discounts" element={<Discounts />}>
                  <Route path="edit">
                    <Route path=":id" element={<EditCode />} />
                  </Route>
                  <Route path="benficary">
                    <Route path=":id" element={<Benficary />} />
                  </Route>
                </Route>
                <Route path="/customers" element={<Customers />}>
                  <Route path="orders/:id" element={<CustomerOrders />} />
                  <Route path="editUser/:id" element={<EditUser />} />
                  <Route path="create" element={<CreateUser />} />
                </Route>
                <Route path="/reports" element={<Reports />}>
                  <Route path="payments" element={<Payments />} />
                  <Route path="commentsReport" element={<CommentsReport />} />
                  <Route path="abandoned_carts" element={<AbandonedCarts />} />
                  <Route path="fav_products" element={<FavProducts />} />
                  <Route path="products_prices" element={<ProductsPrices />} />
                  <Route path="affiliateSystem" element={<AffiliateSystem />} />
                  <Route path="log" element={<CustomersLog />} />
                  <Route path="customers_balances" element={<CustomersBalances />} />
                  <Route path="customers_orders" element={<CustomersOrders />} />
                  <Route path="customers_search" element={<CustomersSearch />} />
                  <Route path="rewards_points" element={<RewardsPoins />} />
                  <Route path="taxes" element={<Taxes />} />
                  <Route path="shipping" element={<Shipping />} />
                  <Route path="refund" element={<Refund />}>
                    <Route path=":id" element={<RefundDetails />} />
                  </Route>
                  <Route path="sales" element={<Sales />} />
                  <Route path="discount" element={<DiscountCodes />} />
                  <Route path="products_visits" element={<ProductsVisits />} />
                  <Route path="products_purchased" element={<ProductsPurchased />}>
                    <Route path=":id" element={<ProductsPurchasedDetails />} />
                  </Route>
                  <Route path="abandoned_carts" element={<AbandonedCarts />} />
                  <Route path="inactive_customers" element={<InactiveCustomers />} />
                  <Route path="stock" element={<StockReport />} />
                  <Route path="new_products" element={<NewProducts />} />
                  <Route path="offersReport" element={<OffersReport />} />
                </Route>
                <Route path="/offers" element={<Offers />}>
                  <Route path="extra" element={<OffersExtra />} />
                  <Route path="edit/:id" element={<EditOffer />} />
                  <Route path="members/:id" element={<OfferMembers />} />
                  <Route path="duration" element={<OffersDuration />} />
                  <Route path="onefree" element={<OffersOneFree />} />
                  <Route path="voucher" element={<OffersVoucher />} />
                  <Route path="voucher-free" element={<OffersVoucherFree />} />
                  <Route path="voucher-user-free" element={<OffersVoucherUserFree />} />
                  <Route path="commission" element={<OffersCommission />} />
                  <Route path="settings" element={<OffersSettings />} />
                </Route>
                <Route path="/discounts" element={<Discounts />}>
                  <Route path="edit/:id" element={<EditCode />} />
                  <Route path="benficary/:id" element={<Benficary />} />
                </Route>
                <Route path="/customers" element={<Customers />}>
                  <Route path="orders/:id" element={<CustomerOrders />} />
                  <Route path="editUser/:id" element={<EditUser />} />
                  <Route path="create" element={<CreateUser />} />
                </Route>
                <Route path="/comments" element={<Comments />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/abandoned_carts" element={<Abandoned />} />
                <Route path="/links" element={<PagesLinks />}>
                  <Route path="categories" element={<CategoriesLinks />} />
                  <Route path="products" element={<ProductsLinks />} />
                  <Route path="pages" element={<PagesLinks />} />
                </Route>
                <Route path="/templates" element={<TemplatesPage />} />
                <Route path="/styles" element={<StylesPage />}>
                  <Route path="create" element={<CreateStyle />} />
                </Route>
                <Route path="/mailingTemplates" element={<MailingTemplates />} />
                <Route path="/mailingList" element={<MailingList />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/tickets">
                  <Route path="active" element={<Tickets />} />
                </Route>
                <Route path="/onlineCustomers" element={<OnlineCustomers />} />
                <Route path="/role" element={<Roles />}>
                  <Route path="create" element={<Permissions />} />
                </Route>
                <Route path="/admins" element={<Admins />}>
                  <Route path="create" element={<AddAdmin />} />
                </Route>
                <Route path="/settings" element={<Settings />} />
                <Route path="*" name="Error" element={<Error />} />
              </Routes>
              <Outlet />
            </div>
            <AppFooter />
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default App
