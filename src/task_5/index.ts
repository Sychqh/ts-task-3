/**
 * Задание 5 - Власть банков
 * В этой задаче вам нужно реализовать класс контроллер
 * 1. registerVault(): ISecureVaultRequisites - регистрирует хранилище в банке
 * 2. proceedContract(IContract): void - проводит договор между счетами
 * 3. Класс контроллера должен быть реализацией паттерна Singleton
 *
 * Хранилища должны быть сохранены в массив vaultStore: Vault[]
 */
import {IContract} from "../task_4";
import {ISecureVaultRequisites, Vault} from "../task_3";

export class BankController {
    private static instance: BankController;
    private _vaultStore: Vault[];
    
    public static getInstance(): BankController {
        if (!this.instance) {
            this.instance = new BankController();
        }
        
        return this.instance;
    }
    
    public registerVault(): ISecureVaultRequisites {
        const newVault = new Vault();
        this._vaultStore.push(newVault);
        
        return newVault;
    }
    
    public proceedContract(contract: IContract): void {
        const sender = this._vaultStore.find((vault: Vault) => vault.id === contract.id);
        const receiver = this._vaultStore.find((vault: Vault) => vault.id === contract.receiver.id);
        if (sender === undefined || receiver === undefined) {
            throw new Error("Sender or receiver don't exist")
        }
        
        contract.signAndTransfer();
        try {
            sender.withdraw(contract.value);
        } catch (e) {
            contract.closeTransfer();
            
            return;
        }
        
        receiver.deposit(contract.value);
        contract.closeTransfer;
    }
}

