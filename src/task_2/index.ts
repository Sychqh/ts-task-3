/** Задача 2 - Много стран, много валют
 * Определите классы следующих валют
 * Dollar
 * Ruble
 * XRP
 * Etherium
 * Gold
*/

import {Currency, CurrencyType} from "../task_1";

export class Dollar extends Currency {
    constructor(value: number) {
        super("Dollar", value, "usd");
        this.type = CurrencyType.Material;
    }
}

export class Ruble extends Currency {
    constructor(value: number) {
        super("Ruble", value, "rub");
        this.type = CurrencyType.Material;
    }
}

export class XRP extends Currency {
    constructor(value: number) {
        super("XRP", value, "xrp");
        this.type = CurrencyType.CryptoCurrency;
    }
}

export class Etherium extends Currency {
    constructor(value: number) {
        super("Etherium", value, "eth");
        this.type = CurrencyType.CryptoCurrency;
    }
}

export class Gold extends Currency {
    constructor(value: number) {
        super("Gold", value, "gold");
        this.type = CurrencyType.MetalDeposit;
    }
}