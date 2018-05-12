# Offline EOS Private Key Generator

> Cross-platform multi-language tool to create EOS public/private key pairs offline


## Instructions
1. Download for your platform from Github Releases: https://github.com/eoscafe/eos-key/releases
2. Run on airgapped (ideal) computer or with no internet connection
3. Generate keys and/or Validate your keys

## Preview
<img width="800" alt="eos-key" src="https://user-images.githubusercontent.com/13677357/39959091-84e437cc-55da-11e8-99ba-c3ad70d715b4.png">

#### Extra information
There are only five runtime dependencies in this project:  
1. eosjs-ecc: Official EOS.IO library for generating/validating keys.
2. vue: Frontend library like React/Angular,
3. vue-electron: Integrating Vue into Electron,
4. vue-i18n: Provide efficient internationalization with English, Chinese and Korean
5. vue-router: Manages which page to load in application

**The application is intended to be run offline and will make no external requests. If you see any external requests being made, your machine may be compromised before installation.**

### **Virus Scans:**
MacOS Virus Scan (100% safe, 0/57): [VirusTotal](https://www.virustotal.com/#/file/0cca757a413d526805ae875fb29adfb5f92c9b311ec93ecb96d84c5f77e85a33/detection)

Linux Virus Scan (100% safe, 0/58): [VirusTotal](https://www.virustotal.com/#/file/c73568b393d5e6fb43fd95d0d08c4ab3338a2a10317a216f484dc95d7ddc575c/detection)

Windows Virus Scan (98.3% safe, 1/58): [VirusTotal](https://www.virustotal.com/en/file/d36e91a75dfc0d7139877cb6150cfd6b7dfb674a1cb6a63c83621299d8715a6e/analysis/)
The false positive is confirmed by [MetaDefender Report](https://www.hybrid-analysis.com/sample/d36e91a75dfc0d7139877cb6150cfd6b7dfb674a1cb6a63c83621299d8715a6e) to be a false positive, the anti-virus flags 'EOS' in file contents and thinks it is a coin miner.

#### Manual build

```bash
# Clone repo
git clone https://github.com/eoscafe/eos-key.git

# install dependencies
npm install

# Build for all platforms
npm run build
```
