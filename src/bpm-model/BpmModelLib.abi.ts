//Code generated by solts. DO NOT EDIT.
import { Readable } from "stream";
interface Provider<Tx> {
    deploy(msg: Tx, callback: (err: Error, addr: Uint8Array) => void): void;
    call(msg: Tx, callback: (err: Error, exec: Uint8Array) => void): void;
    callSim(msg: Tx, callback: (err: Error, exec: Uint8Array) => void): void;
    listen(signature: string, address: string, callback: (err: Error, event: any) => void): Readable;
    payload(data: string, address?: string): Tx;
    encode(name: string, inputs: string[], ...args: any[]): string;
    decode(data: Uint8Array, outputs: string[]): any;
}
function Call<Tx, Output>(client: Provider<Tx>, addr: string, data: string, isSim: boolean, callback: (exec: Uint8Array) => Output): Promise<Output> {
    const payload = client.payload(data, addr);
    if (isSim)
        return new Promise((resolve, reject) => { client.callSim(payload, (err, exec) => { err ? reject(err) : resolve(callback(exec)); }); });
    else
        return new Promise((resolve, reject) => { client.call(payload, (err, exec) => { err ? reject(err) : resolve(callback(exec)); }); });
}
function Replace(bytecode: string, name: string, address: string): string {
    address = address + Array(40 - address.length + 1).join("0");
    const truncated = name.slice(0, 36);
    const label = "__" + truncated + Array(37 - truncated.length).join("_") + "__";
    while (bytecode.indexOf(label) >= 0)
        bytecode = bytecode.replace(label, address);
    return bytecode;
}
export module BpmModelLib {
    export function Deploy<Tx>(client: Provider<Tx>, commons_base_ErrorsLib_sol_ErrorsLib: string, commons_collections_DataStorageUtils_sol_DataStorageUtils: string): Promise<string> {
        let bytecode = "61209f610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c8063985cecfc11610065578063985cecfc14610217578063d0fee14114610279578063dbca0f7b146102df578063ec4601541461036d57610087565b8063278849a31461008c5780636d03dc5e14610153578063856a33a5146101b5575b600080fd5b6100d8600480360360408110156100a257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101185780820151818401526020810190506100fd565b50505050905090810190601f1680156101455780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61019f6004803603604081101561016957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061080a565b6040518082815260200191505060405180910390f35b610201600480360360408110156101cb57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aeb565b6040518082815260200191505060405180910390f35b6102636004803603604081101561022d57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dcc565b6040518082815260200191505060405180910390f35b6102c56004803603604081101561028f57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110ad565b604051808215151515815260200191505060405180910390f35b61032b600480360360408110156102f557600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061139b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103b96004803603604081101561038357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061169c565b604051808215151515815260200191505060405180910390f35b60608273__$ecfb6c4d3c3ceff197e19e585a0a53728c$__6375d7bdef8260070160050160019054906101000a900460ff1615801561042457508260040160020160149054906101000a900460ff16155b61042c611f54565b6040518363ffffffff1660e01b81526004018083151515158152602001806020018060200180602001848103845285818151815260200191508051906020019080838360005b8381101561048d578082015181840152602081019050610472565b50505050905090810190601f1680156104ba5780820380516001836020036101000a031916815260200191505b5084810383526028815260200180611fe6602891396040018481038252605d81526020018061200e605d91396060019550505050505060006040518083038186803b15801561050857600080fd5b505af415801561051c573d6000803e3d6000fd5b505050508360070160050160019054906101000a900460ff16156105e157836007016004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105d55780601f106105aa576101008083540402835291602001916105d5565b820191906000526020600020905b8154815290600101906020018083116105b857829003601f168201915b50505050509150610803565b6000808560040173__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__631dcb1e9a9091876040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604080518083038186803b15801561066b57600080fd5b505af415801561067f573d6000803e3d6000fd5b505050506040513d604081101561069557600080fd5b810190808051906020019092919080519060200190929190505050915091508173ffffffffffffffffffffffffffffffffffffffff1663d2e8a0fa826040518263ffffffff1660e01b81526004018082815260200191505060006040518083038186803b15801561070557600080fd5b505afa158015610719573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561074357600080fd5b810190808051604051939291908464010000000082111561076357600080fd5b8382019150602082018581111561077957600080fd5b825186600182028301116401000000008211171561079657600080fd5b8083526020830192505050908051906020019080838360005b838110156107ca5780820151818401526020810190506107af565b50505050905090810190601f1680156107f75780820380516001836020036101000a031916815260200191505b50604052505050935050505b5092915050565b60008273__$ecfb6c4d3c3ceff197e19e585a0a53728c$__6375d7bdef8260070160050160019054906101000a900460ff1615801561085b57508260040160020160149054906101000a900460ff16155b610863611f54565b6040518363ffffffff1660e01b81526004018083151515158152602001806020018060200180602001848103845285818151815260200191508051906020019080838360005b838110156108c45780820151818401526020810190506108a9565b50505050905090810190601f1680156108f15780820380516001836020036101000a031916815260200191505b5084810383526028815260200180611fe6602891396040018481038252605d81526020018061200e605d91396060019550505050505060006040518083038186803b15801561093f57600080fd5b505af4158015610953573d6000803e3d6000fd5b505050508360070160050160019054906101000a900460ff16156109805783600701600301549150610ae4565b6000808560040173__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__631dcb1e9a9091876040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604080518083038186803b158015610a0a57600080fd5b505af4158015610a1e573d6000803e3d6000fd5b505050506040513d6040811015610a3457600080fd5b810190808051906020019092919080519060200190929190505050915091508173ffffffffffffffffffffffffffffffffffffffff1663e2be8fe1826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610aa457600080fd5b505afa158015610ab8573d6000803e3d6000fd5b505050506040513d6020811015610ace57600080fd5b8101908080519060200190929190505050935050505b5092915050565b60008273__$ecfb6c4d3c3ceff197e19e585a0a53728c$__6375d7bdef8260070160050160019054906101000a900460ff16158015610b3c57508260040160020160149054906101000a900460ff16155b610b44611f54565b6040518363ffffffff1660e01b81526004018083151515158152602001806020018060200180602001848103845285818151815260200191508051906020019080838360005b83811015610ba5578082015181840152602081019050610b8a565b50505050905090810190601f168015610bd25780820380516001836020036101000a031916815260200191505b5084810383526028815260200180611fe6602891396040018481038252605d81526020018061200e605d91396060019550505050505060006040518083038186803b158015610c2057600080fd5b505af4158015610c34573d6000803e3d6000fd5b505050508360070160050160019054906101000a900460ff1615610c615783600701600201549150610dc5565b6000808560040173__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__631dcb1e9a9091876040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604080518083038186803b158015610ceb57600080fd5b505af4158015610cff573d6000803e3d6000fd5b505050506040513d6040811015610d1557600080fd5b810190808051906020019092919080519060200190929190505050915091508173ffffffffffffffffffffffffffffffffffffffff166335ce1bd1826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610d8557600080fd5b505afa158015610d99573d6000803e3d6000fd5b505050506040513d6020811015610daf57600080fd5b8101908080519060200190929190505050935050505b5092915050565b60008273__$ecfb6c4d3c3ceff197e19e585a0a53728c$__6375d7bdef8260070160050160019054906101000a900460ff16158015610e1d57508260040160020160149054906101000a900460ff16155b610e25611f54565b6040518363ffffffff1660e01b81526004018083151515158152602001806020018060200180602001848103845285818151815260200191508051906020019080838360005b83811015610e86578082015181840152602081019050610e6b565b50505050905090810190601f168015610eb35780820380516001836020036101000a031916815260200191505b5084810383526028815260200180611fe6602891396040018481038252605d81526020018061200e605d91396060019550505050505060006040518083038186803b158015610f0157600080fd5b505af4158015610f15573d6000803e3d6000fd5b505050508360070160050160019054906101000a900460ff1615610f4257836007016001015491506110a6565b6000808560040173__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__631dcb1e9a9091876040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604080518083038186803b158015610fcc57600080fd5b505af4158015610fe0573d6000803e3d6000fd5b505050506040513d6040811015610ff657600080fd5b810190808051906020019092919080519060200190929190505050915091508173ffffffffffffffffffffffffffffffffffffffff16632512e6f1826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561106657600080fd5b505afa15801561107a573d6000803e3d6000fd5b505050506040513d602081101561109057600080fd5b8101908080519060200190929190505050935050505b5092915050565b60008273__$ecfb6c4d3c3ceff197e19e585a0a53728c$__6375d7bdef8260070160050160019054906101000a900460ff161580156110fe57508260040160020160149054906101000a900460ff16155b611106611f54565b6040518363ffffffff1660e01b81526004018083151515158152602001806020018060200180602001848103845285818151815260200191508051906020019080838360005b8381101561116757808201518184015260208101905061114c565b50505050905090810190601f1680156111945780820380516001836020036101000a031916815260200191505b5084810383526028815260200180611fe6602891396040018481038252605d81526020018061200e605d91396060019550505050505060006040518083038186803b1580156111e257600080fd5b505af41580156111f6573d6000803e3d6000fd5b505050508360070160050160019054906101000a900460ff1615611230578360070160050160009054906101000a900460ff169150611394565b6000808560040173__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__631dcb1e9a9091876040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604080518083038186803b1580156112ba57600080fd5b505af41580156112ce573d6000803e3d6000fd5b505050506040513d60408110156112e457600080fd5b810190808051906020019092919080519060200190929190505050915091508173ffffffffffffffffffffffffffffffffffffffff166330c676c9826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561135457600080fd5b505afa158015611368573d6000803e3d6000fd5b505050506040513d602081101561137e57600080fd5b8101908080519060200190929190505050935050505b5092915050565b60008273__$ecfb6c4d3c3ceff197e19e585a0a53728c$__6375d7bdef8260070160050160019054906101000a900460ff161580156113ec57508260040160020160149054906101000a900460ff16155b6113f4611f54565b6040518363ffffffff1660e01b81526004018083151515158152602001806020018060200180602001848103845285818151815260200191508051906020019080838360005b8381101561145557808201518184015260208101905061143a565b50505050905090810190601f1680156114825780820380516001836020036101000a031916815260200191505b5084810383526028815260200180611fe6602891396040018481038252605d81526020018061200e605d91396060019550505050505060006040518083038186803b1580156114d057600080fd5b505af41580156114e4573d6000803e3d6000fd5b505050508360070160050160019054906101000a900460ff1615611531578360070160000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150611695565b6000808560040173__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__631dcb1e9a9091876040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604080518083038186803b1580156115bb57600080fd5b505af41580156115cf573d6000803e3d6000fd5b505050506040513d60408110156115e557600080fd5b810190808051906020019092919080519060200190929190505050915091508173ffffffffffffffffffffffffffffffffffffffff1663f364e379826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561165557600080fd5b505afa158015611669573d6000803e3d6000fd5b505050506040513d602081101561167f57600080fd5b8101908080519060200190929190505050935050505b5092915050565b60008060008460000173__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__631dcb1e9a9091866040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604080518083038186803b15801561172857600080fd5b505af415801561173c573d6000803e3d6000fd5b505050506040513d604081101561175257600080fd5b8101908080519060200190929190805190602001909291905050509150915060008273ffffffffffffffffffffffffffffffffffffffff166331502f13836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156117c457600080fd5b505afa1580156117d8573d6000803e3d6000fd5b505050506040513d60208110156117ee57600080fd5b81019080805190602001909291905050509050611809611f91565b60ff168160ff1614156119235773__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__63060964e0846000858a60030160009054906101000a900460ff166118508c8c6110ad565b6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018360058111156118ad57fe5b60ff168152602001821515151581526020019550505050505060206040518083038186803b1580156118de57600080fd5b505af41580156118f2573d6000803e3d6000fd5b505050506040513d602081101561190857600080fd5b81019080805190602001909291905050509350505050611f4e565b61192b611f9a565b60ff168160ff161415611a6d5773__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__6301e38c76846000858a60030160009054906101000a900460ff166119728c8c61139b565b6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018360058111156119cf57fe5b60ff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060206040518083038186803b158015611a2857600080fd5b505af4158015611a3c573d6000803e3d6000fd5b505050506040513d6020811015611a5257600080fd5b81019080805190602001909291905050509350505050611f4e565b611a75611fa3565b60ff168160ff161415611bf05773__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__6389aa04ff846000858a60030160009054906101000a900460ff16611abc8c8c6103d3565b6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001836005811115611b1957fe5b60ff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611b5d578082015181840152602081019050611b42565b50505050905090810190601f168015611b8a5780820380516001836020036101000a031916815260200191505b50965050505050505060206040518083038186803b158015611bab57600080fd5b505af4158015611bbf573d6000803e3d6000fd5b505050506040513d6020811015611bd557600080fd5b81019080805190602001909291905050509350505050611f4e565b611bf8611fac565b60ff168160ff161415611d0e5773__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__63b1be6dc8846000858a60030160009054906101000a900460ff16611c3f8c8c610dcc565b6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001836005811115611c9c57fe5b60ff1681526020018281526020019550505050505060206040518083038186803b158015611cc957600080fd5b505af4158015611cdd573d6000803e3d6000fd5b505050506040513d6020811015611cf357600080fd5b81019080805190602001909291905050509350505050611f4e565b611d16611fb5565b60ff168160ff161415611e2c5773__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__636e1878db846000858a60030160009054906101000a900460ff16611d5d8c8c610aeb565b6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001836005811115611dba57fe5b60ff1681526020018281526020019550505050505060206040518083038186803b158015611de757600080fd5b505af4158015611dfb573d6000803e3d6000fd5b505050506040513d6020811015611e1157600080fd5b81019080805190602001909291905050509350505050611f4e565b611e34611fc4565b60ff168160ff161415611f4a5773__$b57d6bac5d25edb57dfc5dd3520b6e9fc5$__63e592a160846000858a60030160009054906101000a900460ff16611e7b8c8c61080a565b6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001836005811115611ed857fe5b60ff1681526020018281526020019550505050505060206040518083038186803b158015611f0557600080fd5b505af4158015611f19573d6000803e3d6000fd5b505050506040513d6020811015611f2f57600080fd5b81019080805190602001909291905050509350505050611f4e565b5050505b92915050565b60606040518060400160405280600681526020017f4552523630310000000000000000000000000000000000000000000000000000815250905090565b60006001905090565b60006028905090565b60006002905090565b6000603b905090565b6000611fbf611fd3565b905090565b6000611fce611fdc565b905090565b60006008905090565b6000601290509056fe42706d4d6f64656c4c69622e7072655f726967687448616e64436f6e646974696f6e45786973747352696768742d68616e6420636f6e646974696f6e20287072696d6974697665206f7220436f6e646974696f6e616c4461746129206d697373696e672066726f6d2070726f7669646564205472616e736974696f6e436f6e646974696f6ea265627a7a723158200c62d69b2cd6132424a55b87161b9c6659fd98e3d3bc4ac46b0abeb5f0976b6264736f6c634300050c0032";
        bytecode = Replace(bytecode, "$ecfb6c4d3c3ceff197e19e585a0a53728c$", commons_base_ErrorsLib_sol_ErrorsLib);
        bytecode = Replace(bytecode, "$b57d6bac5d25edb57dfc5dd3520b6e9fc5$", commons_collections_DataStorageUtils_sol_DataStorageUtils);
        const data = bytecode;
        const payload = client.payload(data);
        return new Promise((resolve, reject) => { client.deploy(payload, (err, addr) => {
            if (err)
                reject(err);
            else {
                const address = Buffer.from(addr).toString("hex").toUpperCase();
                resolve(address);
            }
        }); });
    }
    export class Contract<Tx> {
        private client: Provider<Tx>;
        public address: string;
        constructor(client: Provider<Tx>, address: string) {
            this.client = client;
            this.address = address;
        }
    }
    export const Encode = <Tx>(client: Provider<Tx>) => { return {}; };
    export const Decode = <Tx>(client: Provider<Tx>, data: Uint8Array) => { return {}; };
}