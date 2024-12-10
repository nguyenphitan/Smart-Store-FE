<template>
    <div id="the-statistics">
        <h2 class="t-statistics-title">
            <i class="fa-solid fa-chart-simple t-color-red"></i>
            Statistics
        </h2>
        <!-- Container -->
        <div id="statistics-container">
            <div id="list-month" style="position: sticky; top: 124px; left: 0;">
                <select 
                    @change="statisticsOfYear" 
                    class="t-month-common month-0 t-active year-selected"
                >
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option selected value="2024">2024</option>
                </select>
                <div @click="statisticsOfMonth" huyen="1" class="t-month-common month-1">January</div>
                <div @click="statisticsOfMonth" huyen="2" class="t-month-common month-2">February</div>
                <div @click="statisticsOfMonth" huyen="3" class="t-month-common month-3">March</div>
                <div @click="statisticsOfMonth" huyen="4" class="t-month-common month-4">April</div>
                <div @click="statisticsOfMonth" huyen="5" class="t-month-common month-5">May</div>
                <div @click="statisticsOfMonth" huyen="6" class="t-month-common month-6">June</div>
                <div @click="statisticsOfMonth" huyen="7" class="t-month-common month-7">July</div>
                <div @click="statisticsOfMonth" huyen="8" class="t-month-common month-8">August</div>
                <div @click="statisticsOfMonth" huyen="9" class="t-month-common month-9">September</div>
                <div @click="statisticsOfMonth" huyen="10" class="t-month-common month-10">October</div>
                <div @click="statisticsOfMonth" huyen="11" class="t-month-common month-11">November</div>
                <div @click="statisticsOfMonth" huyen="12" class="t-month-common month-12">December</div>
            </div>
            <div style="width: 80%;">
                <p style="text-align: left; margin-top: 40px; margin-left: 16px; padding: 0; margin-bottom: -10px;">
                    <span style="font-weight: bold;">Total: </span> 
                    <span style="font-weight: bold;" class="t-color-red">{{ formatPrice(this.totalRevenue) }} VND</span>
                </p>
                <apex-chart id="my-chart-id" 
                    type="area" 
                    :options="chartOptions" 
                    :series="series"
                >
                </apex-chart>
            </div>
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
    beforeCreate() {
        let role = localStorage.getItem("role");
        if(role != "ADMIN") {
            window.location.href = "/#/";
            return;
        }
    },
    created() {
        let year = 2024;
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
                    me.totalRevenue += dto.total;
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
    mounted () {
        window.scrollTo(0, 0)
    },
    data() {
        return {
            // current year
            currentYear: 2023,

            // total revenue
            totalRevenue: 0,
            
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
        statisticsOfYear(e) {
            console.log(e.target.value);

            let year = e.target.value;

            let me = this;
            me.totalRevenue = 0;
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
                        me.totalRevenue += dto.total;
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
            me.totalRevenue = 0;
            me.activeElement(e);
            let year = Number(document.querySelector('#statistics-container .year-selected').value);
            let month = Number(e.target.getAttribute('huyen'));
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
                        me.totalRevenue += dto.total;
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
    padding-top: 116px;
}

/* Container */
#statistics-container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

/* List month */
.year-selected {
    text-align: center;
    border: none;
    outline: none;
}

#list-month {
    margin-top: 28px;
    width: 220px;
    padding: 8px 12px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 26px;
    border-radius: 8px;
    height: fit-content;
}

.t-month-common {
    width: 100%;
    height: 32px;
    margin: 8px 0;
    background-color: rgb(255, 225, 230);
    color: #4a4d51;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
}

#list-month .t-active {
    background-color: #4a4d51;
    color: #fff;
}

/* Chart */
#my-chart-id {
    width: 100% !important;
    /* margin-top: 16px; */
}
</style>