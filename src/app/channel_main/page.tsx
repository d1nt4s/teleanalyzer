"use client";

import styles from './channel_main.module.css'
import Image from 'next/image';
import { useEffect } from 'react';
import { initChart } from './script';

import Avatar from './components/channel_overview/Avatar';
import Details from './components/channel_overview/Details';
import Description from './components/channel_overview/Description';

import Publication from './components/publications/Publication';
import TopPublications from './components/top_publications/TopPublications';

import Graph from './components/analysis_section/Graph';

export default function Page() {
  useEffect(() => {
    initChart();
  }, []);

    const publication1 = {
      text: "В Москве срочно ищут дегустатора водки. Кандидат должен иметь искреннюю и неподдельную любовь к этому напитку, а также уметь отличать дегустацию от запоя",
      image_src: "https://static28.tgcnt.ru/posts/_0/52/528f59376e1eb496bd56b7b1b661d6ec.jpg",
      views: 58.4,
      shared: 456,
      reactions: 123 
    }

    const publication2 = {
      text: "Отдых в ОАЭ для россиян оказался дешевле, чем в Турции — АТОР. В конце мая путешествие в Эмираты на десять дней с проживанием в четырёхзвёздочном отеле с завтраками и билетами обойдётся минимум в 79,4 тысячи рублей на двоих.<br /><br /> При этом отдых в Турции на тех же условиях обойдётся минимум в 86 тысяч р",
      image_src: "https://static31.tgcnt.ru/posts/_0/ce/ced1624cc5e5805277687abae6e9fb46.jpg",
      views: 44.3,
      shared: 543,
      reactions: 234 
    }

    return (
          <main>
            <section className={styles.content}>
              <div className={styles.maincontent}>

                <div className={styles.channeloverview}>
                  <Avatar />
                  <Details />
                  <Description />
                </div>

                <div className={styles.publications}>

                  <div className={styles.publications_container}>
                    <h2>Публикации</h2>
                    <button className={styles.Update_publications}>
                      <Image src="/static/images/refresh.png" alt="" width={0} height={0} />
                    </button>
                  </div>

                  <Publication publication={publication1}/>
                  <Publication publication={publication2}/>

                  <button className={styles.more_publications}>Загрузить еще</button>
                </div>
              </div>
              <div className={styles.sidebarwrapper}>
              <div className={styles.sidebar}>
                <div className={styles.analysissection}>
                  <h2>Популярные публикации</h2>

                  <TopPublications publication={publication1} />
                  <TopPublications publication={publication2} />
                  <TopPublications publication={publication2} />

                </div>

                <Graph />

              </div>
              </div>
            </section>
          </main>
      );
    };
