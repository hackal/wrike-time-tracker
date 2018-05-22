<template>
    <div id="setup">
      <transition name="fade-in" v-on:after-leave="success">
        <div class="fade-in" v-show="fadeIn">
          <h1>Setup</h1>
          <p>Enter your API token</p>
          <el-input
            placeholder="Enter your API token"
            v-model="token" @input="autoValidate"
            :class="{ 'valid': valid, 'error': error && !validating }"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false">
          </el-input>
            
          <a href="#">How to obtain API token?</a>
          <div class="loader">
            <i class="el-icon-loading" :class="{ 'validating': validating }"></i>
          </div>
        </div>
      </transition>
    </div>
</template>
<script>
import axios from 'axios'

import { mapMutations } from 'vuex'

export default {
  name: 'setup',
  data() {
    return {
      token: '',
      fadeIn: false,
      timer: null,
      validating: false,
      error: false,
      valid: false
    }
  },
  methods: {
    success() {
      this.$router.push('who-are-you')
    },
    autoValidate() {
      clearTimeout(this.timer)

      this.timer = setTimeout(() => {
        if (this.token !== '') {
          this.validateToken()
        } else {
          this.error = false
        }
      }, 300)
    },
    validateToken() {
      this.validating = true

      axios.get(`https://www.wrike.com/api/v3/contacts?access_token=${this.token}`)
        .then(({ data }) => {
          window.localStorage.setItem('access_token', this.token);
          this.validating = false
          this.valid = true
          this.fadeIn = false

          data.data.forEach(contact => {
            this.addContact(contact)
          })
        }).catch(() => {
          this.error = true
          this.validating = false
        })
    },
    ...mapMutations(['addContact'])
  },
  mounted() {
    setTimeout(() => {
      this.fadeIn = true
    }, 1500)
  }
}
</script>
<style lang="less">
@import '../styles/main.less';

#setup {
  .full-screen;
  display: flex;
  justify-content: center;
  text-align: center;

  .fade-in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    width: 100%;
    padding: 20px 20px 100px;

    h1 {
      font-weight: 100;
      font-size: 60px;
      margin-bottom: 10px;
    }
    
    p {
      font-weight: 300;
      margin-bottom: 10px;
      font-size: 14px;
    }

    input {
      margin-bottom: 20px;
    }

    .error input {
      border-color: #f56c6c;
    }

    .valid input {
      border-color: #67c23a;
    }

    a {
      text-decoration: none;
      font-size: 10px;
      opacity: 0.4;
      margin-bottom: 10px;

      &:hover {
        text-decoration: underline;
      }
    }

    i {
      transition: opacity .3s ease-in-out;
      opacity: 0;
    }

    .validating {
      opacity: 1;;
    }
  }
}

.fade-in-enter-active {
  transition: all .7s ease;
}
.fade-in-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-in-enter, .fade-in-leave-to {
  opacity: 0;
}
</style>


