"use client";

import Head from 'next/head'
import Header from '../../components/Header'
import styles from './stats.module.css'
import Link from 'next/link';
import { initChart } from './subscriber';
import { initChart2 } from './citation';
import { initChart3 } from './advertising_coverage';
import { initChart4 } from './publications';
import { initChart5 } from './involvement';
import { initChart6 } from './sub_unsub';
import { initChart7 } from './coverage';
import { initChart8 } from './genders';
import { useEffect } from 'react';

export default function Page() {

  const subs = [3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318];

  const subsday = subs[29]-subs[28];
  const subsweek = subs[29]-subs[22];
  const subsmonth = subs[29]-subs[0];

  const colorday = subsday > 0 ? '#00b500' : '#ff0000';
  const colorweek = subsweek > 0 ? '#00b500' : '#ff0000';
  const colormonth = subsmonth > 0 ? '#00b500' : '#ff0000';

  useEffect(() => {
    initChart(subs);
  }, []);

  const cit = [3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318];

  useEffect(() => {
    initChart2(cit);
  }, []);

  const ad_cov = [3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318];

  useEffect(() => {
    initChart3(ad_cov);
  }, []);

  const pubs = [3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318, 
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318];

    const pubsday = pubs[29];
    const pubsweek = pubs.slice(-7).reduce((sum, value) => sum + value, 0);
    const pubsmonth = pubs.slice(-30).reduce((sum, value) => sum + value, 0);

  useEffect(() => {
    initChart4(pubs);
  }, []);

  const inv = [3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318];

  useEffect(() => {
    initChart5(inv);
  }, []);

  const subscriptions = [100, 150, 200, -50, -100, 50, 75, 100, 200, -75, -50, 125, 175, -25, 100, -100, 50, 200, 150, 100, -50, 200, 250, -100];

  const positiveSum = subscriptions.reduce((sum, value) => value > 0 ? sum + value : sum, 0);
  const negativeSum = subscriptions.reduce((sum, value) => value < 0 ? sum + value : sum, 0);
  const subscriptionsSum = positiveSum+negativeSum;

  useEffect(() => {
    initChart6(subscriptions);
  }, []);

  const coverageData = [3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318, 3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318,
    3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318, 3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318, 3425318, 3525318];
    
  useEffect(() => {
    initChart7(coverageData);
  }, []);

  const male = 40.2;
  const female = 59.8;

  useEffect(() => {
    initChart8(male, female);
  }, []);

    return (
        <div>
            <Head>
                <title>Прямой Эфир</title>
            </Head>
            <Header />
            <main>
            <section className={styles.content}>
              <div className={styles.maincontent}>
                <div className={styles.channeloverview}>
                  <div className={styles.avatar}>
                    <img src="https://static7.tgstat.ru/channels/_0/71/71cf36170ca5f8d629afe63a6a509396.jpg" alt="Channel Avatar" />
                  </div>
                  <div className={styles.details}>
                    <h1>Прямой Эфир</h1>
                    <p><a href="https://t.me/novosti_efir" className="tag">#novosti_efir</a></p>
                    <p><Link href="/channel_main/" className={styles.linkStat}>Читать канал</Link></p>
                  </div>
                  <div className={styles.description}>
                  <p>⚡️Все самое важное в одном канале. Новости России и Мира</p>
                  <p>Предложить новость: <a href="https://t.me/pryamoy_bot" className="tag">@pryamoy_bot</a></p>
                  <p>Обратная связь: <a href="https://t.me/pryamoy_bot" className="tag">@rob_lower</a></p>
                  </div>
                </div>
                </div>
                </section>
                <section className={styles.content}>
                <div className={styles.sidebarwrapper}>
                    <div className={styles.sidebar}>
                        <Link href="/channel_main/stats/">Сводная</Link>
                        <Link href="/channel_main/stats/subscribers">Подписчики</Link> 
                        <Link href="/channel_main/stats/citation_index">Индекс цитирования</Link>
                        <Link href="/channel_main/stats/citation">Цитирование</Link>
                        <Link href="/channel_main/stats/publication_coverage">Охваты публикаций</Link>
                        <Link href="/channel_main/stats/involvement">Вовлеченность подписчиков</Link>
                        <Link href="/channel_main/stats/view_analysis">Анализ просмотров</Link>
                        <Link href="/channel_main/stats/advertising_effectiveness">Эффективность рекламы</Link>
                        <Link href="/channel_main/stats/attracting">Привлечение подписчиков</Link>
                        <Link href="/channel_main/stats/invite_links">Пригласительные ссылки</Link>
                        <Link href="/channel_main/stats/external_traffic">Внешний трафик</Link>
                        <Link href="/channel_main/stats/top_publications">Топ публикаций</Link>
                        <Link href="/channel_main/stats/publication_schedule">График публикаций</Link>
                    </div>
              </div>
                <div className={styles.statgraphs}>
                <div className={styles.statgraph}>
                  <div className={styles.statheader}>
                    <h1>{subs[29]}</h1>
                    <h3>ПОДПИСЧИКИ</h3>
                  </div>
                  <div className={styles.stat_content}>
                  <div className={styles.metrics_container}>
                    <div className={styles.metrics}>
                      <table>
                        <tbody className={styles.table_metrics}>
                          <tr><td><b style={{ color: colorday }}>{subsday}</b></td><td>сегодня</td></tr>
                          <tr><td><b style={{ color: colorweek }}>{subsweek}</b></td><td>за неделю</td></tr>
                          <tr><td><b style={{ color: colormonth }}>{subsmonth}</b></td><td>за месяц</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.analysisgraph}>
                      <canvas id="subscribersChart"></canvas>
                    </div>
                    </div>
                  </div>
                </div>
                <div className={styles.statgraph}>
                  <div className={styles.statheader}>
                    <h1>{cit[29]}</h1>
                    <h3>ИНДЕКС ЦИТИРОВАНИЯ</h3>
                  </div>
                  <div className={styles.stat_content}>
                  <div className={styles.metrics_container}>
                    <div className={styles.metrics}>
                      <table>
                        <tbody className={styles.table_metrics}>
                          <tr><td><b>12 024</b></td><td>уп. каналов</td></tr>
                          <tr><td><b>180 636</b></td><td>упоминаний</td></tr>
                          <tr><td><b>82 911</b></td><td>репостов</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.analysisgraph}>
                      <canvas id="citationChart"></canvas>
                    </div>
                    </div>
                  </div>
                </div>
                <div className={styles.statgraph}>
                  <div className={styles.statheader}>
                    <h1>{ad_cov[29]}</h1>
                    <h3>СРЕДНИЙ РЕКЛАМНЫЙ ОХВАТ 1 ПУБЛИКАЦИИ</h3>
                  </div>
                  <div className={styles.stat_content}>
                  <div className={styles.metrics_container}>
                    <div className={styles.metrics}>
                      <table>
                        <tbody className={styles.table_metrics}>
                          <tr><td><b>600.2k</b></td><td>за 12 часов</td></tr>
                          <tr><td><b>727.8k</b></td><td>за 24 часа</td></tr>
                          <tr><td><b>769.9k</b></td><td>за 48 часов</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.analysisgraph}>
                      <canvas id="adcoverageChart"></canvas>
                    </div>
                    </div>
                  </div>
                </div>
                <div className={styles.statgraph}>
                  <div className={styles.statheader}>
                    <h1>37 283 всего</h1>
                    <h3>ПУБЛИКАЦИИ</h3>
                  </div>
                  <div className={styles.stat_content}>
                  <div className={styles.metrics_container}>
                    <div className={styles.metrics}>
                      <table>
                        <tbody className={styles.table_metrics}>
                          <tr><td><b>{pubsday}</b></td><td>вчера</td></tr>
                          <tr><td><b>{pubsweek}</b></td><td>за неделю</td></tr>
                          <tr><td><b>{pubsmonth}</b></td><td>за месяц</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.analysisgraph}>
                      <canvas id="publicationChart"></canvas>
                    </div>
                    </div>
                  </div>
                </div>
                <div className={styles.statgraph}>
                  <div className={styles.statheader}>
                    <h1>{inv[29]}%</h1>
                    <h3>ВОВЛЕЧЕННОСТЬ ПОДПИСЧИКОВ (ER)</h3>
                  </div>
                  <div className={styles.stat_content}>
                  <div className={styles.metrics_container}>
                    <div className={styles.metrics}>
                      <table>
                        <tbody className={styles.table_metrics}>
                          <tr><td><b>3.1k</b></td><td>пересылки</td></tr>
                          <tr><td><b>—</b></td><td>комментарии</td></tr>
                          <tr><td><b>12k</b></td><td>реакции</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.analysisgraph}>
                      <canvas id="involvementChart"></canvas>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className={styles.statgraphs}>
                <div className={styles.statgraph}>
                  <div className={styles.statheader}>
                    <h1>{subscriptionsSum}</h1>
                    <h3>ПОДПИСКИ/ОТПИСКИ ЗА 24 ЧАСА</h3>
                  </div>
                  <div className={styles.stat_content}>
                  <div className={styles.metrics_container}>
                    <div className={styles.metrics}>
                    <table>
                        <tbody className={styles.table_metrics}>
                          <tr><td><b style={{ color: "#00b500" }}>+{positiveSum}</b></td><td>подписки</td></tr>
                          <tr><td><b style={{ color: "#ff0000" }}>{negativeSum}</b></td><td>отписки</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.analysisgraph}>
                      <canvas id="sub_unsubChart"></canvas>
                    </div>
                    </div>
                  </div>
                </div>
                <div className={styles.statgraph}>
                  <div className={styles.statheader}>
                    <h1>{coverageData[29]}</h1>
                    <h3>СРЕДНИЙ ОХВАТ 1 ПУБЛИКАЦИИ</h3>
                  </div>
                  <div className={styles.stat_content}>
                  <div className={styles.metrics_container}>
                    <div className={styles.metrics}>
                    <table>
                        <tbody className={styles.table_metrics2}>
                          <tr><td><b>19.5%</b></td><td>ERR</td></tr>
                          <tr><td><b>18.2%</b></td><td>ERR<sub>24</sub></td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.analysisgraph}>
                      <canvas id="coverageChart"></canvas>
                    </div>
                    </div>
                  </div>
                </div>
                <div className={styles.statgraph}>
                  <div className={styles.statheader}>
                    <h1>2 года 3 месяца</h1>
                    <h3>ВОЗРАСТ КАНАЛА</h3>
                  </div>
                  <div className={styles.stat_content}>
                  <div className={styles.metrics_container}>
                    <div className={styles.metrics}>
                    <table>
                        <tbody className={styles.table_metrics2}>
                          <tr><td><b>25.02.2022</b></td><td>канал создан</td></tr>
                          <tr><td><b>11.03.2022</b></td><td>добавлен в TeleAnalyser</td></tr>
                        </tbody>
                      </table>
                    </div>
                    </div>
                  </div>
                </div>
                <div className={styles.statgraph}>
                  <div className={styles.statheader}>
                    <h2>ВОВЛЕЧЕННОСТЬ ПОДПИСЧИКОВ (ERR)</h2>
                  </div>
                  <div className={styles.stat_content}>
                  <div className={styles.metrics_container}>
                    <div className={styles.metrics}>
                    <table>
                        <tbody className={styles.table_metrics2}>
                          <tr><td><b>20%</b></td><td>подписчиков читают посты канала</td></tr>
                          <tr><td><b>19%</b></td><td>читают посты в первые 24 часа после публикации</td></tr>
                        </tbody>
                      </table>
                    </div>
                    </div>
                  </div>
                </div>
                <div className={styles.statgraph}>
                  <div className={styles.statheader}>
                    <h2>ПОЛ ПОДПИСЧИКОВ</h2>
                  </div>
                  <div className={styles.stat_content}>
                  <div className={styles.metrics_container}>
                    <div className={styles.metrics}>
                    <table>
                        <tbody className={styles.table_metrics2}>
                          <tr><td><b>{male}%</b></td><td>мужчины</td></tr>
                          <tr><td><b>{female}%</b></td><td>женщины</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.analysisgraph}>
                      <canvas id="gendersChart"></canvas>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
            </section>
          </main>
        </div>
      );
    };
