"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ford_1 = require("./Ford");
const McLaren_1 = require("./McLaren");
const Lamborghini_1 = require("./Lamborghini");
const fordTransit = new Ford_1.Ford("Transit", 2020, "VAN");
const fordTransitTurboDiesel = new Ford_1.Ford("Transit Turbo Diesel", 2022, "VAN");
const mclarenF1 = new McLaren_1.McLaren("F1", 1995, "V12");
const mercedesSLR = new McLaren_1.McLaren("Mercedes-Benz SLR", 2005, "V8");
const lamborghiniCountach = new Lamborghini_1.Lamborghini("Countach", 1985, 300);
const lamborghiniDiablo = new Lamborghini_1.Lamborghini("Diablo", 1999, 320);
fordTransit.displayInfo();
fordTransitTurboDiesel.displayInfo();
mclarenF1.displayInfo();
mercedesSLR.displayInfo();
lamborghiniCountach.displayInfo();
lamborghiniDiablo.displayInfo();
