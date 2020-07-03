import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/mainpage/index'
import mainInfo from '@/components/mainpage/mainInfo'
import login from '@/components/login'
import defaultPage from '@/layout/default'
import familyAdd from '@/components/mainpage/family/addfamily'
import familyDel from '@/components/mainpage/family/delfamily'
import familyEdit from '@/components/mainpage/family/editfamily'
import memberAdd from '@/components/mainpage/member/addmember'
import memberDel from '@/components/mainpage/member/delmember'
import memberEdit from '@/components/mainpage/member/editmember'
import searchFamily from '@/components/mainpage/search/serfamily'
import searchMember from '@/components/mainpage/search/sermember'
import searchRelation from '@/components/mainpage/search/serrelation'
import searchTree from '@/components/mainpage/search/sertree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/login',
      children: [{
        path: '/login',
        name: 'login',
        component: login
      }, {
        path: '/Index',
        name: 'Index',
        component: Index,
        redirect: '/Index/mainInfo',
        children: [{
          path: '/Index/mainInfo',
          name: 'mainInfo',
          component: mainInfo
        }, {
          path: '/Index/familyAdd',
          name: 'familyAdd',
          component: familyAdd
        }, {
          path: '/Index/familyDel',
          name: 'familyDel',
          component: familyDel
        }, {
          path: '/Index/familyEdit',
          name: 'familyEdit',
          component: familyEdit
        }, {
          path: '/Index/memberAdd',
          name: 'memberAdd',
          component: memberAdd
        }, {
          path: '/Index/memberDel',
          name: 'memberDel',
          component: memberDel
        }, {
          path: '/Index/memberEdit',
          name: 'memberEdit',
          component: memberEdit
        }, {
          path: '/Index/searchRelation',
          name: 'searchRelation',
          component: searchRelation
        }, {
          path: '/Index/searchTree',
          name: 'searchTree',
          component: searchTree
        }, {
          path: '/Index/searchMember',
          name: 'searchMember',
          component: searchMember
        }, {
          path: '/Index/searchFamily',
          name: 'searchFamily',
          component: searchFamily
        }]
      }]
    }
  ]
})
