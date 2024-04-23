import 'normalize.css';
import '/node_modules/ozimnad-reset/reset.css';
import { Events} from "./events.js";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


import '../styles/styles.scss';


window.addEventListener('DOMContentLoaded', function (){
   console.log('Это общий JS');
});


new Events();

Fancybox.bind("[data-fancybox]", {
   // Your custom options
});