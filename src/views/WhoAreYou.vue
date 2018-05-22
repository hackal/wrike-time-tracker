<template>
  <div id="who-are-you">
    <div class="who-are-you-wrapper">
      <h1>Who are you?</h1>
      <el-input placeholder="Search" v-model="search"></el-input>
      <div v-for="contact in filtered" :key="contact.id" class="contact" @click="selectContact(contact)">
        {{ contact.firstName }} {{ contact.lastName }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WhoAreYou',
  data() {
    return {
      search: ''
    }
  },
  computed: {
    filtered() {
      return this.contacts.filter(contact => {
        return `${contact.firstName} ${contact.lastName}`.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 && contact.type === 'Person'
      }).slice(0,10)
    },
    ...mapGetters(['contacts'])
  },
  methods: {
    selectContact(contact) {
      console.log(JSON.stringify(contact))
    }
  }
}
</script>

<style lang="less">
@import '../styles/main.less';

#who-are-you {
  .full-screen;
  display: flex;
  justify-content: center;

  .who-are-you-wrapper {
    max-width: 500px;
    text-align: center;
    padding: 100px 20px 20px ;
  }

  h1 {
    font-weight: 100;
    font-size: 60px;
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 20px;
  }

  .contact {
    text-align: center;
    padding: 10px;
    opacity: 0.4;
    transition: opacity .3s ease-in-out;
    cursor: pointer;
    
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
