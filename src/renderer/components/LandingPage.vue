<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/eos_collab.png" class="center" alt="EOS Calgary x EOS Cafe">
    <main>
      <div class="left-side">
        <!-- GENERATE -->
        <div class="doc">
          <div class="title">{{ $t('landing.generateTitle') }}</div>

          <p>{{ $t('landing.publicKey')}} : {{ newPublicKey }}</p>
          <p>{{ $t('landing.privateKey')}} : {{ newPrivateKey }}</p>

          <button @click="generateNewKeys">{{ $t('landing.generateButton')}}</button>
        </div>

        <!-- VALIDATE KEY PAIR-->
        <div class="doc" style="padding-top: 30px;">
          <div class="title">{{ $t('landing.validateTitle') }}</div>
          <p>
            {{ $t('landing.publicKey') }}:
            <span style="padding-left: 7px"/>
            <input class="form-style" v-model="validatePublicKey" :placeholder="$t('landing.validatePublicKeyText')">
          </p>
          <p>
            {{ $t('landing.privateKey') }}:
            <input class="form-style" v-model="validatePrivateKey" :placeholder="$t('landing.validatePrivateKeyText')">
          </p>

          <button @click="validateKeys">{{ $t('landing.validateButton') }} </button>

          <p class="status-text" v-if="validationStatus"> {{ validationStatus }} </p>
        </div>

        <!-- GENERATE PUBLIC KEY -->
        <div class="doc" style="padding-top: 30px;">
          <div class="title">{{ $t('landing.findPublicKey') }}</div>
          <p>
            {{ $t('landing.privateKey') }}:
            <input class="form-style" v-model="privateKeyToGeneratePublic" :placeholder="$t('landing.validatePrivateKeyText')">
          </p>
          <p>{{ $t('landing.publicKey')}} : {{ publicKeyFromPrivateKey }}</p>

          <button @click="generatePublicFromPrivate">{{ $t('landing.findButton') }} </button>

          <p class="status-text" v-if="generatePublicKeyStatus"> {{ generatePublicKeyStatus }} </p>
        </div>

        <!-- LANGUAGE -->
        <div class="doc" style="padding-top: 30px;">
          <div class="title">{{ $t('landing.languageTitle') }}</div>
          <button class="alt" @click="switchLanguage('en')">English</button>
          <button class="alt" @click="switchLanguage('zh_cn')">简体中文</button>
          <button class="alt" @click="switchLanguage('kr')">한국어</button>
        </div>
      </div>


    </main>
  </div>
</template>

<script>
import ecc from 'eosjs-ecc'

export default {
  name: 'landing-page',
  components: { },
  data () {
    return {
      newPublicKey: null,
      newPrivateKey: null,
      validatePublicKey: null,
      validatePrivateKey: null,
      validationStatus: null,
      privateKeyToGeneratePublic: null,
      publicKeyFromPrivateKey: null,
      generatePublicKeyStatus: null
    }
  },
  methods: {
    generateNewKeys(){
      ecc.randomKey().then(privateKey => {
        let publicKey = ecc.privateToPublic(privateKey)

        // Set
        this.newPrivateKey = privateKey
        this.newPublicKey = publicKey
      })
    },
    validateKeys(){
      const { validatePublicKey, validatePrivateKey} = this;

      if(ecc.isValidPublic(validatePublicKey)){
        if(ecc.isValidPrivate(validatePrivateKey)){
          this.validationStatus = this.$t('landing.validKeyPair')
        } else {
          this.validationStatus = this.$t('landing.invalidPrivateKey')
        }
      } else {
        this.validationStatus = this.$t('landing.invalidPublicKey')
      }
    },
    generatePublicFromPrivate(){
      let privateKey = this.privateKeyToGeneratePublic

      if(!ecc.isValidPrivate(privateKey)){
        this.generatePublicKeyStatus = this.$t('landing.invalidPrivateKey')
        return
      }

      let publicKey = ecc.privateToPublic(this.privateKeyToGeneratePublic)
      this.publicKeyFromPrivateKey = publicKey
    },
    switchLanguage(language){
      this.$i18n.locale = language
    }
  }
}
</script>

<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 100%; }

  .left-side {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #399ef0;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #399ef0;
  }

  .doc button.alt {
    color: #399ef0;
    background-color: transparent;
  }

  .form-style {
    display: inline;
    width: 600px;
    padding: 6px 12px;
    padding: .375rem .75rem;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .status-text {
    display: inline-block;
    padding-left: 10px;
  }
</style>
