import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

let sub_unsubChart = null;

function getLast24Hours() {
    const hours = [];
    for (let i = 23; i >= 0; i--) {
        const date = new Date();
        date.setHours(date.getHours() - i);
        const hour = date.getHours().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        hours.push(`${day}.${month} ${hour}:00`);
    }
    return hours;
}

export function initChart6(subscriptions) {
    const ctx = document.getElementById('sub_unsubChart')?.getContext('2d');

    if (sub_unsubChart !== null) {
        sub_unsubChart.destroy();
    }

    const Last24Hours = getLast24Hours();

    // Пример данных для подписок и отписок
    const unsubscriptions = subscriptions.map(value => value < 0 ? value : 0);
    const subscriptionsPositive = subscriptions.map(value => value > 0 ? value : 0);

    sub_unsubChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Last24Hours,
            datasets: [
                {
                    label: 'Подписок',
                    data: subscriptionsPositive,
                    borderColor: 'rgba(0, 181, 0, 1)', // Зеленый цвет для подписок
                    backgroundColor: 'rgba(0, 181, 0, 0.5)', // Полупрозрачный зеленый
                    borderWidth: 2
                },
                {
                    label: 'Отписок',
                    data: unsubscriptions,
                    borderColor: 'rgba(255, 0, 0, 1)', // Красный цвет для отписок
                    backgroundColor: 'rgba(255, 0, 0, 0.5)', // Полупрозрачный красный
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            },
            plugins: {
                legend: { display: false }
            },
                scales: {
                    x: {
                        display: false // Убираем ось X
                    },
                    y: {
                        display: false // Убираем ось Y
                    }
                }
        }
    });
}