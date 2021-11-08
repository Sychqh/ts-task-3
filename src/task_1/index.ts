/** Задача 1 - Сущность любой монетки
 * Опишите класс валюты
 * Он должен определять имя(name) валюты, String
 * Содержать количество(value) валюты, Number
 * Содержать количественный тип(unit), в котором исчисляется валюта, String
 * Класс должен предоставлять информацию о типе валюты: Материальная, криптовалюта или металл-депозит
 * Example new Currency("DOGE", 12.5, "satoshi")
 */

export class Currency {
    private _name: string;
    private _value: number;
    private _unit: string;
    private _type: CurrencyType;
    
    constructor(name: string, value: number, unit: string) {
        if (!name || value < 0 || value === undefined || !isFinite(value) || !unit) {
            throw new Error("Incorrect input arguments");
        }
        this._name = name;
        this._value = value;
        this._unit = unit;
    }
    
    public get name() {
        return this._name;
    }
    
    public get unit() {
        return this._unit;
    }
    
    public get value() {
        return this._value;
    }
    
    public set value(newValue: number) {
        if (newValue < 0 || newValue === undefined || !isFinite(newValue)) {
            throw new Error("New value must be a number higher than zero");
        }
        
        this._value = newValue;
    }
    
    public get type() {
        return this._type;
    }
    
    public set type(newType: CurrencyType) {
        if (newType === undefined) {
            throw new Error("Incorrect input argument");
        }
        
        this._type = newType;
    }
}

export enum CurrencyType {
    Material,
    CryptoCurrency,
    MetalDeposit
}
