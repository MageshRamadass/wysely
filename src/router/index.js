import Vue from 'vue'
import VueRouter from 'vue-router'

import WyselyView from '../views/sign-in&up/WyselyView.vue'
import PrivacyPolice from '../views/sign-in&up/PrivacyPolice.vue'



import TermsConditions from '../views/sign-in&up/TermsConditions.vue'

import SignUp from '../views/sign-in&up/SignUp.vue'
import LandingView from '../views/sign-in&up/LandingView.vue'
import WelcomeOne from '../views/sign-in&up/WelcomeOne.vue'
import WelcomePagetwo from '../views/sign-in&up/WelcomePagetwo.vue'
import WelcomeTre from '../views/sign-in&up/WelcomeTre.vue'

import LayOut from '../components/Layout/LayOut.vue'

import DashBoard from '../views/pages/DashBoard.vue'

import HolDings from '../views/pages/portfolio_screens/HolDings.vue'
import NewHolding from '../views/pages/portfolio_screens/newHolding.vue'

import PosiTions from '../views/pages/portfolio_screens/PosiTions.vue'
import CorporateActions from '../views/pages/portfolio_screens/CorporateActions.vue'
import DiviDends from '../views/pages/portfolio_screens/DiviDends.vue'
// import Hpr from '../views/pages/fees_taxes/HPR.vue'

import Profit_Loss from '../views/pages/fees_taxes/Profit_Loss.vue'
import Tax_Profit_Loss from '../views/pages/fees_taxes/Tax_Profit_Loss.vue'
import TaxlossHarvesting from '../views/pages/fees_taxes/TaxlossHarvesting.vue'

import TradeBook from '../views/pages/insights_reports/TradeBook.vue'

import NotifiCations from '../views/pages/NotifiCations.vue'

import UserProfile from '../views/pages/settings_screens/UserProfile.vue'
import WealthProfile from '../views/pages/settings_screens/WealthProfile.vue'
import FamiLy from '../views/pages/settings_screens/FamiLy.vue'
import AccoUnts from '../views/pages/settings_screens/AccoUnts.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    // redirect: 'WyselyView',
    name: 'WyselyView',
    component: WyselyView,
  },
  {
    path: '/privacy',
    name: 'PrivacyPolice',
    component: PrivacyPolice,
  },
  {
    path: '/terms',
    name: 'terms and conditions',
    component: TermsConditions,
  },
 

  {
    path: '/signin',
    name: 'signin',
    component: SignUp,
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: LandingView,
  },
  {
    path: '/preferenceone',
    name: 'preferenceone',
    component: WelcomeOne,
  },
  {
    path: '/preferencetwo',
    name: 'preferencetwo',
    component: WelcomePagetwo,
  },
  {
    path: '/preferencecompleted',
    name: 'preferencecompleted',
    component: WelcomeTre,
  },

  {
    path: '/signin',
    redirect: 'signin',
    name: 'Layout',
    component: LayOut,
    children: [
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: DashBoard,
      },
      {
        path: '/Holding',
        name: 'Holding',
        component: HolDings,
      },
      {
        path: '/newholding',
        name: 'NewHolding',
        component: NewHolding,
      },
      {
        path: '/Positions',
        name: 'Positions',
        component: PosiTions,
      },
      {
        path: '/Corporate_actions',
        name: 'Corporate_actions',
        component: CorporateActions,
      },
      {
        path: '/Dividends',
        name: 'Dividends',
        component: DiviDends,
      },
      {
        path: '/Tradebook',
        name: 'Tradebook',
        component: TradeBook,
      },
      // {
      //   path: '/hpr',
      //   name: 'hpr',
      //   component: Hpr,
      // },
      {
        path: '/Profit_Loss',
        name: 'Profit & Loss',
        component: Profit_Loss,
      },
      {
        path: '/Tax_Profit_Loss',
        name: 'Tax Profit & Loss',
        component: Tax_Profit_Loss,
      },
      {
        path: '/Taxlossharvesting',
        name: 'Taxlossharvesting',
        component: TaxlossHarvesting,
      },
      {
        path: '/Notifications',
        name: 'Notifications',
        component: NotifiCations,
      },
      {
        path: '/Userprofile',
        name: 'Userprofile',
        component: UserProfile,
      },
      {
        path: '/Wealthprofile',
        name: 'Wealthprofile',
        component: WealthProfile,
      },
      {
        path: '/Family',
        name: 'Family',
        component: FamiLy,
      },
      {
        path: '/Accounts',
        name: 'accounts',
        component: AccoUnts,
      },

    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
})

export default router
