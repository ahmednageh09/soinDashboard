import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAudio,
  cilBadge,
  cilBell,
  cilBlur,
  cilBullhorn,
  cilBurn,
  cilCash,
  cilCheckCircle,
  cilClipboard,
  cilClone,
  cilCommentBubble,
  cilExternalLink,
  cilFlagAlt,
  cilGift,
  cilGlobeAlt,
  cilGroup,
  cilImage,
  cilInput,
  cilLibrary,
  cilLocationPin,
  cilMap,
  cilPhone,
  cilSettings,
  cilSpeedometer,
  cilStar,
  cilStorage,
  cilTouchApp,
  cilViewQuilt,
  cilXCircle,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'MAIN',
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/theme/colors',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Stock',
    to: '/theme/typography',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Orders',
    to: '/theme/typography',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Financial Transactions',
    to: '/theme/typography',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Products',
  },
  {
    component: CNavItem,
    name: 'Products',
    to: '/theme/colors',
    icon: <CIcon icon={cilBlur} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Request Product',
    to: '/theme/typography',
    icon: <CIcon icon={cilFlagAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notify Me',
    to: '/theme/typography',
    icon: <CIcon icon={cilBullhorn} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Areas',
  },
  {
    component: CNavItem,
    name: 'Countries',
    to: '/theme/typography',
    icon: <CIcon icon={cilGlobeAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cities',
    to: '/theme/typography',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Regions',
    to: '/theme/typography',
    icon: <CIcon icon={cilLocationPin} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: 'Offers',
    to: '/theme/typography',
    icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Discounts',
    to: '/theme/typography',
    icon: <CIcon icon={cilBurn} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Marketing',
  },
  {
    component: CNavItem,
    name: 'Customers',
    to: '/theme/typography',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Comments',
    to: '/theme/typography',
    icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Contacts',
    to: '/theme/typography',
    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Abandoned Carts',
    to: '/theme/typography',
    icon: <CIcon icon={cilXCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Links',
    to: '/theme/typography',
    icon: <CIcon icon={cilTouchApp} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Categories',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Products',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Pages',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Settings',
  },
  {
    component: CNavItem,
    name: 'Templates',
    to: '/theme/typography',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Mailing Templates',
    to: '/theme/typography',
    icon: <CIcon icon={cilClone} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Styles',
    to: '/theme/typography',
    icon: <CIcon icon={cilViewQuilt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Mailing List',
    to: '/theme/typography',
    icon: <CIcon icon={cilExternalLink} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notifications',
    to: '/theme/typography',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Tickets',
    to: '/theme/typography',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Active Tickets',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Ticket Settings',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Online Customers',
    to: '/theme/typography',
    icon: <CIcon icon={cilAudio} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Images Settings',
    to: '/theme/typography',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Security',
    to: '/theme/typography',
    icon: <CIcon icon={cilBadge} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: '/theme/typography',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
