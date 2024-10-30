import facebook from "./../public/facebook.png"
import twitter from "./../public/twitter.png"
import linked from "./../public/linkedin.png"

import img1 from "./../public/Image 01.svg"
import img2 from "./../public/Image 02.svg"
import img3 from "./../public/Image 03.svg"

export const FooterDataOne = [
    {
      title: 'Service',
      list: [ 
      {
        link: "Payment & Tax",
        to: "home"
      }, 
      {
        link: "Features",
        to: "home"
      }, 
      {
        link: "View Booking",
        to: "home"
      }, 
      {
        link: "Support",
        to: "home"
      }
    ]
    }
  ];

  export const FooterDataTwo = [
    {
      title: 'About',
      list: [ 
      {
        link: "About us",
        to: "home"
      }, 
      {
        link: "News",
        to: "home"
      }, 
      {
        link: "Pricing",
        to: "home"
      }, 
      {
        link: "New Property",
        to: "home"
      }
    ]
    }
  ];
  export const FooterDataThree = [
    {
      title: 'Our Location',
      location: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
      data: [ 
      {
        image: facebook,
        to: "home"
      }, 
      {
        image: twitter,
        to: "home"
      }, 
      {
        image: linked,
        to: "home"
      }
    ]
    }
  ];

  export const estate = [
    {
      image: img1,
      category: "featured",
      detail: "3D",
      item: "Residential Property"
    },
    {
      image: img2,
      category: "featured",
      detail: "3D",
       item: "Residential Property"
    },
    {
      image: img3,
      category: "featured",
      detail: "3D",
      item: "Residential Property"
    },
    {
      image: img3,
      category: "Commercial",
      detail: "2D",
      item: "Commercial Property"
    },
    {
      image: img1,
      category: "Commercial",
      detail: "2D",
       item: "Commercial Property"
    },
    {
      image: img2,
      category: "Commercial",
      detail: "2D",
      item: "Commercial Property"
    },
    {
      image: img3,
      category: "Agriculture",
      detail: "3D",
      item: "Agriculture Property"
    },
    {
      image: img2,
      category: "Agriculture",
      detail: "3D",
       item: "Agriculture Property"
    },
    {
      image: img1,
      category: "Agriculture",
      detail: "3D",
      item: "Agriculture Property"
    },
    {
      image: img1,
      category: "Industrial",
      detail: "1D",
      item: "Industrial Property"
    },
    {
      image: img2,
      category: "Industrial",
      detail: "3D",
       item: "Industrial Property"
    },
    {
      image: img3,
      category: "Industrial",
      detail: "1D",
      item: "Industrial Property"
    },
 
  ];