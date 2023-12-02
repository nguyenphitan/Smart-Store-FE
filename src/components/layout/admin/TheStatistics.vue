<template>
    <div id="the-statistics">
        <h2 class="t-statistics-title">
            <i class="fa-solid fa-chart-simple t-color-red"></i>
            Statistics
        </h2>
        <!-- Container -->
        <div id="statistics-container">
            <div id="list-month">
                <div @click="statisticOfMonth" class="t-month-common month-1 t-active">January</div>
                <div @click="statisticOfMonth" class="t-month-common month-2">February</div>
                <div @click="statisticOfMonth" class="t-month-common month-3">March</div>
                <div @click="statisticOfMonth" class="t-month-common month-4">April</div>
                <div @click="statisticOfMonth" class="t-month-common month-5">May</div>
                <div @click="statisticOfMonth" class="t-month-common month-6">June</div>
                <div @click="statisticOfMonth" class="t-month-common month-7">July</div>
                <div @click="statisticOfMonth" class="t-month-common month-8">August</div>
                <div @click="statisticOfMonth" class="t-month-common month-9">September</div>
                <div @click="statisticOfMonth" class="t-month-common month-10">October</div>
                <div @click="statisticOfMonth" class="t-month-common month-11">November</div>
                <div @click="statisticOfMonth" class="t-month-common month-12">December</div>
            </div>
            <Bar
                id="my-chart-id"
                :options="chartOptions"
                :data="chartData"
            />
        </div>
        <!-- End Container -->
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'the-statistics',
    components: {
        Bar,
    },
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 
                'August', 'September', 'October', 'November', 'December' ],
                datasets: [ { data: [40, 20, 12, 10, 15, 25, 24, 36, 29, 18, 38, 39] } ]
            },
            chartOptions: {
                responsive: true
            }
        }
    },
    methods: {
        // Get statistics:
        statisticOfMonth(e) {
            let month = e.target.innerText;
            console.log(month);
            
        },
    },
            
}
</script>

<style scoped>
/* Title */
#the-statistics .t-statistics-title {
    font-weight: bold;
    font-size: 25px;
    width: 80%;
    margin: 24px auto 12px;
}

/* Container */
#statistics-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

/* List month */
#list-month {
    width: 220px;
    padding: 12px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 26px;
    border-radius: 8px;
}

.t-month-common {
    width: 100%;
    height: 40px;
    margin: 8px 0;
    background-color: rgb(255, 225, 230);
    color: rgb(233, 69, 96);
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
}

#list-month .t-active {
    background-color: rgb(233, 69, 96);
    color: #fff;
}

/* Chart */
#my-chart-id {
    width: 80% !important;
}
</style>