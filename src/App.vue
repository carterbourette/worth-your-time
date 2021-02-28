<template>
    <div id="app">
        <section class="section container">
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
                <div class="column is-8 is-offset-2">
                    <div class="table-container">
                        <table class="table is-striped is-fullwidth">
                            <tr>
                                <td rowspan="10" class="has-text-centered" style="position:relative; min-width:2rem; border-bottom: 0;">
                                    <div class="label vertical">
                                        How long it takes you
                                    </div>
                                </td>
                                <td colspan="7" class="has-text-centered">
                                    <div class="label">
                                        How often you do the task
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th />
                                <th v-for="y in this.y" v-html="y.label" />
                            </tr>
                            <tr v-for="(row, index) in table_data">
                                <th v-html="x[index].label" />
                                <td v-for="col in row" v-html="col.label" />
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer">
            <small>Relevant xkcd: <a href="https://xkcd.com/1205/">Is It Worth the Time?</a></small>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            table_data: [],
            years: null,
            y: [
                { label: '50/day', per_year: 365 * 50 },
                { label: '5/day',  per_year: 365 * 5 },
                { label: 'Daily',  per_year: 365 },
                { label: 'Weekly', per_year: 52 },
                { label: 'Monthly',per_year: 12 },
                { label: 'Yearly', per_year: 1 }
            ],
            x: [
                { label: '1 second',   seconds: 1 },
                { label: '5 seconds',  seconds: 5 },
                { label: '30 seconds', seconds: 30 },
                { label: '1 minute',   seconds: 60 },
                { label: '30 minutes', seconds: 60 * 30 },
                { label: '1 hour',     seconds: 60 * 60 },
                { label: '6 hours',    seconds: 60 * 60 * 6 },
                { label: '1 day',      seconds: 60 * 60 * 24 }
            ]
        }
    },
    mounted(){
        let local_period = window.localStorage.getItem('time_period')

        this.years = local_period ? local_period : 5
    },
    watch: {
        years(val) {
            window.localStorage.setItem('time_period', val)

            this.table()
        }
    },
    methods: {
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
                return Math.floor(seconds/60 / 60 / 24 / 7)  + ' wk'
            if(seconds < 60 * 60 * 24 * 365)
                return Math.floor(seconds/60 / 60 / 24 / 30)  + ' mn'
            return Math.floor(seconds/60 / 60 / 24 / 365) + ' yr'
        },
        table() {
            this.table_data = []
            for(let task_length of this.x) {
                let row = []

                for(let task_occurances of this.y) {
                    let task_seconds = task_length.seconds * task_occurances.per_year * this.years

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

td, th {
    white-space: nowrap;
}

.label {
    font-size: 0.9rem;
    font-weight: 500;
}

.vertical {
    white-space: nowrap;
    position: absolute;
    top: 50%;
    margin: 0 0 0 -4rem;
    transform: rotate(-90deg);
}
</style>
