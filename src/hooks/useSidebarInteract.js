import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext.Provider';
import { useSelector } from 'react-redux';
import { userSelector } from '../features/authSlice';

export default function useSidebarInteract() {
    const  { isOpen, setIsOpen, setType, type } = useContext(SidebarContext)
  
    const openCartPressed = (type = 'cart', priority) => {
        console.log(priority)
        if(priority) setType(priority)
        else setType(type)
        setIsOpen(true)
    }
    return openCartPressed
}