import MainLayout from "@components/Layout/Layout"
import {dataInfo} from './constants' 
import InfoCard from "./InfoCard/InfoCard"
import styles from './styles.module.scss'
export default function Info() {
    const {container} = styles
    return <MainLayout>
        <div className={container}>
            {
                dataInfo?.map((item, index) => {
                    return <InfoCard key={index} src={item?.src} title={item?.title} description={item?.description}/>
                })
            }
        </div>
        </MainLayout>

}