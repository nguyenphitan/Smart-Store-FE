<template>
    <div id="the-statistics">
        <h2 class="t-statistics-title">
            <i class="fa-solid fa-chart-simple t-color-red"></i>
            Statistics
        </h2>
        <!-- Container -->
        <div id="statistics-container">
            <div id="list-month">
                <div @click="statisticsOfYear($event, currentYear)" class="t-month-common month-0 t-active">{{ currentYear }}</div>
                <div @click="statisticsOfMonth" tan="1" class="t-month-common month-1">January</div>
                <div @click="statisticsOfMonth" tan="2" class="t-month-common month-2">February</div>
                <div @click="statisticsOfMonth" tan="3" class="t-month-common month-3">March</div>
                <div @click="statisticsOfMonth" tan="4" class="t-month-common month-4">April</div>
                <div @click="statisticsOfMonth" tan="5" class="t-month-common month-5">May</div>
                <div @click="statisticsOfMonth" tan="6" class="t-month-common month-6">June</div>
                <div @click="statisticsOfMonth" tan="7" class="t-month-common month-7">July</div>
                <div @click="statisticsOfMonth" tan="8" class="t-month-common month-8">August</div>
                <div @click="statisticsOfMonth" tan="9" class="t-month-common month-9">September</div>
                <div @click="statisticsOfMonth" tan="10" class="t-month-common month-10">October</div>
                <div @click="statisticsOfMonth" tan="11" class="t-month-common month-11">November</div>
                <div @click="statisticsOfMonth" tan="12" class="t-month-common month-12">December</div>
            </div>
            <apex-chart id="my-chart-id" 
                type="area" 
                :options="chartOptions" 
                :series="series"
            >
            </apex-chart>
        </div>
        <!-- End Container -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'the-statistics',
    components: {
    },
    created() {
        let year = 2023;
        let me = this;
        const token = localStorage.getItem('token');
        // header
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        // Call API
        axios
            .get(`http://localhost:8080/api/v1/statistics/${year}`, { headers })
            .then((response) => {
                console.log("Statistics success");
                let result = [];
                for(let dto of response.data) {
                    result.push(dto.total);
                }
                // console.log(result);

                // set chart data
                me.series = [{
                    name: 'series-1',
                    data: result
                }]
            })
            .catch((reject) => {
                console.log("Statistics fail");
                console.log(reject);
            });
    },
    data() {
        return {
            // current year
            currentYear: 2023,
            
            // chart data
            chartOptions: {
                chart: {
                    id: 'vuechart-example',
                },
                xaxis: {
                    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                'August', 'September', 'October', 'November', 'December']
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            let val = (value/1).toFixed(0).replace('.', ',');
                            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' VND';
                        }
                    },
                },
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 30, 40, 35, 50]
            }],
        }
    },
    methods: {
        // Active onclick
        activeElement(e) {
            let months = document.querySelectorAll('#the-statistics .t-month-common');
            for(let month of months) {
                month.classList.remove('t-active');
            }

            e.target.classList.add('t-active');
        },

        // Get statistics of the year
        statisticsOfYear(e, year) {
            let me = this;
            me.activeElement(e);
            const token = localStorage.getItem('token');
            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            // Call API
            axios
                .get(`http://localhost:8080/api/v1/statistics/${year}`, { headers })
                .then((response) => {
                    console.log("Statistics success");
                    let result = [];
                    for(let dto of response.data) {
                        result.push(dto.total);
                    }
                    // console.log(result);

                    // set chart data
                    me.series = [{
                        name: 'series-1',
                        data: result
                    }]
                })
                .catch((reject) => {
                    console.log("Statistics fail");
                    console.log(reject);
                });
        },

        // Get statistics of month:
        statisticsOfMonth(e) {
            let me = this;
            me.activeElement(e);
            let year = 2023;
            let month = Number(e.target.getAttribute('tan'));
            console.log(month);

            // Call API
            axios
                .get(`http://localhost:8080/api/v1/statistics/${year}/${month}`)
                .then((response) => {
                    console.log("Statistics success");
                    let listDate = [];
                    let result = [];
                    for(let dto of response.data) {
                        listDate.push(dto.date);
                        result.push(dto.total);
                    }
                    // console.log(result);

                    // Set chart data
                    me.chartOptions = {
                        chart: {
                            id: 'vuechart-example',
                        },
                        xaxis: {
                            categories: listDate
                        },
                        yaxis: {
                            labels: {
                                formatter: function (value) {
                                    let val = (value/1).toFixed(0).replace('.', ',');
                                    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' VND';
                                }
                            },
                        },
                    },

                    me.series = [{
                        name: 'series-1',
                        data: result
                    }]
                })
                .catch((reject) => {
                    console.log("Statistics fail");
                    console.log(reject);
                });
            
        },

        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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
    height: fit-content;
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
    margin-top: 40px;
}
</style>