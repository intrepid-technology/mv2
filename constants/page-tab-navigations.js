export const PAGE_TAB_NAVIGATION_KEY = {
    EDIT_MEMBER: 'EDIT_MEMBER',
    DASHBOARD: 'DASHBOARD',
}

export const PAGE_TAB_NAVIGATIONS = {
    [PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER]: [
        {label: 'Profile', destination: '/edit/member'},
        {label: 'Membership', destination: '/edit/member/membership'},
        {label: 'Team', destination: '/edit/team'},
        {label: 'Projects', destination: '/member/manage/projects'},
        {label: 'Settings', destination: '/edit/member/settings'},
    ],
    [PAGE_TAB_NAVIGATION_KEY.DASHBOARD]: [
        {label: 'Tab 1', destination: '/dashboard/tab1'},
        {label: 'Tab 2', destination: '/dashboard/tab2'},
        {label: 'Tab 3', destination: '/dashboard/tab3'},
        {label: 'Tab 4', destination: '/dashboard/tab4'},
    ]
}