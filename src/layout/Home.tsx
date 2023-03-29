import {VApp, VAppBar,VMain,VNavigationDrawer} from "vuetify/components";


export default ()=>
    <VApp>
        <VAppBar elevation="2" title="价格走势"></VAppBar>
        <VNavigationDrawer></VNavigationDrawer>
        <VMain style="max-height:1200px"><router-view></router-view></VMain>
    </VApp>
