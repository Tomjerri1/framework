import { Ford } from './Ford';
import { McLaren } from './McLaren';
import { Lamborghini } from './Lamborghini';

const fordTransit = new Ford("Transit", 2020, "VAN");
const fordTransitTurboDiesel = new Ford("Transit Turbo Diesel", 2022, "VAN");

const mclarenF1 = new McLaren("F1", 1995, "V12");
const mercedesSLR = new McLaren("Mercedes-Benz SLR", 2005, "V8");

const lamborghiniCountach = new Lamborghini("Countach", 1985, 300);
const lamborghiniDiablo = new Lamborghini("Diablo", 1999, 320);

fordTransit.displayInfo();
fordTransitTurboDiesel.displayInfo();

mclarenF1.displayInfo();
mercedesSLR.displayInfo();

lamborghiniCountach.displayInfo();
lamborghiniDiablo.displayInfo();
