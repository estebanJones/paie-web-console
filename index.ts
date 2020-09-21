import Presentation from "./presentation";
import Service from "./service";

const service: Service = new Service();
const presentation: Presentation = new Presentation(service);

presentation.menu();