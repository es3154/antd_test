/**
 * Created by ddxx on 2017/6/28.
 */
"use strict";

const modules = [{
    id:'RegistrationForm',
    name:'RegistrationForm',
    path:'/RegistrationForm',  //route对应的url
    module:()=>(
        import(/* webpackChunkName: "registrationForm" */ "./view/RegistrationForm.jsx")
    ),
    actions:[{            //模块包含的功能,权限操作相关
        key:'add',
        name:'添加',
        description:'功能描述'  //可选
    }]
},{
    id:'NotificationDemo',
    name:'NotificationDemo',
    path:'/NotificationDemo',
    module:()=>(
        import(/* webpackChunkName: "NotificationDemo" */ "./view/other/NotificationDemo.jsx")
    ),
    actions:[]
},{
    id:'MessageDemo',
    name:'MessageDemo',
    path:'/MessageDemo',
    module:()=>(
        import(/* webpackChunkName: "MessageDemo" */ "./view/other/MessageDemo.jsx")
    ),
    actions:[]
},{
    id:'ModalDemo',
    name:'ModalDemo',
    path:'/ModalDemo',
    module:()=>(
        import(/* webpackChunkName: "ModalDemo" */ "./view/other/ModalDemo.jsx")
    ),
    actions:[]
},{
    id:'AlertDemo',
    name:'AlertDemo',
    path:'/AlertDemo',
    module:()=>(
        import(/* webpackChunkName: "AlertDemo" */ "./view/other/AlertDemo.jsx")
    ),
    actions:[]
},{
    id:'DynamicTable',
    name:'DynamicTable',
    path:'/DynamicTable',
    module:()=>(
        import(/* webpackChunkName: "DynamicTable" */ "./view/table/DynamicTable.jsx")
    ),
    actions:[]
},{
    id:'EditTable',
    name:'EditTable',
    path:'/EditTable',
    module:()=>(
        import(/* webpackChunkName: "EditTable" */ "./view/table/EditTable.jsx")
    ),
    actions:[]
},{
    id:'GDheadTable',
    name:'GDheadTable',
    path:'/GDheadTable',
    module:()=>(
        import(/* webpackChunkName: "GDheadTable" */ "./view/table/GDheadTable.jsx")
    ),
    actions:[]
},{
    id:'HeBingTable',
    name:'HeBingTable',
    path:'/HeBingTable',
    module:()=>(
        import(/* webpackChunkName: "HeBingTable" */ "./view/table/HeBingTable.jsx")
    ),
    actions:[]
},{
    id:'ExpandedRowTable',
    name:'ExpandedRowTable',
    path:'/ExpandedRowTable',
    module:()=>(
        import(/* webpackChunkName: "ExpandedRowTable" */ "./view/table/ExpandedRowTable.jsx")
    ),
    actions:[]
},{
    id:'BorderTable',
    name:'BorderTable',
    path:'/BorderTable',
    module:()=>(
        import(/* webpackChunkName: "BorderTable" */ "./view/table/BorderTable.jsx")
    ),
    actions:[]
},{
    id:'LoadTable',
    name:'LoadTable',
    path:'/LoadTable',
    module:()=>(
        import(/* webpackChunkName: "LoadTable" */ "./view/table/LoadTable.jsx")
    ),
    actions:[]
},{
    id:'SelectionTable1',
    name:'SelectionTable1',
    path:'/SelectionTable1',
    module:()=>(
        import(/* webpackChunkName: "SelectionTable1" */ "./view/table/SelectionTable1.jsx")
    ),
    actions:[]
},{
    id:'SelectionTable',
    name:'SelectionTable',
    path:'/SelectionTable',
    module:()=>(
        import(/* webpackChunkName: "SelectionTable" */ "./view/table/SelectionTable.jsx")
    ),
    actions:[]
},{
    id:'BaseTabel',
    name:'BaseTabel',
    path:'/BaseTabel',
    module:()=>(
        import(/* webpackChunkName: "BaseTabel" */ "./view/table/BaseTabel.jsx")
    ),
    actions:[]
},{
    id:'SimpleEChartsDemo',
    name:'SimpleEChartsDemo',
    path:'/SimpleEChartsDemo',
    module:()=>(
        import(/* webpackChunkName: "SimpleEChartsDemo" */ "./view/echarts/SimpleEChartsDemo.jsx")
    ),
    actions:[]
},{
    id:'SimpleEChartsDemo1',
    name:'SimpleEChartsDemo1',
    path:'/SimpleEChartsDemo1',
    module:()=>(
        import(/* webpackChunkName: "SimpleEChartsDemo1" */ "./view/echarts/SimpleEChartsDemo1.jsx")
    ),
    actions:[]
},{
    id:'SimpleEChartsDemo2',
    name:'SimpleEChartsDemo2',
    path:'/SimpleEChartsDemo2',
    module:()=>(
        import(/* webpackChunkName: "SimpleEChartsDemo2" */ "./view/echarts/SimpleEChartsDemo2.jsx")
    ),
    actions:[]
},{
    id:'NavigationsDemo',
    name:'NavigationsDemo',
    path:'/NavigationsDemo',
    module:()=>(
        import(/* webpackChunkName: "NavigationsDemo" */ "./view/NavigationsDemo.jsx")
    ),
    actions:[]
},{
    id:'TabsDemo',
    name:'TabsDemo',
    path:'/TabsDemo',
    module:()=>(
        import(/* webpackChunkName: "TabsDemo" */ "./view/TabsDemo.jsx")
    ),
    actions:[]
},{
    id:'AutoCompleteDemo',
    name:'AutoCompleteDemo',
    path:'/AutoCompleteDemo',
    module:()=>(
        import(/* webpackChunkName: "AutoCompleteDemo" */ "./view/AutoCompleteDemo.jsx")
    ),
    actions:[]
},{
    id:'DatePickerDemo',
    name:'DatePickerDemo',
    path:'/DatePickerDemo',
    module:()=>(
        import(/* webpackChunkName: "DatePickerDemo" */ "./view/DatePickerDemo.jsx")
    ),
    actions:[]
},{
    id:'AdvancedSearchForm',
    name:'AdvancedSearchForm',
    path:'/AdvancedSearchForm',
    module:()=>(
        import(/* webpackChunkName: "AdvancedSearchForm" */ "./view/AdvancedSearchForm.jsx")
    ),
    actions:[]
},{
    id:'FormDemo',
    name:'FormDemo',
    path:'/FormDemo',
    module:()=>(
        import(/* webpackChunkName: "FormDemo" */ "./view/FormDemo.jsx")
    ),
    actions:[]
},{
    id:'NormalFormDemo',
    name:'NormalFormDemo',
    path:'/NormalFormDemo',
    module:()=>(
        import(/* webpackChunkName: "NormalFormDemo" */ "./view/NormalFormDemo.jsx")
    ),
    actions:[]
},{
    id:'CollectionsPage',
    name:'CollectionsPage',
    path:'/CollectionsPage',
    module:()=>(
        import(/* webpackChunkName: "CollectionsPage" */ "./view/CollectionsPage.jsx")
    ),
    actions:[]
},{
    id:'TimeRelatedForm',
    name:'TimeRelatedForm',
    path:'/TimeRelatedForm',
    module:()=>(
        import(/* webpackChunkName: "TimeRelatedForm" */ "./view/TimeRelatedForm.jsx")
    ),
    actions:[]
},{
    id:'LastFromDemo',
    name:'LastFromDemo',
    path:'/LastFromDemo',
    module:()=>(
        import(/* webpackChunkName: "LastFromDemo" */ "./view/LastFromDemo.jsx")
    ),
    actions:[]
},{
    id:'BaseTabel',
    name:'BaseTabel',
    path:'/BaseTabel',
    module:()=>(
        import(/* webpackChunkName: "BaseTabel" */ "./view/table/BaseTabel.jsx")
    ),
    actions:[]
},{
    id:'ButtonDemo',
    name:'ButtonDemo',
    path:'/ButtonDemo',
    module:()=>(
        import(/* webpackChunkName: "ButtonDemo" */ "./view/ButtonDemo.jsx")
    ),
    actions:[]
},{
    id:'GridDemo',
    name:'GridDemo',
    path:'/GridDemo',
    module:()=>(
        import(/* webpackChunkName: "GridDemo" */ "./view/GridDemo.jsx")
    ),
    actions:[]
}];

export default modules;