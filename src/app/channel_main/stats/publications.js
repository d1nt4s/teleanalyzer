import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

let publicationChart = null;

function getLast30Days() {
    const dates = [];
    for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        dates.push(`${day}.${month}`);
    }
    return dates;
}

export function initChart4(pubs) {
    const ctx = document.getElementById('publicationChart')?.getContext('2d');

    if (publicationChart !== null) {
        publicationChart.destroy();
    }

    const last30Days = getLast30Days();

    publicationChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: last30Days,
            datasets: [{
                data: pubs,
                borderColor: 'rgba(0, 123, 255, 1)',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderWidth: 2,
                fill: true
            }]
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