<template>
    <div id="app">
        <section class="container">
            <div class="columns is-centered">
                <div class="column is-6">
                    <h1 class="title is-3">Worth your time?</h1>
                    <h3 class="subtitle is-5">How long can you work on making a routine task more efficient before spending more time than you save?</h3>
                </div>
            </div>
            <div class="columns is-centered has-text-left">
                <div class="column is-6">
                    <div class="field">
                        <div class="field-label is-normal has-text-left">
                            <label class="label">How many years</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control">
                                    <input id="years" class="input" type="text" v-model.number="years" >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-full">

                    <h4 class="subtitle is-6">How often you do the task over how long it takes</h4>

                    <table class="table" style="margin:0 auto;">
                        <tr>
                            <th></th>
                            <th v-for="y in get_y()">{{y.label}}</th>
                        </tr>
                        <tr v-for="(row, index) in table_data">
                            <th>{{get_x()[index].label}}</th>
                            <td v-for="col in row">{{col.label}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            table_data: [],
            years: 5
        }
    },
    mounted(){
        this.table()
    },
    watch: {
        years() {
            this.table()
        }
    },
    methods: {
        get_y() {
            return [
                { label: '50/day', per_year: this.years * 365 * 50 },
                { label: '5/day',  per_year: this.years * 365 * 5 },
                { label: 'Daily',  per_year: this.years * 365 },
                { label: 'Weekly', per_year: this.years * 52 },
                { label: 'Monthly',per_year: this.years * 12 },
                { label: 'Yearly', per_year: this.years * 1 }
            ]
        },
        get_x() {
            return [
                { label: '1 second',   seconds: 1 },
                { label: '5 seconds',  seconds: 5 },
                { label: '30 seconds', seconds: 30 },
                { label: '1 minute',   seconds: 60 },
                { label: '30 minutes', seconds: 60 * 30 },
                { label: '1 hour',     seconds: 60 * 60 },
                { label: '6 hours',    seconds: 60 * 60 * 6 },
                { label: '1 day',      seconds: 60 * 60 * 24 }
            ]
        },
        friendly_time(seconds) {
            if (typeof seconds === 'string' || seconds instanceof String)
                return seconds

            if(seconds < 60)
                return Math.floor(seconds) + ' sec'
            if(seconds < 60 * 60)
                return Math.floor(seconds/60) + ' min'
            if(seconds < 60 * 60 * 24)
                return Math.floor(seconds/60 / 60) + ' h'
            if(seconds < 60 * 60 * 24 * 7)
                return Math.floor(seconds/60 / 60 / 24)  + ' d'
            if(seconds < 60 * 60 * 24 * 30)
                return Math.floor(seconds/60 / 60 / 24 / 7)  + ' wks'
            if(seconds < 60 * 60 * 24 * 365)
                return Math.floor(seconds/60 / 60 / 24 / 30)  + ' mn'
            return Math.floor(seconds/60 / 60 / 24 / 365) + ' yr'
        },
        table() {
            let x = this.get_x(), y = this.get_y()

            this.table_data = []
            for(let task_length of x) {
                let row = []

                for(let task_occurances of y) {
                    let task_seconds = task_length.seconds * task_occurances.per_year

                    if(task_length.seconds * task_occurances.per_year > (60 * 60 * 24 * 365))
                        task_seconds = 'n/a'

                    row.push({
                        label: this.friendly_time(task_seconds),
                        task_seconds: task_seconds
                    })
                }
                this.table_data.push(row)
            }
        }
    }
}
</script>

<style lang="scss">
@import './../node_modules/bulma/css/bulma.css';
#app {
    font-size:90%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
