const mongoose = require('mongoose');

// Defining the model schema for musicart members 
const itemModel = mongoose.model('Items', {
    mainImage: String,
    subImage: {
        sub1 : String,
        sub2 : String,
        sub3 : String
    },
    ilongtitle: String,
    ititle: String, 
    iprice: Number,
    icolor: String,
    itype: String,
    idesc: String,
    stock: Boolean,
    ibrand: String
});

module.exports = itemModel;



// How to display the string encoded base64 images : <img src='data:image/png;base64, 'string_from_db' />

/*
const db = [
    {//1
        "mainImage" : 'https://m.media-amazon.com/images/I/41O9c-uunDL._SX300_SY300_QL70_FMwebp_.jpg'
        "subImage" : {
            "sub1" : 'https://m.media-amazon.com/images/I/51qayN+MxFL._SS40_.jpg',
            "sub2" : 'https://m.media-amazon.com/images/I/51LifyyIL6L._SS40_.jpg',
            "sub3" : 'https://m.media-amazon.com/images/I/41hDMQ8hXPL._SS40_.jpg',
        } ,
        "ilongtitle": "boAt Rockerz 551ANC, Wireless On-Ear Active Noise Cancelling Headphones with Mic, ₹3000, Blue",
        "ititle": 'boAt Rockerz 551ANC', 
        "iprice": '3000',
        "icolor": 'Blue',
        "itype": 'On-ear headphone',
        "idesc": 'Immerse yourself in music with boAt Rockerz 551ANC, featuring wireless connectivity and active noise cancellation. With a sleek on-ear design in a vibrant blue color, these headphones provide a perfect blend of style and functionality. Enjoy clear audio, a built-in microphone for hands-free calls, and a comfortable fit for extended listening sessions. The active noise cancellation feature ensures an uninterrupted audio experience, making these headphones an ideal choice for music lovers on the go.',
        "stock": true,
        "ibrand": boAt,
        "rating": 4.1
          
    } ,
    {//2
        "mainImage" : "https://m.media-amazon.com/images/I/51rpbVmi9XL._SX679_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/91hx2gnY0qL._SX679_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/41i4wtorPjL._SS40_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/81ZItrs+cLL._SX679_.jpg"
        } ,
        "ilongtitle": "Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        "ititle": "Sony WH-CH720N", 
        "iprice": 3500,
        "icolor": "Black",
        "itype": "Over-ear headphone",
        "idesc": "About this item\nSony’s lightest Wireless Noise-cancelling headband ever\nUp to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)\nMulti-Point Connection helps to pair with two Bluetooth devices at the same time\nTake noise cancelling to the next level with Sony’s Integrated Processor V1,so you can fully immerse yourself in the music\nSuper comfortable and lightweight design ( 192 Grams ) \nHigh sound quality and well-balanced sound tuning",
        "stock": true,
        "ibrand": "Sony",
        "rating": 4.3
    } ,
    {//3
        "mainImage" : "https://m.media-amazon.com/images/I/31NnmYempPL._SX300_SY300_QL70_FMwebp_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/61rILPESvyL._SS40_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/61OJkyEy9jL._SS40_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/51vagpqAAWL._SS40_.jpg",
        } ,
        "ilongtitle": "JBL C100SI Wired In Ear Headphones with Mic, JBL Pure Bass Sound, One Button Multi-function Remote, Angled Buds for Comfort fit (Black)",
        "ititle": "JBL C100SI", 
        "iprice": 599,
        "icolor": "Black",
        "itype": "In-ear Heaphones" ,
        "idesc": "About this item\nJBL Signature Sound\nLightweight and Comfortable : The 3 sizes of ear tips (S,M,L) that are included allow you to choose a size that gives you the most comfortable listening experience even for longer listening periods\n1 year manufacturer’s warranty. Cable Length: 1.2M\nJBL Signature Sound. Frequency range:20-20kHz,Driver sensitivity:100±3dBSPL, 1mW,Maximum SPL:5mW\nOne-Button Universal Remote with Mic",
        "stock": true,
        "ibrand": "JBL",
        "rating": 4.1
    }
    ,
    {//4
        "mainImage" : "https://m.media-amazon.com/images/I/51xxA+6E+xL._SX679_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/61S2z5PwUqL._SX679_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/71QDnQWrVNL._SX679_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/71-bbXujTLL._SX679_.jpg",
        } ,
        "ilongtitle": "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)",
        "ititle": "boAt Rockerz 450", 
        "iprice": 1699,
        "icolor": "Black",
        "itype": "On-ear Heaphones" ,
        "idesc": "About this item\nWith 40mm Drivers get ready to immerse in HD auditory experience with super extra bass to get the day going\nPlug into your rhythm with style via the wireless Bluetooth headset and carry the vibe wherever you go\nStay immersed into Nirvana for extended durations with a playtime of up to 8 hours\nIts lightweight and ergonomic design offers the comfort and ease while you listen to your favourite artists and have fun\nThe easy access integrated controls with built-in mic offers a smooth user experience and hands-free communication on the go\nStay connected to your sound via not one but two modes: Bluetooth as well as AUX/n\n1 year warranty from the date of purchase.",
        "stock": true,
        "ibrand": "boAt"
        "rating": 3.9
    }
    ,
    {//5
        "mainImage" : "https://m.media-amazon.com/images/I/71mTfSKhhTL._SX679_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/71QuEK+XuML._SX679_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/81O14QSsMXL._SX679_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/81vMw-QLpYL._SX679_.jpg",
        } ,
        "ilongtitle": "Marshall Major IV Wireless Bluetooth On Ear Headphone with Mic (Black)",
        "ititle": "Marshall Major IV", 
        "iprice": 13000,
        "icolor": "Brown",
        "itype": "On-ear Heaphones" ,
        "idesc": "About this item\nMajor IV delivers 80+ solid hours of wireless playtime.\nMajor IV’s new, improved ergonomic design means that when you’re deep diving into your music, the tenth hour is as comfortable as the first.\nRe-Engineered - New ear cushions + 3D hinges + straight fit headband + loop wire with reinforced rubber dampers.\nMajor IV can be charged wirelessly, so it’s now easier than ever to charge and go.\nThe multi-directional control knob lets you control your music and phone functionality with ease.",
        "stock": true,
        "ibrand": "Marshall",
        "rating": 4.6
    }
    ,
    {//6
        "mainImage" : "https://m.media-amazon.com/images/I/31IdiM9ZM8L._SS40_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/41uFZxUySsL._SS40_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/41NKu6EX6oL._SS40_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/61ev3M9LmQL._SX679_.jpg",
        } ,
        "ilongtitle": "boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)",
        "ititle": "boAt BassHeads 100", 
        "iprice": 700,
        "icolor": "Black",
        "itype": "In-ear Heaphones" ,
        "idesc": "About this item\nThe perfect way to add some style and stand out from the crowd with the boAt BassHeads 100 "Hawk" inspired earphones\nThe stylish BassHeads 100 superior coated wired earphones are a definite fashion statement - wear your attitude with its wide variety of collection\nThe powerful 10mm dynamic driver with the speaker resistance of 16 ohm enables the earphone to deliver a punchy, rhythmic response to the most demanding tracks\nFeatures a HD microphone to make crystal clear calls - making life easier on the go, play/pause music or answer/end calls with one-click, track forward with two-clicks or back with 3 clicks make these earphones extremely user-friendly\nWith 1.2 meters perfect length cable now plug it in anywhere with ease - while the earphones are extremely user-friendly and stylish, extruding premium coating on the wire cable is a manufacturing process that we haveve been performing and refining since our company's inception",
        "stock": true,
        "ibrand": "boAt",
        "rating": 3.8
    }
    ,
    {//7
        "mainImage" : "https://m.media-amazon.com/images/I/716pO0dbHJL._SX679_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/71GXf8PBSWL._SX679_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/711vWluw3nL._SX679_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/71xsYUlVTqL._SX679_.jpg",
        } ,
        "ilongtitle": "ZEBRONICS Zeb-Thunder PRO On-Ear Wireless Headphone with BTv5.0, Up to 21 Hours Playback, 40mm Drivers with Deep Bass, Wired Mode, USB-C Type Charging(Black)",
        "ititle": "ZEBRONICS Zeb-Thunder", 
        "iprice": 600,
        "icolor": "Blue",
        "itype": "Over-ear Heaphones" ,
        "idesc": "About this item\nWith 40mm Drivers, Enjoy Immersive Music with Deep Bass\nWith Massive battery backup of 60hrs* (at 50% Volume) - these headphones are your ultimate travel companion, Charging time - 1 H\nListen to music for long duration with its soft cushion earcups and lightweight design\nConnect to your smartphone via Bluetooth v5.0 and enjoy Music, Calls wirelessly without any interruptions\nThe headphone comes with 3.5mm AUX Input Jack & AUX Cable to use as Wired Mode as well\nSupports Micro SD Card with a slot, so load up your songs or podcasts and enjoy on the go\nUSB-C Type Charging Port",
        "stock": true,
        "ibrand": "ZEBRONICS",
        "rating": 3.2
    },
    {//8
        "mainImage" : 'https://m.media-amazon.com/images/I/61xGx5qdPwL._SX679_.jpg',
        "subImage" : {
            "sub1" : 'https://m.media-amazon.com/images/I/31+AIg9VQuL._SS40_.jpg',
            "sub2" : 'https://m.media-amazon.com/images/I/41wQZjymuhL._SS40_.jpg',
            "sub3" : 'https://m.media-amazon.com/images/I/41OOlXhug0L._SS40_.jpg'
        } ,
        "ilongtitle": 'Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones Up-To 35Hrs Playtime Lightweight, Type-C, Play/Pause Control, 30Mm Driver, Bt Version 5.0 & Voice Assistant Support For Mobiles, with mic - Blue',
        "ititle": 'Sony Wh-Ch510', 
        "iprice": '3990',
        "icolor": 'Black',
        "itype": 'On-ear Heaphones' ,
        "idesc": 'About this item\nComfort : Lightweight, all-day listening with quality sound\nBluetooth : Listen to your favourite tracks wirelessly with a Bluetooth wireless technology by pairing your smartphone or tablet.\nBattery Life : With up to 35 hours of battery life, you’ll have enough power for even long trips away.\nIf your headphones are running low on power, a 10-minute quick charging with the Type-C cable will give you up to 90 minutes of play.\nTake music anywhere : Not only are the WH-CH510 headphones compact and lightweight, but the swivel earcups make it easy to safely pack them away in your bag.\nButtons that make listening easy : Use the buttons to play, stop, or skip through tracks and adjust the volume.\nEasy hands-free calling : Conversation flows freely with easy hands-free calling, thanks to the built-in microphone. No need to even take your phone from your pocket.',
        "stock": true,
        "ibrand": 'Sony',
        "rating": 4.7
    },
    {//9
        "mainImage" : "https://m.media-amazon.com/images/I/711qmgbZ7vL._SX679_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/41LE11L4qGL._SS40_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/510oQw5BNoL._SX679_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/71ONiHjtexL._SX679_.jpg"
        } ,
        "ilongtitle": "Skullcandy Hesh Active Noise Cancellation Wireless Over-Ear Headphone with Up to 22 Hours of Battery, Rapid Charge (10 min = 3 hrs), Built-in Tile Finding Technology - Mob White",
        "ititle": "Skullcandy Hesh", 
        "iprice": 10499,
        "icolor": "White",
        "itype": "Over-Ear Headphone" ,
        "idesc": "About this item\nTIME-PROVEN SOUND QUALITY. With powerful 40mm drivers and exceptional acoustics, Hesh ANC features audio quality that has been refined over four generations of constant improvement. The clear, rich soundâcombined with active noise cancelingâdelivers the kind of captivating audio experience that youâd expect for twice the price.\nBATTERY TO LISTEN ON AND ON. We know: Itâs hard to remember to plug in all the devices you have in your life. Thatâs why Hesh ANC features a long-lasting 22 hours of battery life. Plus, whenever you get low, the Rapid Charge feature gives you 3 hours of listening time on just a 10-minute charge.\nMORE NOISE CANCELING, LESS FLEXING. Plenty of people drop a lot of coin to flex that they can afford noise-canceling headphones. Hesh ANC is for the rest of us. For those of us more concerned with sharing a great playlist than showing off our status. But donât think youâre compromising: Hesh ANC delivers a 4-mic, digital active noise canceling experience that rivals anything out there.\nAMBIENT MODE: YOUR BUTTON TO THE WORLD. Noise-canceling headphones are ideal for blocking out the world around you. But sometimes, you need to tune into your surroundings. Thatâs why weâve designed Hesh ANC with Ambient Mode. Two quick presses of a button let you hear everything around you. Even have a conversation. When youâre done, just double press again to block out the noise.",
        "stock": true,
        "ibrand": "Skullcandy",
        "rating":4.5
    },
    {//10
        "mainImage" : "https://m.media-amazon.com/images/I/51OpXOQc0PL._SX679_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/61m9tfjRPZL._SX679_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/61DcgH9qJdL._SX679_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/612H+sgB8qL._SX679_.jpg"
        } ,
        "ilongtitle": Portronics Muffs M2 Bluetooth Headphones Over Ear with Upto 40 Hrs Playtime, 40mm Dynamic Drivers, AUX 3.5mm, Powerful Bass, Laptop & PC Support,Type C Charging Port, Foldable Design(White)"",
        "ititle": "Portronics Muffs M2", 
        "iprice": 1399,
        "icolor": "White",
        "itype": "On-ear Heaphones" ,
        "idesc": "About this item\n[GO WIRELESS OR WIRED] : Muffs M2 gives the choice of going wired or wireless with bluetooth version 5.3 and an AUX 3.5mm port. So connect your android/iOS smartphone or PC/Laptop.\n[LONG PLAYTIME] : The headphones wireless come with a playtime of 40 hours so you can finish not episodes but full seasons with Muffs M2. It has a type C charging port and in 10 minutes of charge it provides a playback of 10 hours.\n[COMFORTABLE] : This is what comfort sound like plush memory foam on earcups and headband. The earphones are flexible and foldable.\n[MIGHTY SOUND] : The headphones with mic have dynamic 40mm drivers amplify bass and treble to make your audio/video content more lit."",
        "stock": true,
        "ibrand": "Portronics",
        "rating": 3.6
    },
    {//11
        "mainImage" : "https://m.media-amazon.com/images/I/61Wew4ix68L._SX679_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/71l006CQtKL._SX679_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/61L1aWOZwFL._SX679_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/61y7ScLXnhL._SX679_.jpg"
        } ,
        "ilongtitle": "boAt Nirvana 751 ANC Netflix Stream Edition Hybrid Active Noise Cancelling Bluetooth Over Ear Headphones with Up to 65H Playtime, ASAP Charge, Ambient Sound Mode, Immersive Sound, Carry Pouch(Black)",
        "ititle": "boAt Nirvana 751 ANC", 
        "iprice": 3990,
        "icolor": "Black",
        "itype": "Over-ear Heaphones" ,
        "idesc": "About this item\nActive Noise Cancellation- Say adios to the chaos with Active Noise Cancellation feature and elevate the vibe to a whole new level of pleasure with Nirvanaa 751ANC, delivering up to 33dB Hybrid ANC.\nPlayback- Stay connected to your playlist for mammoth durations, every day with up to 54 hours of playtime in ANC mode and up to 65 hours in normal playback mode.\nASAP Charge- This headphone comes equipped with our ASAP Charge technology that helps it garner 10 hours of playtime in just 10 min of charge.\nDrivers- Exhilarate your senses with crystal clear sound reproduction via 40mm drivers, delivering you the boAt immersive experience.",
        "stock": true,
        "ibrand": "boAt",
        "rating": 4.0
    },
    {//12
        "mainImage" : "https://m.media-amazon.com/images/I/41EnFjIAoaL._SX300_SY300_QL70_FMwebp_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/71aEOLZO+PL._SX679_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/61u2A87P8wL._SX679_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/71cpqE-CnoL._SX679_.jpg",
        } ,
        "ilongtitle": "PTron Boom Ultima 4D Dual Driver, in-Ear Gaming Wired Headphones with in-line Mic, Volume Control & Passive Noise Cancelling Boom 3 Earphones - (Blue)"",
        "ititle": "PTron Boom Ultima", 
        "iprice": 250,
        "icolor": "Blue",
        "itype": "In-ear Heaphones" ,
        "idesc": "About this item\nIn-ear Dual Driver Wired Earphones with Stereo Sound & Bass\nIn-line Remote Control with Mic, Music & Call Control. Speaker Sensitivity: 101dB±3dB. Frequency Response: 20Hz~20KHz. Mic Sensitivity : -42dB±3dB\n1 year manufacturer warranty\nDual Driver Ensures Better Sound Separation; Ergonomic Design; Passive noise cancellation\nComfort & Durable; Gold-plated 3.5mm Audio Jack; Widely compatible with 3.5mm Audio Port Devices; 1.2m Tangle-free Cable\nOn-the Cord Remote Control with Mic & Volume Control\nPremium Design & Durable Material",
        "stock": true,
        "ibrand": "PTron",
        "rating": 3.5
    },
    {//13
        "mainImage" : "https://m.media-amazon.com/images/I/51VUG5URGiL._SX679_.jpg",
        "subImage" : {
            "sub1" : "https://m.media-amazon.com/images/I/61-6TUVSpQL._SX679_.jpg",
            "sub2" : "https://m.media-amazon.com/images/I/61p7DRBu99L._SX679_.jpg",
            "sub3" : "https://m.media-amazon.com/images/I/616e+QLAT+L._SX679_.jpg"
        } ,
        "ilongtitle": "pTron Tangent Duo Bluetooth 5.2 Wireless in Ear Headphones, 13mm Driver, Deep Bass, HD Calls, Fast Charging Type-C Neckband, Dual Pairing, Voice Assistant & IPX4 Water Resistant (Blue)",
        "ititle": "pTron Tangent Duo", 
        "iprice": 399,
        "icolor": "Blue",
        "itype": "In-ear Heaphones",
        "idesc": "About this item\nComfort : Lightweight, all-day listening with quality sound\nBluetooth : Listen to your favourite tracks wirelessly with a Bluetooth wireless technology by pairing your smartphone or tablet.\nBattery Life : With up to 35 hours of battery life, you’ll have enough power for even long trips away.\nIf your headphones are running low on power, a 10-minute quick charging with the Type-C cable will give you up to 90 minutes of play.\nTake music anywhere : Not only are the WH-CH510 headphones compact and lightweight, but the swivel earcups make it easy to safely pack them away in your bag.\nButtons that make listening easy : Use the buttons to play, stop, or skip through tracks and adjust the volume.\nEasy hands-free calling : Conversation flows freely with easy hands-free calling, thanks to the built-in microphone. No need to even take your phone from your pocket.",
        "stock": true,
        "ibrand": "pTron",
        "rating": 3.6
    }
]
*/
