<template>
 <div class="page-wrapper">
        <!-- Start header -->
        <Header />
             <div class="banner">
        <div class="">
          <figure id="banner-about" class="max-height-200">
            <a href="#"
              >
                            <div class="banner-logo">
                     <!-- <img src="../assets/images/banner/about-banner.png" class="b-logo hidden-sm" /> -->
              </div>
              <img
                src="../assets/img/banner-about.jpg"
                class="img-responsive w-100"
                alt="img-holiwood"
            /></a>
          </figure>
          <div class="title-banner">
            <h1>Reset Password</h1>
            <p>
              <router-link to="/" title="Home">Home</router-link
              ><i class="fa fa-caret-right"></i>Reset Password
            </p>
          </div>
        </div>
      </div>
        <!-- end of header -->
        <!-- login-area start -->
  <div class="container container-ver2">
        <div class="page-login box space-50">
          <div class="row">
            <div class="col-md-3 hidden-sm"></div>
            <div class="col-md-6  sign-in space-30 text-center">
              <h1>Reset Password</h1>
              <p>Sign into your pages account</p>
              <!-- End social -->
              <form class="form-horizontal" method="POST">
                <div class="group box space-20">
                  <label class="control-label" for="inputemail"
                    >Enter verification code *</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter OTP"
                    id="vcode" v-model="vcode"
                  />
                </div>
                 <div class="group box space-20">
                  <label class="control-label" for="inputemail"
                    > New Password  *</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    placeholder="New Password "
                    id="npass" v-model="npass"
                  />
                </div>
                 <div class="group box space-20">
                  <label class="control-label" for="inputemail"
                    >Confirm New Password  *</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Confirm New Password "
                    id="cpass" v-model="cpass"
                  />
                </div>
               
                <button type="button" @click="reset" class="link-v1 rt">Reset Password</button>
              </form>
               <hr>

                                <div class="no-accoun text-center">
                                    <router-link  :to="{ name: 'registration' }">
                                        No Account? Create New Account Here
                                    </router-link >
                                </div>
              <!-- End form -->
            </div>
          </div>
        </div>
      </div>


      
        <!-- login-area end -->
        <!-- start of tp-site-footer-section -->
        <Footer />
        <!-- end of tp-site-footer-section -->

    </div>
</template>
<script>
import Header from "@/components/navbar";
import Footer from "@/components/footer";
export default {
  components: { Header, Footer },
  data () {
    return {
      vcode: '',
      npass: '',
      cpass: '',
      role: '',
      token: localStorage.getItem('token'),
      msg: []
    }
  },
   mounted () {
	this.uid = localStorage.getItem('user')
	this.check()
	this.goToTop()
  },
  methods: {
    goToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
	check(){
	if(this.uid != null){
	window.location.href = 'myaccount';
	}
	},
    reset () {
      var vi = this
      const axios = require('axios')
      var l_email = localStorage.getItem('forgotemail')
      if (this.vcode === '') {
        this.$toasted.global.error({ message: 'Please enter OTP Code' })
      } else if (this.npass === '') {
        this.$toasted.global.error({ message: 'Please enter New password' })
      }else if (this.cpass === '') {
        this.$toasted.global.error({ message: 'Please enter Confirm password' })
      } else {
  		axios({
          method: "POST",
          url: vi.$root.URL_ROOT + "api.php",
          data: {
            type: "resetpasswordcheck",
            email: l_email, vcode: vi.vcode, npass: vi.npass,cpass: vi.cpass
          },
        }).then(function(response)
         {
          var data = response.data
          console.log(data.status)
          if (data.status === 'success') {
            vi.$toasted.global.success({ message: data.msg })
          } else {
            vi.$toasted.global.error({ message: data.msg })
          }
        })
      }
      return false
    }
  }
}
</script>
<style scoped>
*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
	width:100%;
	margin:auto;
	max-width:525px;
	margin-bottom:50px;
	min-height:670px;
	position:relative;
	background:url(https://www.swaracreations.mragank.com/admin/uploads/media/d1.jpg) repeat center;
	box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.login-html{
	width:100%;
	height:100%;
	position:absolute;
	padding:90px 70px 50px 70px;
	background:rgb(0 0 0 / 89%);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
	top:0;
	left:0;
	right:0;
	bottom:0;
	position:absolute;
	transform:rotateY(180deg);
	backface-visibility:hidden;
	transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
	display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
	text-transform:uppercase;
}
.login-html .tab{
	font-size:22px;
	margin-right:15px;
	padding-bottom:5px;
	margin:0 15px 10px 0;
	display:inline-block;
	border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
	color:#fff;
	border-color:#ba2930;
}
.login-form{
	min-height:345px;
	position:relative;
	perspective:1000px;
	transform-style:preserve-3d;
}
.login-form .group{
	margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
	width:100%;
	color:#fff;
	display:block;
}
.login-form .group .input,
.login-form .group .button{
	border:none;
	padding:15px 20px;
	border-radius:25px;
	background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
	text-security:circle;
	-webkit-text-security:circle;
}
.login-form .group .label{
	color:#aaa;
	font-size:12px;
}
.login-form .group .button{
	background:#ba2930;
}
.login-form .group label .icon{
	width:15px;
	height:15px;
	border-radius:2px;
	position:relative;
	display:inline-block;
	background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
	content:'';
	width:10px;
	height:2px;
	background:#fff;
	position:absolute;
	transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
	left:3px;
	width:5px;
	bottom:6px;
	transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
	top:6px;
	right:0;
	transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
	color:#fff;
}
.login-form .group .check:checked + label .icon{
	background:#ba2930;
}
.login-form .group .check:checked + label .icon:before{
	transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
	transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
	transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
	transform:rotate(0);
}

.hr{
	height:2px;
	margin:60px 0 50px 0;
	background:rgba(255,255,255,.2);
}
.foot-lnk{
	text-align:center;
}
</style>>