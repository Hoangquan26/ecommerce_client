import SideCart from '../SidebarContent/Cart/Cart'
import SideCompare from '../SidebarContent/Compare/Compare'
import UserInfo from '../SidebarContent/UserInfo/UserInfo'
import SideWishList from '../SidebarContent/Wishlist/Wishlist'
import SideAccess from '@components/SidebarContent/SideAccess/SideAccess'
const sideElement = {
    cart: <SideCart/>,
    '': <SideCart/>,
    wishlist: <SideWishList/> || 'wishlist',
    compare: <SideCompare/> || 'compare',
    access:  <SideAccess/> || 'acess',
    userinfo: <UserInfo/> || 'userinfo'
} 

export {
    sideElement
}