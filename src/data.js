import Technical from "./components/Teams/Technical";
import EventManagement from "./components/Teams/EventManagement";
import SocialMedia from './components/Teams/SocialMedia';
import Content from './components/Teams/Content';
import Design from './components/Teams/Design';

export const upcomingEvents =[
    {
        id:1,
        img:"https://images.squarespace-cdn.com/content/v1/596511dc6b4998cddca6e553/1538370086507-WZQCION3ZR0OA9LI4NJ0/unnamed.jpg",
        ytlink:"https://www.youtube.com/embed/rokGy0huYEA",
        bgcolor:"aliceblue",
        title:"DemoEvent by Igniters club",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        dateofevent:"19 Sept 2021",
        timeofevent:"19:00",
        venue:"Auditorium",
        reglink:"https://docs.google.com/forms",
    },
    {
        id:2,
        img:"https://images.squarespace-cdn.com/content/v1/596511dc6b4998cddca6e553/1538370086507-WZQCION3ZR0OA9LI4NJ0/unnamed.jpg",
        ytlink:"https://www.youtube.com/embed/rokGy0huYEA",
        bgcolor:"coral",
        title:"This Event 2",  
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        dateofevent:"19 Sept 2021",
        timeofevent:"19:00",
        venue:"Auditorium",
        reglink:"https://docs.google.com/forms",
    },
    {
        id:3,
        img:"https://images.squarespace-cdn.com/content/v1/596511dc6b4998cddca6e553/1538370086507-WZQCION3ZR0OA9LI4NJ0/unnamed.jpg",
        ytlink:"https://www.youtube.com/embed/rokGy0huYEA",
        bgcolor:"lightblue",
        title:"This Event 3",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        dateofevent:"19 Sept 2021",
        timeofevent:"19:00",
        venue:"Auditorium",
        reglink:"https://docs.google.com/forms",
    },
];

export const navItems = [
    {
      id: 1,
      title: "Home",
      href: "#",
    },
    {
      id: 2,
      title: "About",
      href: "#",
    },
    {
      id: 3,
      title: "Events",
      href: "#events",
    },
    {
      id: 4,
      title: "Blog",
      href: "#blog",
    },
    {
      id:5,
      title: "to Connect",
      href: "#toconnect",
    },
    {
      id: 6,
      title: "Team",
      href: "#team",
    },
  ];

  export const mediumBlogs=[
    {
      id:1,
      title:"Program or be Programmed",
      short_desc:"Ten years ago, I realized media literacy meant something different",
      author:"Douglas Rushkoff",
      date_posted:"Apr 12",
      reading_time:"3 min read",
      category:"Computer",
      link:"https://rushkoff.medium.com/program-or-be-programmed-633fb8f045f3"
    },
    {
      id:2,
      title:"Program or be Programmed",
      short_desc:"Ten years ago, I realized media literacy meant something different",
      author:"Douglas Rushkoff",
      date_posted:"Apr 12",
      reading_time:"3 min read",
      category:"Computer",
      link:"https://rushkoff.medium.com/program-or-be-programmed-633fb8f045f3"
    },
    {
      id:3,
      title:"Program or be Programmed",
      short_desc:"Ten years ago, I realized media literacy meant something different",
      author:"Douglas Rushkoff",
      date_posted:"Apr 12",
      reading_time:"3 min read",
      category:"Computer",
      link:"https://rushkoff.medium.com/program-or-be-programmed-633fb8f045f3"
    },
    {
      id:4,
      title:"Program or be Programmed",
      short_desc:"Ten years ago, I realized media literacy meant something different",
      author:"Douglas Rushkoff",
      date_posted:"Apr 12",
      reading_time:"3 min read",
      category:"Computer",
      link:"https://rushkoff.medium.com/program-or-be-programmed-633fb8f045f3"
    }
  ];

  export const TeamList=[
    <EventManagement/>,
    <SocialMedia/>,
    <Technical/>,
    <Design/>,
    <Content/>
  ];

  export const members=[
    //DO NOT CHANGE THE ORDER
    //PRESIDENT > VICE PRESIDENT > LEADS > MEMBERs (descending order)

    // PRESIDENTS
    {
      id:'P',
      name:"Akarsh Tripathi",
      position:"President",
      profile:"https://media-exp1.licdn.com/dms/image/C4E03AQHazVglzpYCiw/profile-displayphoto-shrink_400_400/0/1633029228215?e=1656547200&v=beta&t=En3rRxIwL5rzZITU8HNVq8I7KK7gd4v8MEWdCVPUSF4",
      instagram:"https://www.instagram.com/akarsh_._t/",
      linkedin:"https://www.linkedin.com/in/akarsh-tripathi/"
    },
    {
      id:'VP',
      name:"Pritosh",
      position:"Vice President",
      profile:"https://media-exp1.licdn.com/dms/image/C4E03AQFWP9t6vktA4w/profile-displayphoto-shrink_400_400/0/1632585433563?e=1656547200&v=beta&t=L-5D11yfqYNBm-6IdSEV-3RPUYGi4NoHDbPVt3mQOWs",
      instagram:"https://www.instagram.com/pritosh.t/",
      linkedin:"https://www.linkedin.com/in/pritosh/"
    },
    {
      id:'VP',
      name:"Kuhoo Chandra",
      position:"Vice President",
      profile:"https://media-exp1.licdn.com/dms/image/C4E03AQF_NNNx-nLP3Q/profile-displayphoto-shrink_400_400/0/1643357874345?e=1656547200&v=beta&t=LqWxdJRyOuYt8WQhcW1VXdJ45ZfOazPaI_iNbZ135Wg",
      linkedin:"https://www.linkedin.com/in/kuhoo-chandra-b54549221/"
    },


    // Event Management
    {
      id:'EL',
      name:"Tulip Singh",
      position:"Lead",
      profile:"https://media-exp1.licdn.com/dms/image/C5603AQFzYl6kx0hbaQ/profile-displayphoto-shrink_400_400/0/1634923525959?e=1656547200&v=beta&t=_-JTqupU6G1ultJQv2Ri3gQ0e_mgzemrnZh9YpYws38",
      linkedin:"https://www.linkedin.com/in/tulip-aggarwal/"
    },
    {
      id:'EL',
      name:"Vedanshu Sharma",
      position:"Co Lead"
      // profile:"https://media-exp1.licdn.com/dms/image/C5603AQGyGnRRXQ_nHg/profile-displayphoto-shrink_400_400/0/1642603721368?e=1656547200&v=beta&t=MGclIlTsuA23at5fnR-jTrnmpTtmASPSIN9RWR4Xobs"
      // linkedin:"https://www.linkedin.com/in/ananta-paliwal-668a6122a/"
    },
    {
      id:'EM',
      name:"Ananta Paliwal",
      position:"Member",
      profile:"https://media-exp1.licdn.com/dms/image/C5603AQGyGnRRXQ_nHg/profile-displayphoto-shrink_400_400/0/1642603721368?e=1656547200&v=beta&t=MGclIlTsuA23at5fnR-jTrnmpTtmASPSIN9RWR4Xobs",
      linkedin:"https://www.linkedin.com/in/ananta-paliwal-668a6122a/"
    },
    {
      id:'EM',
      name:"Saurav Kumar Sahoo",
      position:"Member"
    },
    {
      id:'EM',
      name:"Garima Singh",
      position:"Member",
      profile:"https://media-exp1.licdn.com/dms/image/C4D03AQFbs14uVdGNVA/profile-displayphoto-shrink_400_400/0/1650441501340?e=1656547200&v=beta&t=Fo5nMmfcDj7PkOZPcPRhlbyyGMHIxbyhUXHfrP_znmc",
      linkedin:"https://www.linkedin.com/in/garima-singh-491787225/"
    },
    {
      id:'EM',
      name:"Gourang Agrawal",
      position:"Member"
    },


    // Social Media
    {
      id:'SML',
      name:"Diksha Bhambri",
      position:"Lead",
      profile:"https://media-exp1.licdn.com/dms/image/C5603AQHfwZeAXFkX8Q/profile-displayphoto-shrink_400_400/0/1642342535945?e=1656547200&v=beta&t=MaqLaREtmyhQvLwd3FYgs2TIam5RXXEvlxMt6cKTor0",
      linkedin:"https://www.linkedin.com/in/diksha-bhambri-1b058b209/"
    },
    {
      id:'SML',
      name:"M Shraddha",
      position:"Co Lead",
      profile:"https://media-exp1.licdn.com/dms/image/C5603AQFfym7S_ffZQw/profile-displayphoto-shrink_400_400/0/1643718334148?e=1656547200&v=beta&t=QaXhhx5IPfR4GBVJHZMavZHDIejLHGwLck_qL-fXwO0",
      linkedin:"https://www.linkedin.com/in/shraddha-m-9b99a9207/"
    },

    {
      id:'SMM',
      name:"Arkoyoti Dey",
      position:"Member"
    },
    {
      id:'SMM',
      name:"Arushi Saxena",
      position:"Member",
      profile:"https://media-exp1.licdn.com/dms/image/C4D03AQFLE7_p_oJX5Q/profile-displayphoto-shrink_400_400/0/1647440397581?e=1656547200&v=beta&t=93VX1bbkFfLWDtgOo9DVH1QiojMfThBFScB1FcHgw7M",
      linkedin:"https://www.linkedin.com/in/arushi-saxena-72805b22a/"
    },
    {
      id:'SMM',
      name:"Manav Shah",
      position:"Member",
      profile:"https://media-exp1.licdn.com/dms/image/C4E03AQGaxCVZHF9k9A/profile-displayphoto-shrink_400_400/0/1628232625380?e=1656547200&v=beta&t=Cu1igHEqMNQoVbTweVkvclwUO_X1nmO6HT8rrBrt6mY",
      linkedin:"https://www.linkedin.com/in/mdshah2000/"
    },

    // Design
    {
      id:'DL',
      name:"Shantanu Modhave",
      position:"Lead",
      profile:"https://media-exp1.licdn.com/dms/image/C5603AQGCSOEwtt3eIQ/profile-displayphoto-shrink_400_400/0/1646586557400?e=1656547200&v=beta&t=4ZFM7tUPvDygDNsvhXIG7siYdFaKVn-sNrN_rDsleRA",
      linkedin:"https://www.linkedin.com/in/shantanu-modhave-m777s/"
    },
    {
      id:'DL',
      name:"Arun Thomas M",
      position:"Co Lead",
      profile:"https://media-exp1.licdn.com/dms/image/C5603AQHlnkKVX_lFhw/profile-displayphoto-shrink_400_400/0/1644946963805?e=1656547200&v=beta&t=xH3n3LcLRpe4dH7BENg9PqJMt7fepk3QsThN7hv9lyY",
      linkedin:"https://www.linkedin.com/in/arunthomas13/"
    },

    {
      id:'DM',
      name:"Ashmit pandey",
      position:"Member",
      profile:"https://media-exp1.licdn.com/dms/image/C4E03AQF1lLtdxAotfQ/profile-displayphoto-shrink_400_400/0/1646065323342?e=1656547200&v=beta&t=rRjEwDmFmxk6oO8kLxhSCXvXuNa31rON6LQF1c4-nTM",
      linkedin:"https://www.linkedin.com/in/ashmit-pandey-438760228/"
    },
    {
      id:'DM',
      name:"Sumit Kumar Garsa",
      position:"Member",
      profile:"https://media-exp1.licdn.com/dms/image/C4E03AQHk2t-pw_WhRg/profile-displayphoto-shrink_400_400/0/1648614979507?e=1656547200&v=beta&t=asQeiyk4IeiNVR9FSgdhyxF_rIOQIERGqC2j-Zmhjnc",
      linkedin:"https://www.linkedin.com/in/sumit-kumar-garsa-49b625227/"
    },

    // Content
    {
      id:'CL',
      name:"Deepika Shesh Srivastav",
      position:"Lead"
    },
    {
      id:'CL',
      name:"Jayshree Karmakar",
      position:"Co Lead",
      profile:"https://media-exp1.licdn.com/dms/image/C4D03AQGKr6vzE7Oy8Q/profile-displayphoto-shrink_400_400/0/1650733990038?e=1656547200&v=beta&t=SN0-H4WL7S_dSsNM07FVCxkkHO6bSyVLq6OJ02mhjKk",
      linkedin:"https://www.linkedin.com/in/jayshree-karmakar-8a9b26b0/"
    },

    {
      id:'CM',
      name:"Ayushi Bhuyan",
      position:"Member"
    },
    {
      id:'CM',
      name:"Jasika Gupta",
      position:"Member",
      profile:"https://media-exp1.licdn.com/dms/image/C5603AQH-QJBrN0dcTg/profile-displayphoto-shrink_400_400/0/1640781160103?e=1656547200&v=beta&t=3Azx3RXrZKroTn0GeZyl6Bypm7KrOwCuE4f8wVYmFqU",
      linkedin:"https://www.linkedin.com/in/jasika-gupta/"
    },

    //Technical - Web
    {
      id:'TL',
      name:"Sankalp Swarup",
      position:"Lead",
      profile:"https://media-exp1.licdn.com/dms/image/C4D03AQEamhmTTx5_mQ/profile-displayphoto-shrink_400_400/0/1645026785168?e=1656547200&v=beta&t=fVL9tbxa5j_43GQzSSqRkBwv4ffgysnk2DpbV2u_ng0",
      linkedin:"https://www.linkedin.com/in/sankalpswarup/",
      instagram:"https://www.instagram.com/mostlykhadus/",
      github:"https://github.com/sankalp20"
    },
    {
      id:'TWM',
      name:"Arunima Singh",
      position:"Web Member",
      profile:"https://media-exp1.licdn.com/dms/image/C5603AQGGODVn7D06AQ/profile-displayphoto-shrink_400_400/0/1642752782266?e=1656547200&v=beta&t=vH_4I24zRJWaeLx2yXSSY-XqHU6sotjcOZuXZQUnFFA",
      instagram:"https://www.instagram.com/alittleambivert/",
      linkedin:"https://www.linkedin.com/in/-arunima-singh/",
      github:"https://github.com/arunima14/"
    },
    {
      id:'TWM',
      name:"Amit Kumar Verma",
      position:" Web Member",
      profile:"https://media-exp1.licdn.com/dms/image/C4D03AQEFvQsfIngnuw/profile-displayphoto-shrink_400_400/0/1650527782080?e=1656547200&v=beta&t=cpuCgbsu1amRd5v5CkgfHrtKQZE3Tj2xnNrqKGsdqlM",
      linkedin:"https://www.linkedin.com/in/meamitverma/",
      instagram:"https://www.instagram.com/meamitverma/",
      github:"https://github.com/meamitverma"
    },
    {
      id:'TWM',
      name:"Nishi Jain",
      position:"Web Member",
      profile:"https://media-exp1.licdn.com/dms/image/C5603AQHPQDT-0FF6kQ/profile-displayphoto-shrink_400_400/0/1631094697524?e=1656547200&v=beta&t=KeAXzX2XvS1q4mSA8RKjcOE_N0hoGw1B_A5QD0EIp7U",
      linkedin:"https://www.linkedin.com/in/nishi-jain-b37636209/"
    },
    {
      id:'TWM',
      name:"Vidushi Pandey",
      position:"Web Member",
      profile:"https://media-exp1.licdn.com/dms/image/C4D03AQE-H3ENHTzSlQ/profile-displayphoto-shrink_400_400/0/1640620458755?e=1656547200&v=beta&t=892bXu64_YY52hNWTE3fPN9-BRPU84YQHYeBiWfbA-E",
      linkedin:"https://www.linkedin.com/in/vidushi-pandey-964a51221/"
    },

    // Technical - Data Science
    {
      id:'TDSM',
      name:"Rudra Pratap Singh Ranawat",
      position:"Data Science Member"
    },
    {
      id:'TDSM',
      name:"Shivani Arora",
      position:"Data Science Member",
      profile:"https://media-exp1.licdn.com/dms/image/C4E03AQG6c96UjBpj4g/profile-displayphoto-shrink_400_400/0/1650295038029?e=1656547200&v=beta&t=qewrFP8sMhZanfBciZ9TQsZPq7flTh-JNEH2EDfouPs",
      linkedin:"https://www.linkedin.com/in/shivani-arora29/"
    },

    // Technical - Cloud
    {
      id:'TCM',
      name:"Harshul Nanwani",
      position:"Cloud Member",
      linkedin:"https://www.linkedin.com/in/harshulnanwani2611/"
    },
    {
      id:'TCM',
      name:"Ayush Thakur",
      position:"Cloud Member",
      profile:"https://media-exp1.licdn.com/dms/image/C5603AQE__W73sShvNA/profile-displayphoto-shrink_400_400/0/1639492918964?e=1656547200&v=beta&t=IJ_DProGxfIUSgnGnAPXIlxQz-tiXyDKjH0JQdLnQBw",
      linkedin:"https://www.linkedin.com/in/ayush-thakur-1b1127221/"
    }
  ];
