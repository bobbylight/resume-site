import '../assets/scss/pillar-1.scss';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

library.add(faMobileAlt, faAward, faGlobe, faEnvelope, faLinkedinIn);
dom.watch();
