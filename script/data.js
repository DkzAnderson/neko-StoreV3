
class Season {
    constructor({name,description='',episodes,languague='Jap',
        finished=true, subtitled='Español', img }){
        this.description = description;
        this.episodes = episodes;   // Array con los episodios
        this.finished = finished;
        this.img = `./assets/posters/${img}`;

        if(Number.isInteger(name) == true) this.name = `Temporada ${name}`
            else this.name = name;
        if (subtitled == 'No') this.subtitled = 'Ninguno';
        if(languague == 'Es') this.languague = 'Español';
        else this.languague = 'Japonés';
    }
}

class Serie {
    constructor({name,description='',Seasons,img}){
        this.name = name;
        this.description = description;
        this.Seasons = Seasons;
        this.img = `./assets/posters/${img}`;
    }
}

let animes = [

    new Serie({name:'Black Clover', img:'Black_Clover.webp', description: '',
    Seasons:[
        new Season({name: 1, img: 'Black_Clover.webp', 
        episodes:[
            // Temporada 1
        "https://mega.nz/embed/BH1HlYJa#CbOMRf1nB-OyIb5mR2zRUKPGGXRfaaWVp-otSmPv6AI",
        "https://mega.nz/embed/caU3FYja#d9tJXPnv266RWVHePqEQyVIeaG5NWYoDvIdgwkG3idY",
        "https://mega.nz/embed/BDtiUTbD#fYqdpndB6xd7ooVmg3BO6G3R_CkeFY-ZKjO751xkmeA",
        "https://mega.nz/embed/EXFjkIjY#yrUoy4C5I3ztvBO4r2pdtFfeUBQ0ZVpMK7rIVMDv8WQ",
        "https://mega.nz/embed/pXsDiSDa#QPNdX-BR7YxsUQ_ijMTtnL-ne522ZCH3nKUAxkSm3FU",
        "https://mega.nz/embed/8ftARJpC#WIqjXl4GMr_whwNX2eZtUwQm-EQ2bTjyFCp7CMIxw4I",
        "https://mega.nz/embed/JXFjlKgC#1NLTVTgizf_FrFBJlp4TGI9UhGk9vdliNVtXe5Qs4VU",
        "https://mega.nz/embed/MO1mGBhZ#dFFnAbJnvOmvSU0zaLMnYjhk95F3sjA3HuRvTNrcJMU",
        "https://mega.nz/embed/RLVxyQ4Z#aRn9SEitYvXmFOP0BNsiHPOuyaxH7uIihNCd-QJlRlE",
        "https://mega.nz/embed/1OEhGYiS#j7hGlyYMbg7cK81oy2kveUKRrsnm4jTErE9ZfuA_Dk4",
        "https://mega.nz/embed/MCtkVIQA#ayxlGKFVpqJNMsLMAvpzJG-tjlmbYfbZ_P7Ar485GcE",
        "https://mega.nz/embed/kX8GTSxS#QPGTmlTET5USdTfLfiS9Eeu-hc8B7L2Zso-EMohjNBA",
        "https://mega.nz/embed/0bkzSZBI#we_HYJ-vQjbWgmwjd-ncZ4oJ_V2YKD0nKryi0ZClnnM",
        "https://mega.nz/embed/EP00yYSR#AcXOa0S9Dt9dLhjvKl7fMLMhqrkDtbKz-T9Ebef1PIE",
        "https://mega.nz/embed/AOtnDCrY#bRqIIHzj5otNA9IGNz6Jbqu4-yg8YEQH_vNeVetYJZ8",
        "https://mega.nz/embed/8eE03YoD#VX_pcowYV3iiZcHhGlOIqnb9iL78usQh2tp-vCO529U",
        "https://mega.nz/embed/9KdX3TCY#wWHkyBFn36wxCnK1TwVGFLtcoPRDmP7XDDcsS2dDxZg",
        "https://mega.nz/embed/BakUHBCB#w9-0i0p6j8WdtaNze6KzlyQzdUPJKi73p7vANpkSMjU",//18
        "https://mega.nz/embed/VathlSRC#7HIKkTFE4dD32oMBxwTwIqmLOgRw-ucRVp7pEHzOjTU",
        "https://mega.nz/embed/RTkmDAKb#uzSW3tlo6SKKQ7NnrU5txvroy4rIOlNWUdbYkEGLWRs",
        "https://mega.nz/embed/gP9SCJZB#6eE0WFbij_ONv89O58S4xBuG7qLD2YROHgpu8l31hYQ", // 21
        
        "https://mega.nz/embed/0GcXGD4I#DhpxVOlq19-LbkWrXvGt1SZhsqRMfMVcWYeHV5NECDs",
        "https://mega.nz/embed/JXVQzJJb#v01ugjkKekrElbfYAzd-psqdbp7mDDFV0nkpe_TZ4VY",
        "https://mega.nz/embed/gLknHSJI#9oY3YAPyCzP2SgybIglwvtyONwBXuhlNVPSMOovW4IQ",
        "https://mega.nz/embed/tSFVBQ6R#aiq8xqWxRu6vwRpKoFa_GR0Hp0gxe0LFy3Q9h9vV8x8",
        "https://mega.nz/embed/MakCRJzS#3pk4plf_2FNvSNQAXi4ZgdBswBDKlbH4ZTGswKMQtCo",
        "https://mega.nz/embed/lftXVAJZ#2yDcYDGPETJXE8_b4p4Wn7V-8Txzlt-LuDVo1vz_3so",
        "https://mega.nz/embed/RONQXD7S#NbC1IGa1D7-rfsZ2HlZu9_m0et9lzyKR5BQsqvbTmNA",
        "https://mega.nz/embed/gWt10BIY#ye53_oHCkMG4sbfapP66g1z2igqVlR-qTlztTexEFNo",
        "https://mega.nz/embed/9D0hkTab#mfVLwXY2J5qOf5f-3Li02nx_9cDZU8tyGwmYV_vp5Fc",
        "https://mega.nz/embed/ZeEHjb7J#IUeK3K4FV4VAXqS-7FWuYZEUjH5HWdjWRxIdY_HYvRM",
        "https://mega.nz/embed/0fkmmKCD#-lii8Z62A_ZfDYdwQX8YW6GdHFmOKK8_zjC5UI9OEQ4",
        "https://mega.nz/embed/4Ll0CQiJ#wGyY3NcMcnB-K6q0CFVB76GzLbZxacheD4sa0vIbz0I",
        "https://mega.nz/embed/ZPcXCbLL#_B-FUqGjv9zsJpjs5dNaMZVLIW4JAIwFFqNJC63nVMM",
        "https://mega.nz/embed/1H1EiZDL#b87D0J7_p2baKUU4gm0BaT5XeGRrpYZW003sES2tGTM",
        "https://mega.nz/embed/4XsG0CbK#PNucOTwobbCcF75lrH6ODohfiYlO5XijyIslKBV8ueg",
        "https://mega.nz/embed/0ftWjI7K#g8Vqszrqp_kb56BTR-BLmZ_AzVpEj3aJHruA3TyBxuU",
        "https://mega.nz/embed/oOVmwRyI#q3SPvEE8ACK7WYtbswC1fQXedUPwe0vquK0EJUZlRXA",
        "https://mega.nz/embed/JH0VTTqQ#0l0yZ7LpiN8_c86ZhbUGbp-yDtJGymRhS-NI0rmkHsg",
        "https://mega.nz/embed/oLNUUDyR#rIiOlcTCZVpRe05sd23qcmVtCJcADwSxLPNpGf7acAY",
        "https://mega.nz/embed/sDMzwA6R#VDxsoAnOhiEe65pVw0qx-hxRVVR3adQmPSI940Qyghs",
        "https://mega.nz/embed/MedC1ayQ#NKKRMWMYwmhmDcKWQfYE2gDMrLOyNlEeJIFmRp2vThA",
        "https://mega.nz/embed/8T92gRZD#tfdBv2SJCKfN_SfMOHIA8rBAs3w4lp51guR4wR1mVHM",
        "https://mega.nz/embed/8OsyUIKB#Q3GXnSvlyuxsb8gZDc1_8aP2fFiLtcqRo5HR7JYT6yg",
        "https://mega.nz/embed/9CESAJ4A#z6BRkPRrwINoCiwAgV8XBcBt6mVvnpVqfANFEUDe0fQ",
        "https://mega.nz/embed/tedDHD6S#P_FPF6VoLflZ1bEB87zzueSQaQTWdnRIwcdAQh7EX0g",
        "https://mega.nz/embed/QfcUVJaC#J4oyJrnB0KpeYZZzsWv_4vIF2DObTPsF65jj0Qp5tqs",
        "https://mega.nz/embed/RKlSwSrJ#8Tgzl1QNdaVA06Ipx5L379othzmaW-5IaZ55zaQhHoU",
        "https://mega.nz/embed/1GcXwDCZ#yIW2CWw33gK-ktgiv_SsycbLOrwMkbeg8Wc2WozRgjw",
        "https://mega.nz/embed/tXtmzS6Z#Ft1r_fjfrKwnsWfeVzgWXMSj6h00y4whO6urW92x6uo",
        "https://mega.nz/embed/tD0T1DrQ#lv-l-JyFPsMgO8TMN1QKyU5HnoEwHEGdzFvG8k9EYgs",
        "https://mega.nz/embed/4HN2WThA#zWZFt24wZEUodIG1uTide6DWvySnnKXbtrCy4YWDTg4",
        "https://mega.nz/embed/pSskRCQa#YbN0AcrmlQ-7i2Be9KmaJP9ytTDWo62MoVjAuXLJYmo",
        "https://mega.nz/embed/BftEkabJ#HzUyOwsqKq0zsU07CL-2lVH8AYcv9anoXiNQuZ_Ifww",
        "https://mega.nz/embed/dTdT3DhB#WUIxPL995IO8amzuZD5URdqzjZUHz0I-B-mkyCvqxXg",
        "https://mega.nz/embed/8GtxmKJR#UAXUjzemjbAkx61qp0d67CEFncjdmGajxoj2Yeqb4zg",
        "https://mega.nz/embed/ML9GjJbR#GrIOuKFVwDCDE3t3CAvSR5plvVGaOPG0RnijfhYMM0M",
        "https://mega.nz/embed/5e0hmYiQ#78Pdgr4SEQdlPL91SNYxE5T7Bm5-42znfmjosPFU10c",
        "https://mega.nz/embed/1Gcy2YhR#QOn16zk_rqz7A9dgt2pET4YX-xn355fbN4JFHtuwLQ0",
        "https://mega.nz/embed/hHVXQYrS#_2H3Ajv2gTp3EWjbbAvStobtHwzWuFpxdtJTq_u9xPE",
        "https://mega.nz/embed/YHF0zBqb#M5yU-GdqtwK70E8dj8MznNuW6QKyyjHcID57rsh4XO4",
        "https://mega.nz/embed/dCMQiIrA#gDpD5FlFuZw2FuVbSekQC3oR1SltAaHP5Z1UjBaD6Qs",
        "https://mega.nz/embed/5akiyRJb#u_AQLqdRdPAGt9ejEb2gMLZgTqMeMyqABCdzQoc0pJQ",
        "https://mega.nz/embed/ZSVmSCxC#yLb3ciHNvEsKfH-4j6GEjFlgKz3pNUsgjtH_vXzrpmA",
        "https://mega.nz/embed/4SVgULTR#pPuUk3IGvt5dK1bbP1kmxEfxxBNdnnV_06zeAeHZ-2s",
        "https://mega.nz/embed/gXdHmYJK#RJcqvoRxgssIra6R4Cv9tq3opBdN_UeZZ8F4oVyV5QA",
        "https://mega.nz/embed/MXVhWCLB#3dLfQHmZpZWHijgOgOtSlTkUSNnMCWf4giTJTrrh1jI",
        "https://mega.nz/embed/1eswRTRZ#03Fu64ayQnRzfnoaeR1qLzbM8Xa9R4oGPi9zp_VagS8",
        "https://mega.nz/embed/gTMTlRjb#wWfcN29QuWXjXu-erWUeudbfzI797ZHB5tttS-IddAw",
        "https://mega.nz/embed/1W91GDCK#wflxYG2XOr2V-w7udiqKPPQsZNlwImWl-MmLvJoETqA",
        "https://mega.nz/embed/QatRnCiR#HaoFIoxPSBwxpezPJtDygbPDIW5_pPJlRoOtTEtejmo",
        "https://mega.nz/embed/lC0gmCoC#kR9ske-O3e9-HhIvJ3RRW_NiFce3tUr3t7zL6FBxtKI",
        "https://mega.nz/embed/MG8mSSiL#T-h_K9qHac3gau-yAKAN63ofP6h7FnMnLunkoQ6wxQQ",
        "https://mega.nz/embed/cbkzBIDL#k79P9DCY2HguBh4KqveYgl5J7rZxceJ1C_8Ovbzmo7U",
        "https://mega.nz/embed/AK0yACTZ#xRrHaWKk0B6IHhxJ9S-DAqZiUB9yUpE1byAyVg6oCgE",
        "https://mega.nz/embed/lfVjARAD#lXT76N0jjlUSMk4ktMMnDGwq6kMu2EOZY8CUcTcppx4",
        "https://mega.nz/embed/MKFTBRKB#OhAPnT5V5bSDS-u6HZW00Q7RyWO_e2P97WbhLzrzXCo",
        "",// falta 78 
        "https://mega.nz/embed/NDtwnC6J#l9-EeTjjGLbpb2yoBF8z1RPomTzrUPyFKEk-FBGknpI",
        "https://mega.nz/embed/ESdB0YDS#M38EQ3fcPcN_jEsZiyA11S1RkBYu3gmFOJK_xr-teww",
        "https://mega.nz/embed/gbMHDASa#pS_r94bSdUgGmPPS0IJr3klYbDBtabTnh4RPChZQjcw",
        "https://mega.nz/embed/sG9CVRBA#cWYswGnDH0VczB-lfIjrH2ixVnirCY_YQzwSQxL3hpw",
        "https://mega.nz/embed/MHNmwbyJ#VwFb9hUYiWuE4jZqcqIo4k9zISgwl5Ypwa44B5Zxkf0",
        "https://mega.nz/embed/walTST4b#Lrrwxfj0RU1qGKbGcSkw2ONKAqBVgUNpUGVMlZtVJ_Q",
        "https://mega.nz/embed/pL1n0CTQ#ihQs9YXfz91ilfdA_ndXwOJjKmaY_3ULtaFSBPhz8Z0",
        "https://mega.nz/embed/0WUzCTSK#e-4to8_TdLWj3lg06AjY7y6hHq_jeI0hOulQycSEwEE",
        "https://mega.nz/embed/5O8QWCDS#bp94NFUGKaF2FkbuxMr0F1QUNhFaKWdzOi2RS7P_ty0",
        "https://mega.nz/embed/1LVDRZRa#RVEpVhsuRdqE3nIaqc9_MzzUR8xpdnCD_zA-MaLhcgQ",
        "https://mega.nz/embed/ZWNDGKiD#Qj4ZxzAbBO7jKc4mEspe3X-YIj92rHYy_Kep8lwg8wk",
        "https://mega.nz/embed/hacQACga#ESEH3DS7Jj8fEJS1kPtR0ms_2Ih6_oCcSEQbivaUXXI",
        "https://mega.nz/embed/EXFzRIqJ#oqMYQPuHUFqtuRyV3hkC2ZJTUmNtovnqS040I_4_l2Y",
        "https://mega.nz/embed/VbFimQjQ#7u7MeK6prGvRtrGazMlpOb4xQ7KJcb7T9tnOv5eTAlA",
            
        ]})    
    ]}),

    new Serie({name:'Castlevania', img: 'Castlevania-poster.webp', 
    description:'',
    Seasons:[
        new Season({name:1, img:'Castlevania-poster.webp',
        episodes:[
               // Temporada 1
        "https://mega.nz/embed/8jszURaQ#TJ_0NBQQrQzrxHxQmnE21F7tYFUl6JJfZrSlO0Uj0gs",
        "https://mega.nz/embed/NjEWTBbS#vfsc9rx26OtB3MX50UafbmrRSkuEB_g_cvxl3mk5GNk",
        "https://mega.nz/embed/0it2gD4R#k-7IQpc4431eLfM2oaGiNyz0KXMFvwKBmWnEYRgPdB0",
        "https://mega.nz/embed/IvNFkDCT#BSYrRZg9fxCM55upBPUk290_z8Qz2iKrGaY3w_RNLRY"
        
        ]}),

        new Season({name:2, img:'Castlevania-poster.webp',
        episodes:[
               // Temporada 2
        "https://mega.nz/embed/I2kVBYYZ#kQjA9-Vpx2UKEexx-AYab3Jvt679IkRdA7UCjsU-fzk",
        "https://mega.nz/embed/xrskhAQZ#5oeRs2_XWSaDEYrb9cH4VIc-s3XM8Cyq3IrbUOKRAuU",
        "https://mega.nz/embed/cytlgD6R#PGZS4wzUBCIVCxFZwFKCovj0V9UVP8KLo48yqRmnz_c",
        "https://mega.nz/embed/BjckwCgS#X0WwLUX3abScQphvEMfZMe7zEj6reck1i4XPPVnGt7Y",
        "https://mega.nz/embed/Jn9DxCDS#4Dtaid3AxJeSEVFQ_uJ-ae8Y2pikoRS9Ca1TAViVK74",
        "https://mega.nz/embed/F2sljKhb#R17E7VOxJhuvQV9Xvb1hwJ33596a4p8OyMlkOSHLVbI",
        "https://mega.nz/embed/BydRkIBD#1wKkVY2Tm6UFvu6IC6syByK0fGU3z0XpRS2-APnpWAI",
        "https://mega.nz/embed/tjNDVBhC#wMDSEQ_PATzSEw3N2r4MC1FnZwxioRsdMCXjT4t9FKI"
        
        ]}),

        new Season({name:3, img:'Castlevania-poster.webp',
        episodes:[
              // Temporada 3
            "https://mega.nz/embed/Rr8VVbLa#0bgUrxqQSR13m1aVHMeQdk2ssFUh1nU8gv1EJH_uiI0",
            "https://mega.nz/embed/R78yXR5A#WaMNbvBsdGmsFipGnHx4tsO_-KOaWWgmuN0mQkmSm5Y",
            "https://mega.nz/embed/lqlWjLID#oF3aoZJ6RRGbyt7vRP60lAR7v-q8ef_A3raX2u57yzY",
            "https://mega.nz/embed/wit2BQZY#zl5s4_WBJopiNfZTWQTVdN3ImbcDPeLPyEmlUCIz1eo",
            "https://mega.nz/embed/InkCkTxI#dxI7W-OpquYPgA-hJGewm9xgnp1Q0xpJned4eGWX3yA",
            "https://mega.nz/embed/xnEUiBKR#9uTwu7UJUOtAhNHVoPO4ySq-95rwyuMJ3gu2RbNaIxA",
            "https://mega.nz/embed/1y8BRZYY#7f5YgReRu8RFq-kv2YGWuoj-osCgA3cXXIuczLDM_rE",
            "https://mega.nz/embed/Jz0D3T5L#AFGddm6q-q8GlInHxGPwjcN6-xmE-SRD5IRmGOl_SzU",
            "https://mega.nz/embed/BiE01S4Q#Oo9dV6WZW7MJXUparFL5eky2mEqLHaEhRORwlePQymo",
            "https://mega.nz/embed/sqsBWDoJ#5wsp7uzz9M0LZsrjpQCaZTk5HV8P7pR4ws3IBMixCqI"
        ]})
    ]}),

    new Serie({name:"Hell's Paradise", img:'Hell-paradise-poster.jpg',
    Seasons:[
        new Season({name:1, img:'Hell-paradise-poster.jpg',
        episodes:[
               // Temporada 1
        "https://mega.nz/embed/gn9RBRhA#KEdidCRyuKFXuMmWwfWS7GHfWmpWt498L1uOBUUYkKI",
        "https://mega.nz/embed/w7VAEBAJ#y5ryS0mLub2FVgOx5DKpjCyT_bHbBnKcbvbIeSfLiHE",
        "https://mega.nz/embed/tqNHFSJB#0DRZz71RZO9U5d26YJe5uaXdJn-C65AFE4jdfoOaEgU",
        "https://mega.nz/embed/06EhGYiT#Lyrb0TU29fnUd_6fY2bzGS3qUu3GTBxVpI0e-kJkE4M",
        "https://mega.nz/embed/13N3QDhR#K8ehV32cLghBr2a1iA_8y--xb8D0rhxn-UNRMZmIB9w",
        "https://mega.nz/embed/huslgQhQ#gSA-NkJZGA4NpDPNmQkYyEqGUSj0JU85FuLEouNAxCY",
        "https://mega.nz/embed/p7Fy0ZoI#uShrAbM2fCCil_BatobI7bNfJZL5HHYAj_xND3m_SC0",
        "https://mega.nz/embed/U29gzSRD#Y292FGaNMW6FqL3zcMzoZazL-Z1pG47T0ESTCCfrPXU",
        "https://mega.nz/embed/5mdxmIxI#vUf7GqZfILWeKhDh5_pD-xgSkH971bhnQ_Zcnhbua5U",
        "https://mega.nz/embed/4jkhwaRK#pS5-kNYXx8Mk37rfxyv5czSLgcIhxZ9Gya9Jlqh3rUE",
        "https://mega.nz/embed/g28CGQ5I#up-cPMZ6DCGiAsQEAfJNnGCe_ooowmJMmY-oI4xIDCk"
        
        ]})
    ]}),

    new Serie({name:'Kenja no mago', img:'Kenja-No-Mago-Poster.jpg',
    Seasons:[
        new Season({name:1, img:'Kenja-No-Mago-Poster.jpg',
        episodes:[
           // Temporada 1
        "https://mega.nz/embed/C0ZnnLCJ#wwCGmak_fOhsl-ysYRlYR5pxexnK2fYdl6G8rugEIBY",
        "https://mega.nz/embed/CthUEboR#pa_36XR9sBkYXqJTZNBOQtjyW_fjhSmg3c6PqpE3WOs",
        "https://mega.nz/embed/exhn3RCB#ak2B0JPexJl418QUF0EtYFj0UMaUmeM-QHuhMKrwxQQ",
        "https://mega.nz/embed/65okVL6b#lhjA30fROudZXBdnOjPBvmSDZhNxaC_u_rhoTyPuYnM",
        "https://mega.nz/embed/iww2TIxI#K7ajAAf1aykfXfVeikX2Y5GlFW_rrEIHUq5WWQw0CJ4",
        "https://mega.nz/embed/i55EzA5L#DgaIkkSv6kf4UKPp7ZwnaTzDsmX20OpDG40x5GHJM-w",
        "https://mega.nz/embed/epZWkJjS#79Eg3nNaRV8PiD8AfbhJ3BwFtblHFF5aIpsAttrURRs",
        "https://mega.nz/embed/T1BB0YhI#k_na7u-QOo5P3SYv1YBYOfZmaIelDgfZnmzvKlIcKeQ",
        "https://mega.nz/embed/6sJl2Cib#rmdR5xpLLQYqfzi44FhMVs24nb0i5s1GhlYbE_aX4iA",
        "https://mega.nz/embed/Sk4SFL6a#GhDwuy7_crsg9TD20-cbWejLt0qU-UB1CH4IJ0BXadg",
        "https://mega.nz/embed/S8IVGTLJ#VdBlADqMG6f5vnlcdImQX_NQ4i0dosTMNYSJFAjEs-s",
        "https://mega.nz/embed/ilYh3QzD#kVMK7D-vkANn0zYFOsgR8w_AGPHSibtlxF12NrX4N9k"
     
        ]})
    ]}),

    new Serie({name:'Kimetsu no Yaiba', img:'Kimetsu-No-Yaiba-poster.webp',
    Seasons:[
        new Season({name:1, img:'Kimetsu-No-Yaiba-poster.webp',
        episodes:[
            // Temporada 1
            "https://mega.nz/embed/RyVQQIaK#2Q337aeQobM-FfoKdLOW6b59NqoWGQrpHiAR6D5HeIY",
            "https://mega.nz/embed/8z1AzTZJ#a8W5X4ffBLzdpXaQ_A3J-GMQ5bDO0hR9N5R_Lm1K6DE",
            "https://mega.nz/embed/BydwxLTA#3dxoeRIthGPVtnodl7gIAWrwSxi23U3IX4ju4MM-E6I",
            "https://mega.nz/embed/lyFAFZgA#d73ReEXbqYL9RALQo7AVWIFlbEHuZp_z9KSuMaX2ZbE",
            "https://mega.nz/embed/JmV0EATJ#8jT4AR--Ov8UAgg7opZLz-nqCs7jeA_ppfGGmUeDPFM",
            "https://mega.nz/embed/susXAILS#fe94CexL7s4wnfLDsvBfO-KrfYPwbk7UrIJXi2CA9zI",
            "https://mega.nz/embed/Vn9HGaQY#qOH8JMsCDHOUaBfYB-aPSsTWh55NtXlgn03WMm5YC50",
            "https://mega.nz/embed/B2Ni0BpR#MlWDO3DIRQgvECjytq9l6Gys2TsJMhNgQYOVtW_dweU",
            "https://mega.nz/embed/kuFwzYYS#8aXt9mb-mTgbrVNsPIqlbxGz3v5wRpwc3r7JvGmy3Dw",
            "https://mega.nz/embed/9nkVVSDB#csjMWKwzsExSoBnyj1JFPLpIwcBOe2BDs3X8Z2PVM0E",
            "https://mega.nz/embed/EmckUTgQ#7ElgMse4AeZrSoFowNDy6HGYh0fWFabDY1SHbwUjGf4",
            "https://mega.nz/embed/giMFiTwY#eI1PbylyaKMaRHx-uGr1Cb16Bq91btn890sVvyPksyg",
            "https://mega.nz/embed/9q9zxAiI#0gZnWvh10q_FX9JakaCelkKypVCJd403s7ApFTMEdX4",
            "https://mega.nz/embed/dmNXEK5J#nFyk7YC0RkakNhffuq1AqlBsBn9B1Fuj9kJ4-LUTzIk",
            "https://mega.nz/embed/VmlyzCRD#J5K21IbvlUfg1KAF9R_NnF0Vr8CgerLpa9CZ740sVpk",
            "https://mega.nz/embed/xiFhlBoS#xP7uQwJztMger5-wgDLfkqruoQ1_IGZs1ukew42-LIk",
            "https://mega.nz/embed/F70BxaDI#5j4Pyp0c22Vdo8lcqWO0ziMxU928NfJKcGhV0wuWrVI",
            "https://mega.nz/embed/dm0QhQQK#f66OP6Yqi4UWfKtHDkzeJjZ6YpuM-01E02tKcTFgsnA",
            "https://mega.nz/embed/IqEiUYyL#bdlC9LEDf8M5DH31usCtpzsHMdj9zsUyAWhm4qP2jRM",
            "https://mega.nz/embed/g6dBUCCC#h8-yfFrRPOB-NWUJoUz2zs1tpJSEmDCdCLH0YZFAjAE",
            "https://mega.nz/embed/Br0mGByQ#rRR5z98TWztbVQ2hLz3cFZR3_OdUg9g6groAHFaQvZI",
            "https://mega.nz/embed/xyFQHaIR#axkUgQzikqJhhpND4rm_CFBYPowIdsuUT4x_DrGuQ9Y",
            "https://mega.nz/embed/FyNk1JwC#lth9HLYyrd73xSx7OgcGvA_GYs6eJiqYTDcPRahzYuY",
            "https://mega.nz/embed/E6MW2ZqZ#cFWlZR27l5pbozMjv8WnEjjXDaQdXmECeRdf5azp0y4",
            "https://mega.nz/embed/h70GDILb#X6uy1bhcHJBsu1isG6t_MVEL5LswsM8E4_wQ8eamTY0",
            "https://mega.nz/embed/R2EBwJBZ#RvVFpXVNzm7A7BKfqKuhZWjlVXM3VIryMbSJSZqk0iY"
        ]}),

        new Season({name:2, img:'Kimetsu-No-Yaiba-poster.webp',
        episodes:[
            // Temporada 2 - Latino
            "https://mega.nz/embed/oPETgb5Z#ft1ZLu4ygyhQLuMLWZhvPEKRlYydfeL0jalLuJ0kmho",
            "https://mega.nz/embed/FCdjhIYa#EBb9HK8aQ6eufCyOYMfEmcCiQyquOjj9FTsLoI-lZ58",
            "https://mega.nz/embed/MTs0hb6Q#NzYL4GcsmYUvydQ6QjP9OwNJU0SHwzCkBIkJ-nx9qAk",
            "https://mega.nz/embed/AXtjSLjR#cOYyVKTenKIJ_WTbyhNY2mXAASZRezRgjxvsjsDrwcI",
            "https://mega.nz/embed/VPFhxS7I#H5H1uwef-gcO7Ka7RUr1GjfWxZo2A5ZUchgfc5zXhug",
            "https://mega.nz/embed/VfMlwYpZ#rQRLtipH8BMYESjiiyNUySf4DQ4CgvbLwIX5KxGUMJE",
            "https://mega.nz/embed/VfN11AoI#N3rDefO6EAJhJyouZQFACm5WJzwFVoUWyaTvm4_esHM",
            "https://mega.nz/embed/RLMEzKQK#U5o1Vg-Q53mEHmdnalJjW-yDrFiPR-zLbJjl4FDf_cE",
            "https://mega.nz/embed/VH0DRLrT#dQXKNcQqM_F_V3WQp-RdkpOUzgIDxGmKCsCjluoUy0Y",
            "https://mega.nz/embed/gCVwDSDJ#7LCO8dRPHu4BXAcznTbsjrr94DMo2GGdheHI0LS8rIc",
            "https://mega.nz/embed/lOUhHDAD#3SvaxEVMM1B_ehZwyHTqDRw24teDqoDtcI7cxb20Aaw" 
        ]}),

        new Season({name:3, img:'Kimetsu-No-Yaiba-poster.webp',
        episodes:[
            // Temporada 3
            "https://mega.nz/embed/gPVklSgZ#utS0Od1lRKyMIWhtJqld-aTztlhr2EPKTsvSbqREln0",
            "https://mega.nz/embed/8WsnSJJA#9lK91Da8mlWS9wgt99SAsXhayR9gt6QWT2IpAen2QcQ",
            "https://mega.nz/embed/pKMCXbIa#NmcnQNdE2ZdApR6eTzFofpHKO-YTno3x9KXzUIifMGI",
            "https://mega.nz/embed/dDllAKyB#Jdmxls9D5sujlmC1ITUsLty3NCZ4uN9vwpEM9jj_-0E",
            "https://mega.nz/embed/YGN0EK6D#apuGekze3AA8QqWvJug8juANE-fwGcIwKUAKwbj4i2U",
            "https://mega.nz/embed/BK12xAzJ#Z5vhDgjpGLs9CDo6k7Vtgx64COKoSEPQd0W9TWX7D0c",
            "https://mega.nz/embed/4LdXzAQb#nLJA1ZDN23XeU1mPmpja3xP27LlS_fU_VAe94y338nw",
            "https://mega.nz/embed/tWUj3AaI#9DxhCDUNTuY26P5Fdb9PEpSdp8fSEDnZTxUma2TH4S0",
            "https://mega.nz/embed/1PNyDTRS#-5W9LUsRWzJhaM6y30d-g5f2bqc9QGGmmiFd5JaPE94",
            "https://mega.nz/embed/4eElzBQJ#5iQDInJPCifCoGMWb1LGStCa_pBHxngD5e7HchLyKXk",
            "https://mega.nz/embed/0Pl0UZzD#9A9BreqFRLSgy7zhJO4m1dbiIgWY1ReLbjTRq2AH81U"
        ]})
    ]}),

    new Serie({name:'Log Horizon', img:'Log-Horizon-poster.webp',
    Seasons:[
        new Season({name:1, img:'Log-Horizon-poster.webp',
        episodes:[
            // Temporada 1
            "https://mega.nz/embed/R3FVlKzI#e-bcvUJqqqFnzBFKD9qg1zxJOhkylyeYVcDhyTmwSKc",
            "https://mega.nz/embed/hqcihYRI#HqsvISfrYebzo9sjbFRH2hKq_oow8wPKn-GzWVa-NXw",
            "https://mega.nz/embed/QiUmjSwa#bDeBoUfS1QQkrYCQKPot3x7j_1weYV2IR30m8TatzRU",
            "https://mega.nz/embed/gi802SjS#QBimaloVT40nn5wZ0--6swBuHqYZQI1YQ_TcOqkEaPA",
            "https://mega.nz/embed/p3U3yTBT#DnGRZ1iJLnRyzRO92wjg4FY1sxkfzWEoNrOUYMXTUh8",
            "https://mega.nz/embed/trkh1aia#c4J7IkFk4GkJe2oitcfNQwum7xYQi-wcbupz3ey5UWk",
            "https://mega.nz/embed/pyUXGC5I#PIWi9nWW4UGfmQ-7cE30OTsUaIYu0VHWn5hq5VZ_DBw",
            "https://mega.nz/embed/13lhFDoI#A1hB716ZkLFaR_GLowodCA0L3icqnvNhdDNd6J_Aalk",
            "https://mega.nz/embed/NqFSlSCa#MKdig1PdohaXGPrrkC303WC6REUpGUs-qQ7In6Wg_mI",
            "https://mega.nz/embed/E681XbYA#DSaKYWAGVvDYAyRl_RXhniDdwk1cFh2K3c42IKkv5LM",
            "https://mega.nz/embed/cydAVLbK#TfhY1jfhl-TT0G2Rx8xVn0ajzzMqgQJz6R3fPLz3SRw",
            "https://mega.nz/embed/07MAQKhY#EKdE52BkxHO5fZoSv-_VzFMgw-JLR0wDr_T8p9gmTco",
            "https://mega.nz/embed/ti0hhKoK#Hxx2rkd8BvohFWKGgGFauT7kNJZ6X12JKW9eAYbq8ms",
            "https://mega.nz/embed/hmF3jZBA#RAtix07RF9WDHmjUzJ7sCxu5bhxqdmpD35BHI5pgL8s",
            "https://mega.nz/embed/NzdySbhI#I5DktNPV26EQQ3yGldkEcJccamrEEMXeJYqTzVGWjk4",
            "https://mega.nz/embed/9idykb5S#my4PhCFUl9TK9pLHK7Y0osjULT3BT7cg-m9usteNBuE",
            "https://mega.nz/embed/9ilnVAhR#gzWXksWX5QHjs56vl9JTyPCJfg5IRgpXPR5L_c11h60",
            "https://mega.nz/embed/Q6UEHbSC#mVSo3L2OPw1HGj9cwrUJmk8X9AMILwabX16sYIX8Qmc",
            "https://mega.nz/embed/Em02HYga#PYFSgMnHBiq6PsvwkPgAxUC6WHTbB-mVkmdRFVzkYE4",
            "https://mega.nz/embed/tiECUKAY#kE2m6UaxnbFZUA5u-zJk0IAEIvZMVYBWJIg7sq9r5iY",
            "https://mega.nz/embed/9uk1yBRI#I6SOjzVhldWZVhUZr8SYISNsg0nHPhavJUWX686OlpE",
            "https://mega.nz/embed/0nsCCZDC#wVdSkRovE1gyEl7E-1a7muw7OiQifn0HBXtPO7PUYjM",
            "https://mega.nz/embed/x6lBnJib#htJp4C4ib9gU08S9ty7iQgpnJq84L0HKscawPUmczIM",
            "https://mega.nz/embed/VqEkBDRA#wWIhvt-HLn6V9V4Yl3Q1OeceEb3BVVRIm0vKUzMXh4Y",
            "https://mega.nz/embed/pqsxiSgA#ZUecg5fQaq1onp5sX39n2FDKPIJwcme_T8oamADTo58"
        
        ]}),

        new Season({name:2, img:'Log-Horizon-poster.webp',
        episodes:[
            // Temporada 2
            "https://mega.nz/embed/B31wwLzI#wQmVeuo-4bnxS7wuZ2WGS3-Geel7y1oIlnz4jOK1mdY",
            "https://mega.nz/embed/RiNhzCCD#VxRQaCF9zQaB9a3w8sUR7sGXeozGSQCdeL0gfAfaGXQ",
            "https://mega.nz/embed/9zMThLzY#E_Z7TqQM4dzgsVfUU4ostf6-de0KHZSwCYaYWqdcIKw",
            "https://mega.nz/embed/disBDZSa#mi98CYpBRTKqTpaOZdesYAe0Kd843PO0vAQb4U-covw",
            "https://mega.nz/embed/su9ziagS#NckIBN8ZGe9hKtHbriuL45Sb_aTvE335tQiMLiNt3-0",
            "https://mega.nz/embed/szsSCRYT#_iGQS_Y_CiVrOSZk7j8oKrrgTHGXpRDKqMGUQodxHe0",
            "https://mega.nz/embed/MqFXgIhI#Ah9Lns6OxThFdlJSYsqe-bcj92nC6PwfqGEeCiJIViU",
            "https://mega.nz/embed/hvUHUBjT#fgN8HCg3mXdflsIn2l95QxzpDma55KdIVf1_RGnPiq4",
            "https://mega.nz/embed/5mtgTI5D#OlIBJpQjp3nF86RairsVgVm7wOHsIqjhpbH8ET4128s",
            "https://mega.nz/embed/Ii9giBgb#VLjftfnJQf7zm3cF5Z25CijIiC2nDVVyUVEu-d8DtUE",
            "https://mega.nz/embed/ZiVFDKQT#_8G_HKfHURrOwUyENBAyqlw1kG0Je5vGmHTuuw1SC-E",
            "https://mega.nz/embed/Rn0EjDwA#OxPUjfn3_UezW2Z84xpKPpUl16W8k4Szyd93jSYdBPg",
            "https://mega.nz/embed/d6VQlCaL#40WO3wA2H1N7Q98DRswsncUQ-AjDu1bzSWw50j73feA",
            "https://mega.nz/embed/g71jHCwI#nVLrkkD7mJrFfNoxU8_drcYmfMRlYmNtgMUfYxDXq8g",
            "https://mega.nz/embed/dqVA1Rxa#wMVf7Tw3bOannLygMRSDluKARLJssbrH7h4_TSrN_Pw",
            "https://mega.nz/embed/JnkxlQwa#SZr7zphG2ms19vIvW-_K7Xx9jAz2ug1-eOXnM0IC6sA",
            "https://mega.nz/embed/Jqkm2abJ#L7MygSq0uFL0kRij72yqT7EZypYGXfHe9cy8b3zgqPI",
            "https://mega.nz/embed/YvF1DaLA#XueNMsMpkHSnwpdFIN8dY9Jzo8-9o_-5xZZPe3W8hq0",
            "https://mega.nz/embed/culXFTLT#KOkCPet30k5zf_ozIM7H7nNcZPoB4o9y2qKhV_tBFos",
            "https://mega.nz/embed/h31TRIQC#1wcAsmcY4q1b1q83vcvkkYadD9ySBhtJsLn-W7YTtLE",
            "https://mega.nz/embed/039DUCAI#ThvlyWOm3zcH5ldGQE9adBIyxdOUdvxovvEJLSssP6E",
            "https://mega.nz/embed/139zRSAC#R_h-QOIjWBSSSvqs9oReNcOHHHDSEujiQ_gu-AhOU3w",
            "https://mega.nz/embed/trtnBAhA#mFTku45wFkd8ZWynJ7lZTFum6brOFjxpceOKtxv1x6o",
            "https://mega.nz/embed/Vm8URCbS#n7jiy9gcUQ2PtBr6vbfHF6vMvxezjr2A-Yh8FdcUzIU",
            "https://mega.nz/embed/lzt1QaqC#0s3UDwLzA9u5PD-qd00NYMzeUZCj9pP7jX1Xd6pqEVg"
        
        ]})
    ]}),

    new Serie({name:'Overlord', img: 'overlord-poster.jpg',
    Seasons: [
        new Season({name:1,description:'Prueba 1', img: 'overlord-poster.jpg', episodes:[
           // Temporada 1
           "https://mega.nz/embed/W9gnhC5S#V5I2fJbzB5WeCv1xfRA6AtKyqixdERvb-EnIAI1JNNI",
           "https://mega.nz/embed/q05lgTQD#e0JPu5Cszv_tSy3ejz_9CrGBQS6Hi-Su6BUsIvjH244",
           "https://mega.nz/embed/e5ZQmSjB#zvMkq6rOCcQK5KBODnVupd5A2NdX3T4C4fzvWjLP-F0",
           "https://mega.nz/embed/3gY3ybTQ#0x8HrIPPmtwolkRS9J_F3T_-puBFr5n8A7TXZMmmxig",
           "https://mega.nz/embed/f8BHDCAI#NRbvICgd5RXDETrC5k7vOgvstDTmNWunyw_aLXv716c",
           "https://mega.nz/embed/f4QiSAKL#aEIp9P1xDLaC2H-35FSfXxL9lyqnTN219lsjBIT4vFo",
           "https://mega.nz/embed/roARjDiK#D968tZhSyf0U6g9cUxdmaAu_I5bY7-l2OgwkxN29IWs",
           "https://mega.nz/embed/DxICmSID#m1bCxlYrxfS06U4R_u67sqlOEHMO9y1TYI9la-fqhi4",
           "https://mega.nz/embed/ylIj3IAS#WL1k_DTzLy4W355NDsLAphVaViLTOSh7QuLbctuRSZI",
           "https://mega.nz/embed/zsoXAaga#wK8S_g4EYhX9A-X2UuIoXvLHjKp4DAijOrmS5jN2Rig",
           "https://mega.nz/embed/SlZTkDSD#1bxNWieONifqgaI1xdjQr_pU2qaGZn1DW3wniXn8CO8",
           "https://mega.nz/embed/DkoExaCD#el4jFIiSaxfRyL8MfBbi0GhZiwaHH9Z93iuwPKTGfu4",
           "https://mega.nz/embed/KpIwQB5J#t34Scfsa9LeKyBhRu_CiLi_ohFMHOHFsgubnHOVO8Yg"
        ]}),

        new Season({name:2,description:'Prueba 2', img: 'overlord-poster.jpg', episodes:[
        // Temporada 2
        "https://mega.nz/embed/n4QT2aSK#rMIziXZ70TfVFXNnxIlrQUmM1LQEdnD6X5NQkUcWWBg",
        "https://mega.nz/embed/i0AWyZwB#9z06rgZatMykMDwB9egOflXLlqBev0dd-NkTehb_RwE",
        "https://mega.nz/embed/j4QnzJgR#cMn501QsOkdFDf8MMWNkbQNikFxRSpxyWlFiW9BKjVk",
        "https://mega.nz/embed/HswHxQRJ#QUUGTORd05AiQ4hJ4vRBzmp_rsXYgNP1F5B6WbvQNnU",
        "https://mega.nz/embed/TkghEDqC#p4ltM_qJJ1SgXln6NEBZG1S2xNfibkZIqy4p3aT3h2g",
        "https://mega.nz/embed/qkgyWDbB#fpFO_vycWLSX8YzXseIX97xI1F3FxUlHrLMKIE50wKg",
        "https://mega.nz/embed/b5x0FZDI#hGcg9DZIU2k4XU-MRxZ2K0hr2atidT5KL6RdDfZnipw",
        "https://mega.nz/embed/6oZkjR4T#3NaCDVo9rpXn3QvQHUs4kyHYSaGzeu0zsdLV7bsL7NM",
        "https://mega.nz/embed/i9IBVTiR#UhyqE_OjNGwC9FdfS8DzLB_avpqPO32AoMGp7pykiWs",
        "https://mega.nz/embed/Xhoi0aKB#7LJdEZASoycDAh7IcJKFefT0Y07nXyRS7CR0Ypkfgso",
        "https://mega.nz/embed/rx5Fwa7B#h2xXBL91Az5ZY6TgFvD6VlUPsC2VYhfGvKBVDcgMwag",
        "https://mega.nz/embed/DlREzAjK#kFlHtPTAyX4QQKRi5e6VmWiJx3awV70fucZqW2RUlBs"
        ]}),

        new Season({name:3,description:'Prueba 3', img: 'overlord-poster.jpg', episodes:[
        // Temporada 3
        "https://mega.nz/embed/f0RxWbJA#cW3_1tG6ouZRYD6qRIXcHTJy2r8pvE4nRvgoyBtHEto",
        "https://mega.nz/embed/r4BVAa7J#Xh6LVFt5BJCRHDBnClUTHB1Xh--GWXcSs3VpNw05mJ8",
        "https://mega.nz/embed/7xZyHZKB#Fof40cq7xFUOJnmkaOWgPGTajJOPWM9Ey0PfIc6z-zs",
        "https://mega.nz/embed/joZmySJR#afV13eEy0SYClt8ACbkVYL6H1csc9F9OQBvOTbxrVfA",
        "https://mega.nz/embed/jlwBzIiY#2qACIPtySNM7o-LE5EitJqTyfe5723r6L3rzXV0VHoo",
        "https://mega.nz/embed/O4JSTAjB#BpAWshKHOcSJpwL10xO9QDIwdOegBl_x_KoA3y0z3WY",
        "https://mega.nz/embed/7t5kALoL#T6PVGqMMqsda5ZACIpm5tTtKpF-3CuzLeRk84IGlyOg",
        "https://mega.nz/embed/i8BGHajR#JBzBZ1WU4xJsB0Q0riP5_AAyR-NW5pc0QhBeT6epSUk",
        "https://mega.nz/embed/PxwQHSIA#_J1lkLHx-qLFAMIWJuIGIMapmS0mr6zNyvfFdV4IrXA",
        "https://mega.nz/embed/DoQmhAjQ#SccXSS_Y3uKwfpCC8mB5hG_GvJsvjgXhjNlNaHj0AN8",
        "https://mega.nz/embed/614jWZ4I#JOFsRPhV_-ge_IdamR2lfY5Y1X3NuyAnc8g2mKR_g4c",
        "https://mega.nz/embed/TogRRBgJ#55Y2FX662RjViRBTrG0JZ-pTZxpgtfisCN9PR8lN5pk",
        "https://mega.nz/embed/i0YRSJ6I#kBjbftljDuRdlaLcy7__g3SPt7pL-oEIDl46LS6VWsg"

        ]}),

        new Season({name:4,description:'Prueba 4', img: 'overlord-poster.jpg', episodes:[
        // Temporada 4
        "https://mega.nz/embed/yg4j1A5T#3X_qm7YWAi9ZuSqaoWL4YoGMBQQ2wJApFZLox8JHWJI",
        "https://mega.nz/embed/6l4DzDbR#qHb7WExxQEIGkHESwrs2RJOsu-_Mb9e2-t7nx6qQ150",
        "https://mega.nz/embed/qkxz0AIb#IdXib30KmXFtnXgqTVhllPfEpEB3ox6FIX4Cmv5NX-o",
        "https://mega.nz/embed/ftZEEDxB#hC_p-bQ97-cSDOTl890MS5yEoUMVMnTd7S4_qjC-vAQ",
        "https://mega.nz/embed/ChYHVD4B#Xm-UF-sNBK_KcQ4CMz31o2Ba5vM6SolYMahY58HVR0Q",
        "https://mega.nz/embed/r9p13ahZ#EQFWkqUQAgP5sfBQ24b95yFSxj1117Y4Xk6GpDBop94",
        "https://mega.nz/embed/K9wAECiR#j8_YXwYfx_7d6a2l8aQ1OYqfrVpgsRk9dYbJycu0BNA",
        "https://mega.nz/embed/CxAQhKoA#mtVromG7bm7a_KCSsXidizEzUUC2lvEeOCt2hD0vjOM",
        "https://mega.nz/embed/qhIChZJZ#yXWxhVWyKr6TbhSm_iFLITmZhovzTSwEHqHDDLTYBfI",
        "https://mega.nz/embed/OtxURIJD#iuz5ejtOAMWGmLE8QJBEoTof2l4OfbBmf4Z5143ov2U",
        "https://mega.nz/embed/n5I01R6a#jTVkJ2N6sFjv7oH1QtfcZlHKivBCzjeBe-TPmRYSUaM",
        "https://mega.nz/embed/jxBTELKR#PcRK_46DRTTy7j4oGKRAA6eoqoOCoqO8lK40wqRpOGA",
        // falta el capitulo 13
        ]}),

        new Season({name:'Ova',description:'Prueba 6', img:'overlord-poster.jpg', episodes:[
        // Ovas / Especiales
        "https://mega.nz/embed/fsJmETSC#nu3VNqH6sifWyguCY_k6N9WgpOi2Kg8-7iJ0crTFAx4",
        "https://mega.nz/embed/DpZkzCgT#hkbgFf_rDPZvvsMathz84tx_selpBfY7W2aY2ZGyM3s",
        "https://mega.nz/embed/OxYB3TLY#wxqioivCHxZgCtC7u9Oq5wPj1-9L47nMS17OTuczAJs",
        "https://mega.nz/embed/S1hQ3IaD#U_0l9IgjqO1au7Adj5Fn1ejHU4HqY2WVdeipvkKwJq0",
        "https://mega.nz/embed/mxxhhR6B#Q1hX57FxPMveYy88-ohdN3cZiTQdJZru2iKZKqGQZvg",
        "https://mega.nz/embed/W5B3jQib#UZB6L8j4kenxrTS1gcCr_210OzwIJkwrakN_HxQ7gjA",
        "https://mega.nz/embed/uoIyFTCB#pFi-kRhVmOH5CpDiBOS0-JiT8VIn0SJQmT_0s22ZriM",
        "https://mega.nz/embed/v8pjUBba#9DFPPS2SsHfrp6Ve_we3Ei-y_4zYKvwcbBTdb_y6wJo",
        "https://mega.nz/file/Im1VTbwT#y32HN3FQfvfqx_fW3F6_pL0cgLNctFCFKoFPoRPoPzA",
        ]}),
    ]}),

    new Serie({name:'The Eminence in shadows', img:'The-Eminence-in-Shadows-poster.webp',
    Seasons:[
        new Season({name:1, description:'', img:'The-Eminence-in-Shadows-poster.webp',
        episodes:[
            // Temporada 1
            "https://mega.nz/embed/Zn03TYhC#lcmnAL4AY0kZwyM5QiXGVjP9NPtNOZ4i8pwkUuAPgqg",
            "https://mega.nz/embed/snVF3aLQ#uRQ09KWjCueSkJW4I2k500Sv63rT66B59N1qUym3ySw",
            "https://mega.nz/embed/cv0wDQID#arypT1qkKyk7zNNh1avjyhP15aQPLVQ6WM6q4tNbqOI",
            "https://mega.nz/embed/t60EDSoS#GjG_UUkia38x5vi1cZTc93vOlG3C_1gXpQBGBfLceFk",
            "https://mega.nz/embed/0rlniL4a#7JQ3f_J4COmAlM_-cgGp87rlwM9IXpBUBgmySwpbt-I",
            "https://mega.nz/embed/MqNhRK4a#1D0VK0wZH4QNYGTXP4DtVQdfEtiM71e0KYzLSOrbeIg",
            "https://mega.nz/embed/gzdExLRL#34RymRW0Mpqx4R39KjCwMERQKFQcGdeeE5hTG6cTw9s",
            "https://mega.nz/embed/J6sm1RYL#b4vN4AnwfThCEAx-zZ5idr9uS4Qr6aBrPxX2JBMFA1Y",
            "https://mega.nz/embed/B2kCUbLa#zU1DF2W7qK3Z1Q4632ryEO7BzySBxLaL-MvjTLbWkVE",
            "https://mega.nz/embed/l6cTFQJa#wXwBtWmJDvEFTErhyN5dQJoFlZNOC3u_IaKqtUnvias",
            "https://mega.nz/embed/EzUDFBJA#opGRl8FVtopHDiDZzPvYVdkYw2nCnfUvdbaE_os0R2A",
            "https://mega.nz/embed/FzMn2RAQ#8ZS8Rf6faLkIUZPYMsmZeO3NUkmITsTa-E-W85ivbOI",
            "https://mega.nz/embed/sv1mVDJZ#8Vo8ZWMPaWWQW0q_43OlSNyfAGrgaEwMc4jXmyk_3RM",
            "https://mega.nz/embed/9u1zwRLY#9mzum2Ot0q-qza2JTC7Ry_F_pDoLsxLxM-yREed5Sa8",
            "https://mega.nz/embed/cyVVCLoa#_ae_w-M6Rmld3ZJZcjznSJzQ6_VQWl3HS-SVqleHhxs",
            "https://mega.nz/embed/MuUBGCQB#jTr69a-qzFshqO9Yz8PSvMq4d5G9tcyUc6cwX_V89d8",
            "https://mega.nz/embed/Y28UQIaK#dU00aYmC5jqDVvap9-VUHikDJIlfJXYbdhV1DasiWzc",
            "https://mega.nz/embed/trFCAKCA#PlBSq84TQvbw8iTDrzMDJDYI9B9yzrmMg-h2Y9DhqrM",
            "https://mega.nz/embed/52t33YpQ#sYCEG4iEcuDKkDhwHY4TdHM8APNqvuEZa6UG4PLPF0U",
            "https://mega.nz/embed/tv9hhBbb#RReZ17C_qQzYqJxdlz7DllkdWbfAkf1yAXLiL5YYTeo"
        ]}),
    ]}),

    new Serie({name:'Youjo Senki', img:'Youjo-Senki-Poster.webp',
    Seasons:[
        new Season({name:1, description:'Temporada 1 descripción', img: 'Youjo-Senki-Poster.webp',
        episodes:[
            "https://mega.nz/embed/qpIy2AoI#nMWT9eQg5SJyt3QfxhcWjesd7xy_TlvXdYQNqAvB_lA!", //cap: 01  
            "https://mega.nz/embed/voZynbRK#h_72PDljbUm_W7yPL0AeC17XFbIQcU35RWbs2-4XcNw!", //cap: 02
            "https://mega.nz/embed/fkxE2LIJ#E3GHU6aZETa-J0Hz3j5XIFuI2B-7tfTiLwJwyxVqyMY!", //cap: 03
            "https://mega.nz/embed/mxghnazC#w2i1S9s2J0nHiIUVKO-Wglm9aT1fmpWef1yT5Gc0Q5Q!", //cap: 04
            "https://mega.nz/embed/HsIglaLT#ZVHj0j8xwDTU-wv5SgMVZjprBIdxi9VeYkQtsPsSzGA", //cap: 05
            "https://mega.nz/embed/HlAz0SIJ#4w90bVWw71pOvX0c5j0UUOeYx76EjdOF5RGHtAZkwXs", //cap: 06
            "https://mega.nz/embed/uhgFkZ7b#PbbQ7wSR8x2JCwAflNsfs5oHaAfxrPoQSMSIz61Lfhc", //cap: 6.5
            "https://mega.nz/embed/vlYTnb7S#EdG7Nfu67MTpJ7GpfmKWI5-f-RL58Z4IZ5Fva-jAsVA", //cap: 07
            "https://mega.nz/embed/vhhkxCLZ#MCFJWH6bRd7gob0ixgsSpc9as8kf-7uo_uljZuM9gFA", //cap: 08
            "https://mega.nz/embed/LoQCnY6A#GeUcenj7K2gWeuQvtdJAUfPsnX2nYA5axWtNdHWNtrY", //cap: 09
            "https://mega.nz/embed/K5wC2ZrZ#bd-VX02BdDtAeqc0tE0NlbYobX9BTct4K4uO6AJrCgs", //cap: 10
            "https://mega.nz/embed/bt4kRCab#x0vYM69WfX5dcftm9bsapIaB1thv0y_nHF46dsCRzKg", //cap: 11
            "https://mega.nz/embed/SopVnSxT#80Tqp8HJmxhYT2I11265XJszAKG9zX3VGBRqt_1oOTU", //cap: 12
        ]})
    ]}),

]