import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'



Vue.use(Router)

import VueRouter from 'vue-router'
import Header from '@/components/header'
import HeaderHeadline from '@/components/header-headline'
import HeaderGuidance from '@/components/header-guidance'
import HeaderLoginLink from '@/components/header-loginLink'
import HeaderMascot from '@/components/header-mascot'
import GlobalInputBlock from '@/components/global-inputBlock'
import LoginFrame from '@/components/loginFrame'
import LoginFrameLoginLabel from '@/components/loginFrame-loginLabel'
import LoginFrameFindPasswdLabel from '@/components/loginFrame-findPasswdLabel'
import LoginFrameFindPasswdForm from '@/components/loginFrame-findPasswdForm'
import LoginFrameFindPasswdFormVerifyCodeButton from '@/components/loginFrame-findPasswdForm-verifyCodeButton'
import LoginFrameSubmitButton from '@/components/loginFrame-submitButton'
import LoginFrameLoginForm from '@/components/loginFrame-loginForm'
import LoginFrameRegisterForm from '@/components/loginFrame-registerForm'
import LoginLink from '@/components/loginLink'

import Login from '@/components/PAGE-login'

Vue.use(VueRouter);



export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    // {
    //   path:'/header-guidance',
    //   component: HeaderGuidance
    // },
    // {
    //   path:'/header-headline',
    //   component: HeaderHeadline
    // },
    // {
    //   path:'/header-loginLink',
    //   component: HeaderLoginLink
    // },
    // {
    //   path:'/header-mascot',
    //   component: HeaderMascot
    // },
    // {
    //   path:'/header',
    //   component: Header
    // },
    // {
    //   path:'/global-inputBlock',
    //   component: GlobalInputBlock
    // },
    // {
    //   path:'loginFrame-loginLabel',
    //   component: LoginFrameLoginLabel
    // },
    // {
    //   path:'/loginFrame-submitButton',
    //   component: LoginFrameSubmitButton
    // },
    // {
    //   path:'/loginFrame-findPasswdForm',
    //   component: LoginFrameFindPasswdForm
    // },
    // {
    //   path:'/loginFrame-findPasswdForm-verifyCodeButton',
    //   component: LoginFrameFindPasswdFormVerifyCodeButton
    // },
    // {
    //   path:'/loginFrame-loginForm',
    //   component: LoginFrameLoginForm
    // },
    // {
    //   path:'/loginFrame-registerForm',
    //   component: LoginFrameRegisterForm
    // },
    // {
    //   path:'/loginFrame',
    //   component: LoginFrame
    // },
    // {
    //   path:'/loginFrame-findPasswdLabel',
    //   component: LoginFrameFindPasswdLabel
    // },
    // {
    //   path:'/loginLink',
    //   component: LoginLink
    // }
  ]
})
