<template>
<body>
    <div  v-html="trackOrderDetail" class="hide"></div>
    <button @click="clickme">CLickME</button>
    <input name="testname" value="test" />
    <div id="demo" class="hide"></div>
     <div class="myaccount-table table-responsive text-center">
                                                <table class="table table-bordered">
                                                    <thead class="thead-light">
                                                        <tr>
                                                            <th>AWB NUMBER</th>
                                                            <th>Order ID</th>
                                                            <th>Destination</th>
                                                            <th>Current Location Name </th>
                                                            <th>Customer</th>
                                                            <th>pickupdate</th>
                                                            <th>status</th>
                                                            <th>tracking_status</th>
                                                            <th>expected_date</th>
                                                            <th>delivery_date</th>
                                                            <th>city</th>
                                                            <th>state</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr> 
                                                            <td><span id="awb_num"></span></td>
                                                            <td><span id="oid"></span></td>
                                                            <td><span id="destination"></span></td>
                                                            <td><span id="current_location"></span></td>
                                                            <td><span id="customer"></span></td>
                                                            <td><span id="pickupdate"></span></td>
                                                            <td><span id="status"></span></td>
                                                            <td><span id="tracking_status"></span></td>
                                                            <td><span id="expected_date"></span></td>
                                                            <td><span id="delivery_date"></span></td>
                                                            <td><span id="city"></span></td>
                                                            <td><span id="state"></span></td>
                                                             </tr>
                                                        
                                                    </tbody>
                                                </table>
    </div>
</body>
</template>

<script>
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import Testimonial from '@/components/Testimonial'
import Partners from '@/components/Partners'
import carousel2 from "vue-owl-carousel";
import carousel from 'vue-owl-carousel2'
import axios from 'axios'
import $ from "jquery";


export default {
    props: ["catedatas"],
    components: {
        Header,
        Footer,
        carousel,
        carousel2,
        Partners,
        Testimonial
    },
    data() {
        return {

            trackOrderDetail: [],
            fields: {
                type: 'update_profile',
                uid: '',
                fullname: '',
                mobile: '',
                address: '',
                Token: this.$root.auth
            }
        }
    },
    mounted() {
        this.uid = localStorage.getItem('user')
        this.trackMyOrder()
        this.goToTop()
    },
    methods: {
        goToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        clickme() {
              var x = document.getElementsByTagName("field")
                    for(var i=0; i<=x.length;i++){


                        var check = x[i]['attributes']['name']['nodeValue'];//=='awb_number';
                        console.log(check);
                        if(check=='awb_number'){
                        document.getElementById('awb_num').innerHTML = x[i]['innerHTML'];
                        }else if(check=='orderid'){
                        document.getElementById('oid').innerHTML = x[i]['innerHTML'];
                        }else if(check=='destination'){
                        document.getElementById('destination').innerHTML = x[i]['innerHTML'];
                        }else if(check=='current_location_name'){
                        document.getElementById('current_location').innerHTML = x[i]['innerHTML'];
                        }else if(check=='customer'){
                        document.getElementById('customer').innerHTML = x[i]['innerHTML'];
                        }else if(check=='status'){
                        document.getElementById('status').innerHTML = x[i]['innerHTML'];
                        }else if(check=='pickupdate'){
                        document.getElementById('pickupdate').innerHTML = x[i]['innerHTML'];
                        }else if(check=='tracking_status'){
                        document.getElementById('tracking_status').innerHTML = x[i]['innerHTML'];
                        }else if(check=='expected_date'){
                        console.log('expected_date',x[i]['innerHTML']);

                        document.getElementById('expected_date').innerHTML = x[i]['innerHTML'];
                        }else if(check=='delivery_date'){
                        document.getElementById('delivery_date').innerHTML = x[i]['innerHTML'];
                        }else if(check=='city'){
                        document.getElementById('city').innerHTML = x[i]['innerHTML'];
                        }else if(check=='state'){
                        document.getElementById('state').innerHTML = x[i]['innerHTML'];
                        }
                }
        },
        trackMyOrder(awb_number) {
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "trackMyOrder",
                    awb_number: awb_number,
                },
            }).then(function (response) {
                var data = response.data;
                ev.trackOrderDetail = data
            });
        },
    }
}
</script>
