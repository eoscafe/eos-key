# Offline EOS Private Key Generator

> Cross-platform multi-language tool to create EOS public/private key pairs offline

## Download (MacOS/Linux/Windows)
MacOS:   
Virus Scan (100% safe, 0/59):

Linux:   
Virus Scan (100% safe, 0/59):

Windows:   
Virus Scan (100% safe, 0/59):

## Instructions
1. Download for your platform
2. Run on airgapped (ideal) computer or with no internet connection
3. Generate keys and/or Validate your keys

#### Manual build

```bash
# Clone repo
git clone https://github.com/eoscafe/eoskey.git

# install dependencies
npm install

# Build for all platforms
npm run build
```

#### Extra information
There are only five runtime dependencies in this project:  
1. eosjs-ecc: Offical EOS.IO library for generating/validating keys.
2. vue: Frontend library like React/Angular,
3. vue-electron: Integrating Vue into Electron,
4. vue-i18n: Provide efficient internationalization with English, Chinese and Korean
5. vue-router: Manages which page to load in application

**The application is intended to be run offline and will make no external requests. If you see any external requests being made, your machine may be compromised before installation.**
