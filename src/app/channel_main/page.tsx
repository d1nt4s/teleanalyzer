"use client";

import styles from './channel_main.module.css'
import Link from 'next/link';
import { useEffect } from 'react';
import { initChart } from './script';

import Avatar from './components/channel_overview/Avatar';
import Details from './components/channel_overview/Details';
import Description from './components/channel_overview/Description';

import Publication from './components/publications/Publication';

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
                  <button className={styles.Update_publications}><img src="../../../static/images/refresh.png" alt="Просмотров"/></button>
                  </div>
                  <Publication publication={publication1}/>
                  {/* <div className={styles.publication}>
                    <img src="https://static28.tgcnt.ru/posts/_0/52/528f59376e1eb496bd56b7b1b661d6ec.jpg" alt="Publication Image" />
                    <p>В Москве срочно ищут дегустатора водки.<br /><br />
                      Кандидат должен иметь искреннюю и неподдельную любовь к этому напитку, а также уметь отличать дегустацию от запоя
                    </p>
                    <div className={styles.metrics}>
                      <span><img src="../../../static/images/eye.png" alt="Просмотров"/>  58,4К</span>
                      <span><img src="../../../static/images/repost.png" alt="Поделилось"/> 456</span>
                      <span><img src="../../../static/images/like.png" alt="Реакций"/>  123</span>
                    </div>
                  </div> */}
                  <div className={styles.publication}>
                    <img src="https://static31.tgcnt.ru/posts/_0/ce/ced1624cc5e5805277687abae6e9fb46.jpg" alt="Publication Image" />
                    <p>Отдых в ОАЭ для россиян оказался дешевле, чем в Турции — АТОР.<br /><br />
                      В конце мая путешествие в Эмираты на десять дней с проживанием в четырёхзвёздочном отеле с завтраками и билетами обойдётся минимум в 79,4 тысячи рублей на двоих.<br /><br />
                      При этом отдых в Турции на тех же условиях обойдётся минимум в 86 тысяч рублей
                    </p>
                    <div className={styles.metrics}>
                      <span><img src="../../../static/images/eye.png" alt="Просмотров"/> 44,3К</span>
                      <span><img src="../../../static/images/repost.png" alt="Поделилось"/> 543</span>
                      <span><img src="../../../static/images/like.png" alt="Реакций"/> 234</span>
                    </div>
                  </div>
                  <button className={styles.more_publications}>Загрузить еще</button>
                </div>
              </div>
              <div className={styles.sidebarwrapper}>
              <div className={styles.sidebar}>
                <div className={styles.analysissection}>
                  <h2>Популярные публикации</h2>
                  <div className={styles.popularpost}>
                    <img src="https://static28.tgcnt.ru/posts/_0/52/528f59376e1eb496bd56b7b1b661d6ec.jpg" alt="Small Image 1" />
                    <div className={styles.posttext}>
                      <p>В Москве срочно ищут дегустатора водки.<br /><br />
                        Кандидат должен иметь искреннюю и неподдельную любовь к этому напитку, а также уметь отличать дегустацию от запоя
                      </p>
                    </div>
                  </div>
                  <div className={styles.popularpost}>
                    <img src="https://static31.tgcnt.ru/posts/_0/ce/ced1624cc5e5805277687abae6e9fb46.jpg" alt="Small Image 2" />
                    <div className={styles.posttext}>
                      <p>Отдых в ОАЭ для россиян оказался дешевле, чем в Турции — АТОР.<br/><br/>
                        В конце мая путешествие в Эмираты на десять дней с проживанием в четырёхзвёздочном отеле с завтраками и билетами обойдётся минимум в 79,4 тысячи рублей на двоих.<br /><br />
                        При этом отдых в Турции на тех же условиях обойдётся минимум в 86 тысяч рублей
                      </p>
                    </div>
                  </div>
                  <div className={styles.popularpost}>
                    <img src="https://static31.tgcnt.ru/posts/_0/ce/ced1624cc5e5805277687abae6e9fb46.jpg" alt="Small Image 2" />
                    <div className={styles.posttext}>
                      <p>Отдых в ОАЭ для россиян оказался дешевле, чем в Турции — АТОР.<br/><br/>
                        В конце мая путешествие в Эмираты на десять дней с проживанием в четырёхзвёздочном отеле с завтраками и билетами обойдётся минимум в 79,4 тысячи рублей на двоих.<br /><br />
                        При этом отдых в Турции на тех же условиях обойдётся минимум в 86 тысяч рублей
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.analysissection}>
                  <h2>График изменения подписчиков</h2>
                  <p>Подписчиков: <span className={styles.subscriberscount}>4 025 318</span></p>
                  <div className={styles.subscribers}>
                    <div className={styles.analysisgraph}>
                      <canvas id="subscribersChart" width="700" height="200"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>
          </main>
      );
    };
