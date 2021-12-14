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

export const PAGE_BREADCRUMBS = {
    [PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER]: [
        {label: 'Home', destination: '/dashboard'},
        {label: 'Edit'},
        {label: 'Member'}
    ],
}

export const PAGE_SCROLL_NAVIGATIONS = {
    '/edit/member': [
        {label: 'Profile', destination: '#profile'},
        {label: 'Details', destination: '#profile-details'},
        {label: 'Social', destination: '#profile-social'}
    ],
}

export const PAGE_LAYOUT_PROPS = {
    '/': {
        noLayout: true,
    },
    '/member/pricing': {
        noLayout: true,
    },
    '/landingpage-2021': {
        noLayout: true,
    },
    '/landing-page-backup': {
        noLayout: true,
    },
    '/edit/member': {
        tabs: PAGE_TAB_NAVIGATIONS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER],
        breadcrumbs: PAGE_BREADCRUMBS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER],
        scrollNavigations: PAGE_SCROLL_NAVIGATIONS['/edit/member'],
        heading: 'Member',
        subHeading: 'Edit profile',
        description: 'Set your creator profile and make a great first impression'
    },
    '/edit/member/membership': {
        tabs: PAGE_TAB_NAVIGATIONS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER],
        breadcrumbs: PAGE_BREADCRUMBS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER],
        scrollNavigations: [],
        heading: 'Membership',
        subHeading: 'Plan & perks',
        description: 'Maintain a safe and secure community experience  '
    },
    '/edit/member/settings': {
        tabs: PAGE_TAB_NAVIGATIONS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER],
        breadcrumbs: PAGE_BREADCRUMBS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER],
        scrollNavigations: [],
        heading: 'Settings',
        subHeading: 'Manage your account',
        description: 'Maintain a safe and secure community experience  '
    },
    '/member/manage/projects': {
        tabs: PAGE_TAB_NAVIGATIONS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER],
        breadcrumbs: PAGE_BREADCRUMBS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER],
        scrollNavigations: [],
        heading: 'Projects',
        subHeading: 'Manage your projects',
        description: 'Project overview with controls on how to contact your partner and provide instructions on how to complete your project'
    },
    '/edit/team': {
        tabs: PAGE_TAB_NAVIGATIONS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER],
        breadcrumbs: PAGE_BREADCRUMBS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER],
        scrollNavigations: [],
        heading: 'Team',
        subHeading: 'Edit profile',
        description: 'Set your partner profile and make a great first impression'
    },
    '/dashboard': {
        tabs: PAGE_TAB_NAVIGATIONS[PAGE_TAB_NAVIGATION_KEY.DASHBOARD],
        breadcrumbs: [],
        scrollNavigations: [],
    },
}