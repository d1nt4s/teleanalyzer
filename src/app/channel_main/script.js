import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

let subscribersChart = null;

function getLast7Days() {
    const dates = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        dates.push(`${day}.${month}`);
    }
    return dates;
}

export function initChart() {
    const ctx = document.getElementById('subscribersChart').getContext('2d');

    if (subscribersChart !== null) {
        subscribersChart.destroy();
    }

    const last7Days = getLast7Days();

    subscribersChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: last7Days,
            datasets: [{
                data: [3425318, 3525318, 3795318, 3725318, 3425318, 3925318, 4025318],
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
            }
        }
    });
}