import styles from './channel_main.module.css'
import Head from 'next/head'
import Header from '../../components/Header'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Главная</title>
            </Head>
            <Header />
        </div>
      );
    };