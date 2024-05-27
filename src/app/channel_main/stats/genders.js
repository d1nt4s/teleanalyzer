import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

let gendersChart = null;

// Функция для инициализации диаграммы
export function initChart8(malePercentage, femalePercentage) {
    const ctx = document.getElementById('gendersChart')?.getContext('2d');

    // Уничтожаем предыдущую диаграмму, если она существует
    if (gendersChart !== null) {
        gendersChart.destroy();
    }

    // Создаем новую круговую диаграмму
    gendersChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                data: [malePercentage, femalePercentage],
                backgroundColor: [
                    'rgba(0, 123, 255, 0.2)', // Цвет для мужчин
                    'rgba(255, 0, 127, 0.2)' // Цвет для женщин
                ],
                borderColor: [
                    'rgba(0, 123, 255, 1)',
                    'rgba(255, 0, 127, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
}