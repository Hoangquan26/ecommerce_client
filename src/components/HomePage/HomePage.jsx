import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import Info from "@components/Info/Info"
import AdvancedTitle from "@components/AdvancedTitle/AdvancedTitle";
import styles from './styles.module.scss'
import ListProduct from "@components/ListProduct/ListProduct";
import ProductService from '@services/product.service'
import { useEffect, useState } from "react";
import SaleHomePage from "@components/SaleHomePage/SaleHomePage";
import Footer from "../Footer/Footer";
export default function HomePage(){
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        const getProducts = async() => {
            const response = await ProductService.getAllProduct()
            setListProduct(response.contents.slice(0, 10))
        }
        getProducts()
    }, [])

    const {container} = styles
    return <div className={container}>
        <Header/>
        <Banner/>
        <Info/>
        <AdvancedTitle/>
        <ListProduct products={listProduct}/>
        <SaleHomePage/>
        <Footer/>
    </div>
}