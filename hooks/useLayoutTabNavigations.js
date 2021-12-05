import { PAGE_LAYOUT_PROPS } from "constants/page-layout"
import { useRouter } from "next/router"

const usePageLayoutProps = () => {
    const router = useRouter()
    return PAGE_LAYOUT_PROPS[router.pathname] || {}
}

export {usePageLayoutProps}
