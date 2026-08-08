import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons/faMobileScreenButton";
import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

library.add(faMobileScreenButton, faAward, faBook, faGlobe, faEnvelope, faLinkedinIn);
dom.watch();
