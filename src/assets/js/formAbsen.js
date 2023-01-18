import axios from 'axios';
import 'vue-toast-notification/dist/theme-default.css';
import moment from 'moment'
export default {
    name: "absen",
    data() {
        return {
            absen: {
                hourIn: "",
                hourOut: "",
            },
            namauser: "",

        };
    },
    created() {
        if (!this.$cookies.isKey("user")) {
            this.$router.push({ path: "/" });
        } else {
            this.absen.hourOut = this.$cookies.get('user').absenPulang ? moment(this.$cookies.get('user').absenPulang).format('DD/MMM/YYYY hh:mm:ss'): null
            this.absen.hourIn = this.$cookies.get('user').absenMasuk ? moment(this.$cookies.get('user').absenMasuk).format('DD/MMM/YYYY hh:mm:ss'): null
        }
    },
    methods: {
        logout() {
            this.$cookies.remove('user')
            this.$router.push({ path: "/" });
        },
        absens() {
            axios.post('http://localhost:9998/expenseModule/Absen/absensi', {
                ...this.$cookies.get('user'),
                absenDate: new Date().toLocaleString("id").replaceAll(".",":")
            }, {
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": 'POST',
                    "Content-type": 'application/json;charset=UTF-8',
                    Accept: "*"
                }
            })
                .then((res) => {
                    if (res.status == 200) {
                        moment.locale('id')
                        this.$cookies.set('user', res.data.object)
                        this.absen.hourOut = this.$cookies.get('user').absenPulang ? moment(this.$cookies.get('user').absenPulang).format('DD/MMM/YYYY hh:mm:ss'): null
                        this.absen.hourIn = this.$cookies.get('user').absenMasuk ? moment(this.$cookies.get('user').absenMasuk).format('DD/MMM/YYYY hh:mm:ss'): null
                        this.$router.push({ path: "/about" })
                    }
                })
                .catch((res) => {
                    this.$toast.error(res.response.data.message)
                })
                .finally()
        }
    },
};