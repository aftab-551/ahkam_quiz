import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
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
    name: 'EDIT CREDENTIALS DETAILS',
  },
  {
    component: CNavItem,
    name: 'Credentials Details',
    to: '/credentials',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'ADD QUESTION',
  },
  {
    component: CNavGroup,
    name: 'Add Questions',
    to: '/questions',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Questions',
        to: '/questions/add-questions',
      },
      {
        component: CNavItem,
        name: 'All Questions',
        to: '/questions/all-questions',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'USERS',
  },
  {
    component: CNavItem,
    name: 'View Users',
    to: '/Users',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  }
]

export default _nav
