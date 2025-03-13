import React, { useRef, useState } from 'react'
import Video1 from "../assets/Game.mp4"
import Video2 from "../assets/Time.mp4"
import Video3 from "../assets/Weather.mp4"
import "../JS/Follow.js"

function Projects() {


    const WebsiteSec = useRef(null)
    const WebpageSec = useRef(null)
    const ProjectSec = useRef(null)

    const hlClick1 =()=>{
      WebsiteSec.current.style.display = "block"
      WebpageSec.current.style.display = "none"
      ProjectSec.current.style.display = "none"
    }

    const hlClick2 =()=>{
      WebsiteSec.current.style.display = "none"
      WebpageSec.current.style.display = "block"
      ProjectSec.current.style.display = "none"
    }

    const hlClick3 =()=>{
      WebsiteSec.current.style.display = "none"
      WebpageSec.current.style.display = "none"
      ProjectSec.current.style.display = "block"
    }

    const [Project, setProject] = useState([
      {
         imgUrl : "https://media-hosting.imagekit.io//16181237b66b49e4/screencapture-steady-raindrop-034bda-netlify-app-2025-03-12-13_13_42.png?Expires=1836374121&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bavVfWRug9XDVvXYo4fVUDr4MOl7a~gtUTo9lEg8L9VJSf43jfgPVwEyGNMPfb1e2C987Ot5LXdwgH-UG8qPhCu54cGiyve3FYz8xep73HnjVWhadLI5vInqFvDHxDdk4zwV53PKOEvMtXGlmnZKlK6K3RYttmZcqE0hUVQoUE3Sk-SA1lF~HYx54hChXu4qnoD2QL-kpLFtmrvB8WFOl8s9~OajQfJqMwlT1ksIk3gk72bQCtcG3OO09c0u~7wX94XMyYNAwKkDSDby6Ca84psQIY~H3sqk-Jnpn7~1eexX9JMo~RFBFkTPX7fUTYuEnWNhWpLT95U8nf91M8lD~A__",
         git :    "https://github.com/HarshRaval31/Webpages/tree/main",
         live :   "https://steady-raindrop-034bda.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//9b8c20be73f74335/screencapture-elegant-vacherin-999ff8-netlify-app-2025-03-12-12_38_56.png?Expires=1836371462&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gxSZtX7EYH8OFGkc2W-F~RVQQehiwPU-hcF0G3loeG8LNddT6alaQCgXG-BdF0sZ69-2Z1q3J0oy6maghAJOi7kaYKBv676Ct7-6I13G5OqDaWzhninljTAzIOQaKHcLuHET5GKuB7b2Ph9aSrJn-EkzoZH2BoMmg9zF8-DaIVYrqDj4k7doR8jIEtnVMevABeHu9c1BUfm8Ht6QCfzWM7V-MFjS9mRyDOsECpI39GBPUKo4TJchAVieFFiaoXD0JXH7Wv2yOirqtAHJYfo6Q6OJvIco9KX23vxDyP3QrukDDrK19XPh22EXBCBpoQNcNu0wjKMb0S6ye1i9vSrTxQ__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://elegant-vacherin-999ff8.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//964b2fb47e844e36/screencapture-dreamy-banoffee-9ca860-netlify-app-2025-03-12-13_16_53.png?Expires=1836374128&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fS85UQ-ImoZGw961brTbgKpHBGvOFFRZmr6KHL8b9kCt5CNSdYk7-em-y-rqCPVL8RgAL14diy5UHxyCI1ctENsFT2SIVrRYIiniPI2-DFtn7ZChVHOSuFhBJcLLuPiLHX2yY9Ta-YiNCxFzvMH~3sw8oERWSKCXDhBIwsgpSioxdLPaScqQ9mWOE6wmtPM3ag-yvrGgC-Uj0LsjRjPJHyKeJ8BbcMRtFWgc41NZIOhtOuVPB0r1fbyNvd~-fs4NtHgvKogKrN0EdDWkGzXRCXD0YcFJs9WSJTLYZuODQC2XvrwRNFkh4PCiHaai~GW4Mb2qvM628bJy08UisjLkHQ__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://dreamy-banoffee-9ca860.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//1d8b7c389d434ea3/screencapture-moonlit-torte-62f74f-netlify-app-2025-03-12-12_44_52.png?Expires=1836371731&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Jxkq3SMjSRsgsZsEwl4PsamYc-HBmaFaZYHTx2l3bDvdIAyQX-TpAcdi2mIl5c0ZfqOvj4No~crTeDg2xdVTtwZ-eX6-JzFSajVZD-FLAcSMQVOTcsj0im0FIDFH07tcxEkJnMJJkj2lp-RcCy0IzSbyluAvN4Fu15N6wuF1YpepK-Z8lNuSSedI~3WgBP7USUqYsZml2Y9gnt9iXwdn0qjPnYUJwP1KXyjGo6dOuP1dK8L-kOH1XcuAAFgaUVLHYOtOh-wt9UKxCjDFGf-R-cSHJaZoR23d-ese2XS3NJmABqnfHVOZTQ7FE~Ba4p3KH2fcRKsnTYddXg4TC5zRsA__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://moonlit-torte-62f74f.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//17d28e1954e34fdb/screencapture-preeminent-halva-97bea8-netlify-app-2025-03-12-13_18_05.png?Expires=1836374134&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mmWilALQQB~fgr4nhmrLOk9RzSeAwa4LGf2U9zmzBU9zWZQwx-a6mpJCM0rqeqWTss4ZHvroF1L6igq81S5UO-fmiyp2b5GhZyFm58N23HQmWjK1nuhrvv1fpS4~pyz1TZfyqPV4TXdsL6B0Mr8huHooMzhO-irLngvkDI4xipZQTup7t1vcjz4dgOeIK6luJustcELwqimC~TC0F9MMEqWbec-DiiKA~Uuiwa~e6hQeoGotNbRF8kSbnySy~iUjgxYTOTTV2J5iDNELayJkgr1CO6UpScidP4GbPPfb4Kv7LiR1wWJhjovtH~ZZ600LUqqwyO1kgfi8~9Q6fYb8qw__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://preeminent-halva-97bea8.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//1cd7b84aa3044cd3/screencapture-jocular-parfait-c41b74-netlify-app-2025-03-12-13_18_59.png?Expires=1836374142&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YfDwCqiSvtvgq-OW4wjIqlYz6f84xI3L-AxF9Zpx3RWHIcTbLVdGwT4B0Sx1hcpsbW5ZBS4DWZ75upjzl3a08j8LpiXLRs6B0L47sMrUHeue-mbfC8cBVHgX-~uRpYP8My0dZU1paE3cTytT5HP-Wt0Il99u3rdVUd9X-jkpga5ZOb~K7lBV~0xPS6JgfiCOckq29J2GI-SENRbsintIdGFZCUdVNB14UXcR1g3J8SJfwL~blH~qk7OoG9s6OzJGcT5oUjYxj79IunMhIxLKV2nyIdlk2AXw3jOfSHGajdl8z41vBFM2yXxXCS4BZ9lOfk4sRho1MailwdaGgQNf8A__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://jocular-parfait-c41b74.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//b631612dd91a4b46/screencapture-lustrous-flan-1e9f72-netlify-app-2025-03-12-13_20_02.jpg?Expires=1836374730&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nDLyV98IIO07jPVXxmPlFuuNQJunVNrD0nJ76onsFSaVxXXnZES-Bjvr06~UxNkrmtm9VV2HdEWlQlOgCveJ3eoHce6-qinlwKOwqoCyFA-VrIUSWSV0jIGlh6k4dxPYd7WFyH5YcwszV67HZRZ5jlWfNmEBbYnK~2JMQo3pq-4-uu9P5~~6tUmMaN4OB3pDZDv1RnMTfHyAsMcMMp-I6~UrVEQG95wBiwqXKxlw71Oy54tGYeAMOV8N9fUu4~Y398QtU2b8Rr2OmqsFnvNGwJJ-msUtFkjAfdAL1PVbXs2GmOrLeYG5azeKhbwAlBhAIAaiQmtfvucsWGJkHpuzGA__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://lustrous-flan-1e9f72.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//3dc87b5b902a45f6/screencapture-mellow-yeot-29e936-netlify-app-2025-03-12-13_20_47.png?Expires=1836374624&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mPg4vzWoKH8jMXs~NDS0dSmLOx9AlH6~m8PujolQ2nTmn8zc-4rzjU7IApUN2tm0WeQE7mty0MEGEobgUpeEdJr2Delo4YXj8AOw5oFITnXbSIuMJn-6dUuMt-asqL-kIcYl0Es17HN7HYH7NBlgt-fAeXHfL1msqf~QsbDC0SUZ8MS3jvOWSY-AlSVIUX9BSqDEH-jtpjBg0WHYMH5vALkL-SwWCpzQ5TndD1i3zMpOo7DVuCPCUTa9GoUkPDxqqKo40Wgoq1Pa7ZUPXrX0Oaz9hjZW9F7q13M49cbHuQug68PCQ~ZS~iL34g2ZldV88IHpPoUWcc3hDOZ02L9ssw__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://mellow-yeot-29e936.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//3b8cea845b8b44ea/screencapture-spectacular-lebkuchen-eacb1d-netlify-app-2025-03-12-13_21_45.png?Expires=1836374628&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=06RtFcdkzg90d5dATrKUrAAxeTXucGWg54rGrv7OsYS~7c5k-2Dqh4mTfUv4zIcAesiVFokr9fXcfxKG8~hc7~yV1hfOhc3lNt4C16-lDkjd3WTtwGIRsCaGqsyoghOjw8yFGxw87X9kkDjm5kyYSfSvMOpt~qcfdVwdruomt5RTuVq2IHy5smEFcB8Hz6t6BGoEdLnKQ6bHkcKcLNqGGwSpslLt1y1aWx-ZukD8Zc6z-8xowR-7Uxjpu-8UyVhR0AH9lQbPfWHbkXuygu0zX8kvO2tbizx1nH8Ud-72JgcKhajuhCnALjIPMOf4iSHPUgkuFs8BTbG24Us4caTurg__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://spectacular-lebkuchen-eacb1d.netlify.app/"
      },
      {
         imgUrl : "https://media-hosting.imagekit.io//e63e26831b704a53/screencapture-spectacular-gecko-009261-netlify-app-2025-03-12-13_22_24.png?Expires=1836374635&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i0jhiDMeLHzOtz3yIxNG2Kc~3hBC5S6B5Fef83i~5fE-P2jJDPhZktC0KqY77nnlZIhdjD5-nwCwSCMS-oS-4rC8v2jiE4eiDJu1jhKb2dWPeXystWf7-xq30AfBRFvHaCXnaf0q4rNs48tPTC2pUVhXO0lZ5HwTOj28NUkERmuJj9uWW-LCvt7WW-tib85m5ymTdFG9vppiImuU-TWJLXNiG-F73ickq4VLce~CUuwwY2AyuKV3jMbRRbRS8ZmNQ2JYvSUNua8OuD-zHdlW5MU6JjluTKyDta6BWrPmF4LDmBkM8LIAQrk2kPy2G0Y1WDYFGz0LKigNZcPegmu1wQ__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://spectacular-gecko-009261.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//89bd31c06d354885/screencapture-velvety-sorbet-53b145-netlify-app-2025-03-12-13_23_35.png?Expires=1836374640&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cWZWVBzEcKPkLRuPBp86PLkH01egOAcAHzt3DOjK8EIjL6mxkiRO9Pmkugk9QvF9L2McRJhaVLUumY9oSplWo9UbLIONx-6DjYxgapPvchZEi307PFTb0EVwxaomTUCjAi5b9NP26VyuSSozorhim3rl88V16r~QR6GXDFj0ValCArjlW17rbUyjL89HByikWPCBJgtOV7cXy9g9Hj6RuB5Z7dwz4jDstdKlWh97OdVxK9OwgYO6HRQFYSSafIxwzIsyHc16IgiM6RFMaohq7ex0t-4wjuJIcstvZfW3Qz36Br0KjEg2DpzrvNdy03zjNwBoDv1ywKryowN2WA5FQg__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://velvety-sorbet-53b145.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//3a8cf73d64a54776/screencapture-lovely-monstera-5a589a-netlify-app-2025-03-12-13_24_07.png?Expires=1836374646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sFZcMrSL3lXw6nH1Fqbd0xhOjuebpqj1vu6y47ckdMHqKVxU~B~-K9KTh6m8cYbTRsifqhN2AWjL2jAEjExVzr2dwI1v6Pu3k~Ldvzz6-nQ9q3cIyCnv0seozzmtbTr~fxkdocOemYLHPNxhMGMWps19cHPs~HVyaSy~JV4Mr-IDQPiYddCRRNU54MREFeeGilQBUukNjLtosj1qpzG0-0xTX6r8tb5lQa~r9ec-MTTfeWJNjM03iSmEtk5CxhqUEcbi1iRJyUQ8j02Enf-RNBLmiiJgQ14KY3oeBbiETc4qu~-t52IWvoiDQvOTeKnhXBslAxieghfQWgzop5GWZA__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://lovely-monstera-5a589a.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//5df9365c11364446/Webpage-13.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1DX2glZE0qpiDIpRBTQQDur4XusR4PH9T7FRhfju8ZTw5H8KSn5gXT7CzvjT~Osz4iTNgbFywe-RTlcsnIZ43piQ0sQkmXeidFkYNhOF7lGeNh8BZLvbF5CH9F4i24uiDcR3IaGMI3BPl~~7dQ5-vmhuz~doVc6t7AovQpUk--hHMBoAEJOdAq06B50GdjppTQx0EdyN2fXHJq068YEsHRFwG1QfYGyh1rw8rcXJRdDsZtVtzIOK4TLXgxYGapGS7eWKDCt9igXFWKm8KTHhgGZ0w2mi3xJyaMBPJuY0mrMy5pucJ66gwqJHxzokf6g8wwQ8QmuHsRFQKHLp1ClGPw__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main",
         live : "https://jocular-elf-fd9cd4.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//ef73140d09a04bd1/screencapture-file-F-WEB-PAGES-web-7-square-html-2025-03-13-15_53_14.png?Expires=1836469719&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=V59dai2Hor2EfFNDsg4P4MPL85c9d-WAqe~QVNaRar~c5j28O0R0WgX1MX9Rw7sPdr93B3O7wBmHsxBdD33rQkFaGZNhnbsqmfxubKDS-FmFIpD28OeSFgiax0mk6PZKz~qI7Mu~xnBIqKfYmJGr~U204Sm7V9119JmGkCKm4p0JLDMKZ~WjP5zninRwVomaBeslhKRAVFtVyWx0J9c~aih0Vp16EaiHgggNKA-5p6zKRNci6HRJN2D~xtDEokSqEGP5ZlI~~aX-lvpEaGSzGyGLbZ05i67sxuKePGbp8238lFTm4-H1KsaixL7gn042u4Td~eDNUPH1ZC7CeJ9mLg__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main/web%207",
         live : "https://jocular-elf-fd9cd4.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//c5fe839fba9e414f/screencapture-file-F-SUBMIT-web-pages-web-5-Construction-html-2025-03-13-15_56_01.png?Expires=1836469751&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oFuqx3FDmay10bhlpPwAhFMCDs0i4G4iu1opFZyVCX5FSTcXCXC8XQNWgE5FpMpOg4pwG-bqPk86W5VLX~dYs8TLtlHSuzwPZzlfTcqAWqy4Idj7HY7HexxB~F9bDQH4BPQt62zqJj6Pf0cyvMqyy~P94-8q47kIlQ-VOtHGZCehAadRekZR3PZgiB44rwTAKd~q6XK6zR0ET1S2uBjcl8JNM89NpT-VlnZ5iQZ-aQq00OnPNRQPvWSMsxyEF7xmcgbs78ZORF8SVG1BRZy92t71iKg6LRxQljyBpGzMDtDBeeiiH1d4Razv9PrbYi-RN~vW4Nuluc8dNkJcsF2LHQ__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main/web%205",
         live : "https://jocular-elf-fd9cd4.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//325fc1d2679d44da/screencapture-file-F-harsh-development-Webpages-web-4-foodfun-html-2025-03-13-15_54_42%20(1).jpg?Expires=1836469829&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j6DBBBbuILaVqeBWvsndnt9Ix8N1mkUbN~XenwjDZ3K~rdhq06S1v4fpgN7jfhYGuzEeuKP7mj6rQ5VLgO698uqpDtTAOLR3aykETUqStvMTkjNzBQ4LIgqizcXdkdfS~YcUceR6EeFyLKzmp2J8ZlIu2JUzG2q3LCuZE322iJcQS0P8fbwSu-t7xza5347ZzdU3CnUBPHVMj4XM5RubTWVvtXFDbyHUddj9APSTcGeIjRihCbJRZDqOYGC4TldMZjg5kQ4tKHAfzHhXDX-UiBVmEmKbC5UyCwrKDEBIHlABXK2uqINk1VRC9SBAhznDwlsSpVpeoAfB7tMMuaGnUQ__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main/web%204",
         live : "https://jocular-elf-fd9cd4.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//fd9f277f4dec47b4/screencapture-file-F-SUBMIT-web-pages-web-6-Hotel-html-2025-03-13-15_57_24.png?Expires=1836469760&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Gybx3Zo8sVL-pSWDWRX-hMwbcLZQFZYTlfl6X~DI9VfReteZwd4SW4c5-c~lytwPfE7~Rz4CA3YCxvOM-fCemtiGBpQ4B48gM0qoDrVKzUfrPerppbL0he7h2Cl~c~3qSM6p661BbxSLiwwbHDNOIl13SVinyVcx1BeL9gYZlhcQW~3AdsIxl02TDiHjAQf~xVBOoa6BdUvZEF7WkYEvZ1A8GeAp4UHE-0ofq8o4BuJQGmUYNdIzzuhrZ90fPN~~mbBJGdTahsZ2wwTSMxwHbnCURiW4b70td17lfOJE7WY8JQIkgwRCJl2fX~ecouKMVFbesAlUYVDfB0TciW5xHQ__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main/web%206",
         live : "https://jocular-elf-fd9cd4.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//5bee0dc17f14417a/screencapture-file-F-SUBMIT-web-pages-web-9-knights-html-2025-03-13-15_56_32.png?Expires=1836469875&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bbESKXN9SZxCZt9GoSI0zMpsDbagXndr0LFsZj7DWpMJTdaZuknW6DS8wYP67J9pSm-KLcq2TLneAue0jaaSb8djiXOn536XFwM7JP9CZgW3MY0z7oC8m3rAxLDYW2M0JIJIHpHNHKxH98XQzxvPG7ou7t0TlnyA4w83hruTQF5mIH3z4c7ogMrpVi~TV-jFcPTWSwQCvwAIdObc43XJ-LuC6lISoaJAMlpv6WnAz1RlEH2U3-97rTCF7I7V5hY2s2DabNa8SM7jLuATmW25uSpw4r57M3qYmcyXERDdVefccPWb8Li9b8eViN3OEbku27dBrdjg0H1U9U0BwgHH7Q__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main/web%209ko",
         live : "https://jocular-elf-fd9cd4.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//ae408e1e728145d6/screencapture-file-F-harsh-development-Webpages-web-8-Hotel-html-2025-03-13-16_10_13.png?Expires=1836470469&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j4XbFzp71Q-9NDI5Pr4Sr~4A27UsSZ2ald09qP88jax1qdXZa0dPS4ntuliHXVvJzZ3DRlJgNsb0Dn-bpPcVQ7OuO8pUJQ~EW88aIByd~EqY-i0weAusghbkBK69fxz4VaoY~w5zISwItgz-qgUZJBSQ3XTQxkwrfpUKN~BosDIJdEGLqj33kB73Cg~EzO6q~YBsh15F~YC0izjLNRmZ1raY4x0fu1WBwkHraeqxwItS3YcpcDoRzrMGb4cc-5Mbq9hTeaogXqCBeEsdiQrpdteI8iiTfu4seSLyNwC72Cwqu1MbY-sp8F0g6XUhSSgiBJEHFIwRRkg1zDS3sgIDRA__",
         git : "https://github.com/HarshRaval31/Webpages/tree/main/web%208",
         live : "https://jocular-elf-fd9cd4.netlify.app/"
      }
     
      
])


  return (
    <section className='w-[100%] h-[auto] pb-[3%] bg-[#0C0C0C] flex justify-center items-center'>

    <div className='section w-[95%] pt-[3%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-full flex flex-wrap justify-center items-center'>

      <div className='w-[90%] h-[40vw] rounded-[10px] bg-[#1D1D1D] flex justify-center items-center'>
        <h1 className='text-[8vw] lg:text-[6vw] xl:text-[6vw] text-[#4BFFA5] underline decoration-2 underline-offset-[20px] decoration-[#4BFFA5]'>Projects</h1>
      </div>

      {/* ------------------------- */}

      <hr className='w-[90%] text-[dimgray] mt-[3%]' />

      {/* ------------------------- */}

      <div className='w-[90%] h-[auto] mt-[3%] flex justify-between items-center sm:flex sm:justify-around sm:items-center xl:flex xl:justify-around xl:items-center'>
          <button className='w-[100px] h-[35px] sm:w-[120px] h-[35px] xl:w-[180px] xl:h-[40px] rounded-[7px] border border-[#4bffa5] text-[#4bffa5] font-semibold hover:bg-[#4bffa5] hover:text-[black] hover:shadow-2xl-[#4bffa5]' onClick={hlClick1} >Websites</button>
          <button className='w-[100px] h-[35px] sm:w-[120px] h-[35px] xl:w-[180px] xl:h-[40px] rounded-[7px] border border-[#4bffa5] text-[#4bffa5] font-semibold hover:bg-[#4bffa5] hover:text-[black] hover:shadow-2xl-[#4bffa5]' onClick={hlClick2} >Webpages</button>
          <button className='w-[100px] h-[35px] sm:w-[120px] h-[35px] xl:w-[180px] xl:h-[40px] rounded-[7px] border border-[#4bffa5] text-[#4bffa5] font-semibold hover:bg-[#4bffa5] hover:text-[black] hover:shadow-2xl-[#4bffa5]' onClick={hlClick3} >Projects</button>
      </div>
      
      {/* Website-Section------ */}

      <div id='project' className='w-[90%] h-[auto] mt-[3%] pt-[3%] pb-[3%]' ref={WebsiteSec} >

        <div className='w-[100%] flex justify-center items-center'>
        <h1 className='xl:text-[2.5vw] font-semibold text-[#4BFFA5] [text-shadow:_0_0_2px_#4bffa5] underline decoration-2 underline-offset-[10px] decoration-[white]' >Websites</h1> 
        </div>

           <br />
          {/* ---------1------------ */}
          <div className='h-[auto] flex flex-col  xl:grid xl:grid-cols-2 xl:flex xl:justify-center xl:items-center  p-[3%] gap-4  rounded-[10px]   border border-[dimgray]'>
            
              <div id='website' className='h-[500px] lg:h-[700px] xl:h-[450px] w-full flex justify-center items-start'>
                <img  src="https://media-hosting.imagekit.io//6964d9c976374668/screencapture-cute-yeot-5fcd47-netlify-app-2025-03-11-19_24_14.png?Expires=1836309465&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=L~asBn9g6AxRYfO9WpO7~IMe0gVf4FXfdUchEwb7NsAQ~KxM2KZwjvrnU3DcQRLgvKtZq14k5mfTXZRynUOUvTkvTc3AzXFsu3KWl6DZqQ65TkZzyNuqf4SDkEEDXC7qZ9zq1jQZ~rqodB0yrhHuTu-fmk14JKZj3LptOwpl6w7Ljq8XoQaIawPSbKkD2~BJ0FpWVVnnSJLIhmKvOtNMNLcWVbBj4EmkRIbWXW67yCq~Unkd~~8-xI-SDIjQAyOcSFX7JJO9XnzkgrCUSdW7U8cAnpPMRC8O5iegY4wJudQpJRorY53~P1Z6aETi4GLeFjFy5HxFxxfP1QHv8fWkOw__" id='websiteimg' alt="" className='rounded-[10px] w-full' />
              </div>
              

              <div className='h-full xl:ps-5 mt-[5%] lg:mt-[0%] xl:mt-[0%]'>
               
                  <span className='flex items-center'><h1 className='text-[18px] md:text-[20px] xl:text-[23px] text-[white] underline decoration-2  underline-offset-[10px] decoration-[#4BFFA5]'>1. The Jio-Mart :</h1> <a href="https://github.com/HarshRaval31/Website-JioMart/tree/main/JioMart-master" target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[26px] ms-5"></i></a>  <a href="https://cute-yeot-5fcd47.netlify.app/" target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[26px] ms-2"></i></a></span>

                  <div className='w-full h-[auto] text-[gray] text-[16px] mt-[4%]'>              
                  
                  <p><i class="ri-circle-fill text-[14px] text-[#4bffa5]"></i> Project is a clone of The Souled Store built using <span className='text-[#4bffa5]'> HTML5, CSS3, Tailwind CSS, and JavaScript.</span> fully responsive I implemented several features, including:</p>

                   <p className='mt-[2%]'> <i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Category Selection: Groceries, Electronics, and Fashion</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Product Filtering: Top wear, bottom wear, etc.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Sorting Feature: Low to high price selection</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i><span className='text-[#4bffa5]'>CRUD</span> Operations: Create, Read, Update, and Delete functionalities</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Payment Method Integration</p>

                   <p className='mt-[3%]'>    This project successfully replicates the UI and functionality of The Souled Store, providing a smooth shopping experience with various product categories and filtering options. </p>
                   </div>
              </div>      
          </div>

          <br />
         
         {/* ---------2------------ */}
          <div className='h-[auto] flex flex-col xl:grid xl:grid-cols-2 xl:flex xl:justify-center xl:items-center p-[3%] gap-4 h-[500px] mt-[5%]  rounded-[10px] border border-[dimgray]'>
          
          <div className='h-full order-last xl:order-first mt-[5%] lg:mt-[0%] xl:mt-[0%]'>
                   
          <span className='flex items-center'><h1 className='text-[18px] md:text-[20px] xl:text-[23px] text-[white] underline decoration-2  underline-offset-[10px] decoration-[#4BFFA5]'>2. Flipkart :</h1> <a href="https://github.com/HarshRaval31/Webpages/tree/main/JS%20-%20Website%20-%20Flipkart%20-%20Project" target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[26px] ms-5"></i></a>  <a href="https://stellar-semifreddo-0f349c.netlify.app/" target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[26px] ms-2"></i></a></span>
                  
                  <div className='w-full h-[auto] text-[gray] text-[14px] mt-[4%]'>              
                  
                  <p><i class="ri-circle-fill text-[14px] text-[#4bffa5]"></i> Your project is an e-commerce website similar to Flipkart, built using <span className='text-[#4bffa5]'> HTML5, CSS3, Tailwind CSS, and JavaScript.</span> The key features include:</p>

                   <p className='mt-[2%]'> <i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Product Selection: Users can browse and select products.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Product Details: Each product has a dedicated details page.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Add to Cart: Users can add items to their cart and manage them.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Purchase Functionality: Users can proceed with purchasing products.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i><span className='text-[#4bffa5]'>CRUD</span> Operations: The website allows Create, Read, Update, and Delete operations for products in the cart.</p>

                   <p className='mt-[3%]'>This project successfully replicates the UI and functionality of The Souled Store, providing a smooth shopping experience with various product categories and filtering options. </p>
                   </div>
            </div>      
          
          <div id='website' className='h-[500px] lg:h-[700px] xl:h-[450px] w-full flex justify-center items-start'>
            <img  src="https://media-hosting.imagekit.io//17c96cd6acde4644/Website-2.png?Expires=1835458770&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DQA2ynQpKu1LZYsPaQc8~Y1LsHgowuXPk6nSnjbl9xA7uQC9lpl2S-A7YwWO7Eboz73sclYQ1k~Lf8ZiNCn1qQb0uCy11ymltp~hLHGrkuo6ZUIL~OekqiscV762DSd1BNHU~-zfdQX1bRLDzoZLgN~Z2IZ1wUrN7ggjJlaS02gsSlXsLmKKjg5py42bbZK4~TUjpnAFS2-6iMp5XY9EkgO0QwDgLTC3AXxK1wIfsL7l7qt18s1KFnQmlcjeWywsQKswfvMUsiGqeevgEElLe9k5zhtAjNpsAOHYQ4nFdgqc3czA1Kk78iPQYTeejoQdN1kCHG2hiiJhNEl57Exnkw__" alt="" id='websiteimg' className='rounded-[10px] w-full' />
          </div>
          </div>
         
         {/* ---------3------------ */}
          <div className='h-[auto] flex flex-col xl:grid xl:grid-cols-2 xl:flex xl:justify-center xl:items-center  p-[3%] gap-4 h-[500px] mt-[5%]  rounded-[10px] border border-[dimgray]'>
         
          <div id='website' className='h-[500px] lg:h-[700px] xl:h-[450px] w-full flex justify-center items-start'>
          <img  src="https://media-hosting.imagekit.io//07f15a0994014b56/screencapture-file-C-Users-harsh-Downloads-Harsh-Raval-Harsh-Raval-JQUARY-Admin-paanel-admin-panel-index-html-2025-03-13-15_57_47.png?Expires=1836469772&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nldc7R8zn42deT0OWDnHI5SJjfeRR1wT-SBCML3Yk~vrzYHl-zkSvuGq15OIk~18c66FxSEs-vYvHfIDqq5tZ9LidMJ2nCCZPcf3RysDDZ9ff9ryoLsFSASXFETkZxdy~ilyLl083qyf4PLKDTdCRfSb7U9WK5DbEhzbHBtdLGERfu2vUK7SOJQdwmzK9OkSH~8-urQruHh1D9BZLV5CWSiOjTVv-9A9TzTrHWaaUmylmgnsSFtQeQij7D3yu5uSZ3V3D3WjKSt1PDGKdRtxL~OJou2urxetdMY7lVfaEeh1Jkc~ZRm5vx9IqxIqQOXjLso30KZUzRPVwh3-HdAd3g__" alt="" id='websiteimg' className='rounded-[10px] w-full' />
          </div>
          
          <div className='h-full xl:ps-3 mt-[5%] lg:mt-[0%] xl:mt-[0%]'>
                    
          <span className='flex items-center'><h1 className='text-[18px] md:text-[20px] xl:text-[23px] text-[white] underline decoration-2  underline-offset-[10px] decoration-[#4BFFA5]'>3. Admin Panel :</h1> <a href="https://github.com/HarshRaval31/Webpages/tree/main/admin%20panel" target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[26px] ms-5"></i></a>  <a href="https://gilded-syrniki-3d4b78.netlify.app/" target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[26px] ms-2"></i></a></span>
                  

                  <div className='w-full h-[auto] text-[gray] text-[14px] mt-[4%]'>              
                  
                  <p><i class="ri-circle-fill text-[14px] text-[#4bffa5]"></i> Admin Panel project is built using <span className='text-[#4bffa5]'>HTML5, CSS3, Media Queries, and jQuery,</span> making it fully responsive for different screen sizes.</p>

                   <p className='mt-[2%]'> <i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5] font-bold"></i>Key Features:</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Counters (Counter.js) – Animated number counters for key metrics.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Interactive Charts (Graph.js) – Visual representation of revenue, sales, and trends.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Maps (Map.js) – Shows user activity/location data.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Calendar (Calendar.js) – Integrated date picker for scheduling.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Scroll to Top Button – Smooth scrolling feature for better navigation.</p>

                   <p className='mt-[3%]'>This admin panel provides analytics and insights in an interactive and user-friendly way.</p>
                   </div>
              </div>    

          
          </div>

          {/* ---------4------------ */}
          <div className='h-[auto] flex flex-col xl:grid xl:grid-cols-2 xl:flex xl:justify-center xl:items-center p-[3%] gap-4 h-[500px] mt-[5%]  rounded-[10px] border border-[dimgray]'>

          <div className='h-full xl:pe-2 order-last xl:order-first  mt-[5%] lg:mt-[0%] xl:mt-[0%]'>

          <span className='flex items-center'><h1 className='text-[18px] md:text-[20px] xl:text-[23px] text-[23px] text-[white] underline decoration-2  underline-offset-[10px] decoration-[#4BFFA5]'>4. Addina :</h1> <a href="https://github.com/HarshRaval31/Webpages/tree/main/BOOTSTRAP-PROJECT-COMMERCE-WEBSITE" target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[26px] ms-5"></i></a>  <a href="https://silver-kangaroo-28d22e.netlify.app/" target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[26px] ms-2"></i></a></span>


                  <div className='w-full h-[auto] text-[gray] text-[14px] mt-[3%]'>              
                  
                  <p><i class="ri-circle-fill text-[14px] text-[#4bffa5]"></i> Addina, static website,  is a furniture store built using <span className='text-[#4bffa5]'>HTML5, CSS3, and Bootstrap,</span> ensuring a fully responsive design across devices.</p>

                   <p className='mt-[2%]'> <i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5] font-bold"></i>Key Features:</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>  Modern UI Design – Showcases sofas and wooden chairs elegantly.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Bootstrap Framework – Ensures a responsive and mobile-friendly layout.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Image Slider – Engaging banner showcasing new arrivals and deals.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Scroll to Top Button – Smooth scrolling for better navigation.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Product Selection Option – Allows users to filter or choose products.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>  FAQs Section – Provides answers to common customer queries.</p>

                   </div>
              </div>    
         

          <div id='website' className='h-[500px] lg:h-[700px] xl:h-[450px] w-full flex justify-center items-start'>
             <img  src="https://media-hosting.imagekit.io//20c1c3a1851f490c/Website-3.png?Expires=1835458770&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nba-uof7gN6Etuh3gLr-XUpGGYVwgFjMLFgtVpRogrTjt8GivCKCVxGTvF2WD5gBOSQRBk9Jis1wXqFmGaX-sR8-oGSgPO3PTSpvvB8cbvspHVqTLWQB-pHWzWPRdcahON9McNM-U5nHOpFn-G28OXkUiBhMDY31zbtWKeLNAMathj663FOfhRZvM8pEaV0v8dZjI0Agp0IixPFgXCYc3dyQSqyMjK1vQ2OXt9TWxwm61c57RKJgxS15I-r~vy3mtKiEbvqIJz0B9VR8khde4TD2LpttSZlAHhp9L-~rasJ0W4gHzyr4KVh5AuEq5qR8J4tfUyjOlM-ETm7F3GJisA__" alt="" id='websiteimg' className='rounded-[10px] w-full' />
          </div>
          </div>
<br/>
          {/* ---------5------------ */}

          <div className='h-[auto] flex flex-col  xl:grid xl:grid-cols-2 xl:flex xl:justify-center xl:items-center p-[3%] gap-4  rounded-[10px]   border border-[dimgray]'>
            
              <div id='website' className='h-[500px] lg:h-[700px] xl:h-[450px] w-full flex justify-center items-start'>
                <img  src="https://media-hosting.imagekit.io//599aed8a09644f6c/screencapture-file-F-harsh-development-Websites-WEBSITE-JS-index-html-2025-03-12-13_53_53.jpg?Expires=1836377034&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XOsqXvtbM7GIaRhU517w4soJHPLLXthFhCOvaMFyZi937KRA8o1KJ8grckShqcDmNLPALdSpu36zWrnhFE1PU3E4a2ooyzbVrIsmH-dXWdcrZiNKEts~g-tufstp4xH-Ke9HRqIVXNaQudPH0z~aH2Z-eG4uPzu7Ed~GFGI0beKpaFmMHIpShRTue32Kqesr3LWJUMPSWUQegBIFE~KCqqur9hAEkn5wSnIFHhNqqLPp0kq2JSjLKVtm3vlnOff85q6rHliyXGh65En4XfmW9XzXJCYVY7zkOAORioUBdMg6TSw1E2-FrV0unVBpwfDhUM-SimP7mQgbCp5ZsbxF6g__" id='websiteimg' alt="" className='rounded-[10px] w-full' />
              </div>
              
              <div className='h-full xl:ps-5 mt-[5%] lg:mt-[0%] xl:mt-[0%]'>
               
                  <span className='flex items-center'><h1 className='text-[18px] md:text-[20px] xl:text-[23px] text-[white] underline decoration-2  underline-offset-[10px] decoration-[#4BFFA5]'>5. The FirstCry :</h1> <a href="https://github.com/HarshRaval31/Website-FirstCry/tree/main/WEBSITE_JS" target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[26px] ms-5"></i></a>  <a href="https://elegant-parfait-a609f3.netlify.app/" target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[26px] ms-2"></i></a></span>

                  <div className='w-full h-[auto] text-[gray] text-[16px] mt-[4%]'>              
                  
                  <p><i class="ri-circle-fill text-[14px] text-[#4bffa5]"></i> Project is a clone of The Souled Store built using <span className='text-[#4bffa5]'> HTML5, CSS3, Tailwind CSS, and JavaScript.</span> fully responsive I implemented several features, including:</p>

                   <p className='mt-[2%]'> <i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Category Selection: Kids, Clothes, and Fashion</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Product Filtering: Top wear, bottom wear, etc.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Sorting Feature: Low to high price selection</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i><span className='text-[#4bffa5]'>CRUD</span> Operations: Create, Read, Update, and Delete functionalities</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Payment Method Integration</p>

                   <p className='mt-[3%]'>    This project successfully replicates the UI and functionality of The Souled Store, providing a smooth shopping experience with various product categories and filtering options. </p>
                   </div>
              </div>      
          </div>
      
      </div>


        <br />
        


      {/* --------------Webpages-section-------------------- */}

      

      <div className='w-[90%] h-[auto] pt-[3%] pb-[3%] flex flex-wrap justify-center items-center hidden' ref={WebpageSec} > 


      <div className='w-[100%] mt-[3%] flex justify-center items-center'>
      <h1 className='xl:text-[2.5vw] font-semibold text-[#4BFFA5] [text-shadow:_0_0_2px_#4bffa5] underline decoration-2 underline-offset-[10px] decoration-[white]' >Webpages</h1> 
      </div>

      {/* ---------------div-section------------------- */}
      
       <div  className='w-[100%] xl:h-[auto] pt-[3%] pb-[3%] flex flex-col sm:grid sm:grid-cols-2  xl:flex xl:grid xl:grid-cols-3 gap-5'>
        
        

        {
           Project.map((el)=>{
             return(
             <div key={el.id}   className="border border-[dimgray] rounded-[15px] h-[450px] mt-3 text-center p-4 flex flex-wrap justify-center items-center">
              
              <div id='webimg' className='w-[100%] h-[85%] flex justify-center items-start'>
              <img id='img'  src={el.imgUrl} className='w-full' alt="" />
              </div>  

              <div className='w-[100%] h-[5%]  flex justify-center items-center'>
              <a href={el.git} target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[30px]"></i></a>
              <a href={el.live} target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[30px] ms-2"></i></a>
              </div>
              </div>
             );
           }) 
     }
      
      </div>

      </div>

     {/* -----------------Projects-Section----------------- */}

     <div className='w-[80%] h-[auto] mt-[3%] pt-[3%] hidden' ref={ProjectSec}>
        
     <div className='w-[100%] flex justify-center items-center'>
      <h1 className='xl:text-[2.5vw] font-semibold text-[#4BFFA5] [text-shadow:_0_0_2px_#4bffa5] underline decoration-2 underline-offset-[10px] decoration-[white]'>Other Projects</h1> 
      </div>

     {/* -----------div-srction----------------------- */}

        <div className='w-[100%] h-[auto] flex flex-col justify-center items-center mt-[2%] pb-[4%] pt-[3%]'>
            
            <div className='h-[auto] flex flex-col justify-center items-center border border-[dimgray] p-[2%] pt-[3.5%] ps-[4%] pe-[4%] rounded-[10px]'>
                  <video src={Video1} autoPlay loop muted></video>
                  <div className='w-[100%] flex justify-center items-center pt-2 xl:pt-4'>
                   <a href='https://github.com/HarshRaval31/Webpages/tree/main' target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px]"></i></a>
              <a href='https://luxury-gumption-36fa46.netlify.app/' target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px] ms-2"></i></a>
              </div>
                  
            </div>
            
            <div className='h-[auto] flex flex-col justify-center items-center mt-[3%] border border-[dimgray] p-[2%] pt-[3.5%] ps-[4%] pe-[4%] rounded-[10px]'>
                  <video src={Video2} autoPlay loop muted></video>
                  <div className='w-[100%] flex justify-center items-center pt-2 xl:pt-4'>
                   <a href='https://github.com/HarshRaval31/Webpages/tree/main' target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[20px] lg:text-[25px] md:text-[28px] xl:text-[30px]"></i></a>
              <a href='https://cool-tarsier-049cc3.netlify.app/' target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px] ms-2"></i></a>
              </div>
             </div>
            
            <div className='h-[auto] flex flex-col justify-center items-center mt-[3%] border border-[dimgray] p-[2%] pt-[3.5%] ps-[4%] pe-[4%] rounded-[10px]'>
                  <video src={Video3} autoPlay loop muted></video>
                  <div className='w-[100%] flex justify-center items-center pt-2 xl:pt-4'>
                   <a href='https://github.com/HarshRaval31/Webpages/tree/main' target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px]"></i></a>
                  <a href='https://verdant-fenglisu-5bd920.netlify.app/' target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px] ms-2"></i></a>
              </div>
            </div>
        </div>

     </div>

    </div>

    <a href="#project"><i className="ri-arrow-down-s-line  fixed bottom-[25%] right-[2.2%] text-[30px] sm:right-[2.8%] md:right-[0.6%] lg:right-[5%] xl:right-[7%]  md:text-[35px] lg:text-[37px] xl:text-[3.3vw] text-[#4BFFA5]" id="downarr"></i></a>
     
     

  </section>

  )
}

export default Projects
