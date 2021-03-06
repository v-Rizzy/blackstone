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
export module ProcessModelRepositoryDb {
    export function Deploy<Tx>(client: Provider<Tx>, commons_base_ErrorsLib_sol_ErrorsLib: string, commons_collections_MappingsLib_sol_MappingsLib: string, commons_utils_ArrayUtilsLib_sol_ArrayUtilsLib: string): Promise<string> {
        let bytecode = "608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611344806100606000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063665584a811610071578063665584a8146102925780636e81fc5d146102b05780637f692a2a1461030c578063b8cb251614610356578063d427d000146103c4578063fd72c2fa14610432576100a9565b80630a452ad6146100ae5780631101ec3b146100f2578063210f8a551461016a578063441f8116146101d85780635d8ff67814610244575b600080fd5b6100f0600480360360208110156100c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610478565b005b6101286004803603608081101561010857600080fd5b810190808035906020019092919080606001909192919290505050610875565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101966004803603602081101561018057600080fd5b8101908080359060200190929190505050610956565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61022e600480360360a08110156101ee57600080fd5b810190808035906020019092919080606001909192919290803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f4565b6040518082815260200191505060405180910390f35b6102906004803603604081101561025a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ce7565b005b61029a610f1c565b6040518082815260200191505060405180910390f35b6102f2600480360360208110156102c657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f29565b604051808215151515815260200191505060405180910390f35b6103146110b9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103826004803603602081101561036c57600080fd5b81019080803590602001909291905050506110e2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103f0600480360360208110156103da57600080fd5b8101908080359060200190929190505050611123565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61045e6004803603602081101561044857600080fd5b810190808035906020019092919050505061115f565b604051808215151515815260200191505060405180910390f35b73__$ecfb6c4d3c3ceff197e19e585a0a53728c$__6375d7bdef6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156104eb6111fd565b6040518363ffffffff1660e01b81526004018083151515158152602001806020018060200180602001848103845285818151815260200191508051906020019080838360005b8381101561054c578082015181840152602081019050610531565b50505050905090810190601f1680156105795780820380516001836020036101000a031916815260200191505b50848103835260218152602001806112ef60219139604001848103825260268152602001806112a4602691396040019550505050505060006040518083038186803b1580156105c757600080fd5b505af41580156105db573d6000803e3d6000fd5b5050505073__$ecfb6c4d3c3ceff197e19e585a0a53728c$__6375d7bdef600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461063161123a565b6040518363ffffffff1660e01b81526004018083151515158152602001806020018060200180602001848103845285818151815260200191508051906020019080838360005b83811015610692578082015181840152602081019050610677565b50505050905090810190601f1680156106bf5780820380516001836020036101000a031916815260200191505b508481038352602381526020018061128160239139604001848103825260258152602001806112ca602591396040019550505050505060006040518083038186803b15801561070d57600080fd5b505af4158015610721573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610872577f0814a6975d95b7ef86d699e601b879308be10e8f2c4c77a940021f3d61b09eaf6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b60006001600084815260200190815260200160002073__$5e3d4bda46c81e962f48c99e99f980d175$__63d93ce316909184604051602001808260036020028082843780830192505050915050604051602081830303815290604052805190602001206040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b15801561091357600080fd5b505af4158015610927573d6000803e3d6000fd5b505050506040513d602081101561093d57600080fd5b8101908080519060200190929190505050905092915050565b6000600373__$5e3d4bda46c81e962f48c99e99f980d175$__63d93ce3169091846040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b1580156109b257600080fd5b505af41580156109c6573d6000803e3d6000fd5b505050506040513d60208110156109dc57600080fd5b81019080805190602001909291905050509050919050565b600073__$ecfb6c4d3c3ceff197e19e585a0a53728c$__6375d7bdef6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610a696111fd565b6040518363ffffffff1660e01b81526004018083151515158152602001806020018060200180602001848103845285818151815260200191508051906020019080838360005b83811015610aca578082015181840152602081019050610aaf565b50505050905090810190601f168015610af75780820380516001836020036101000a031916815260200191505b50848103835260218152602001806112ef60219139604001848103825260268152602001806112a4602691396040019550505050505060006040518083038186803b158015610b4557600080fd5b505af4158015610b59573d6000803e3d6000fd5b505050506001600085815260200190815260200160002073__$5e3d4bda46c81e962f48c99e99f980d175$__63e9dc727990918560405160200180826003602002808284378083019250505091505060405160208183030381529060405280519060200120856040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060206040518083038186803b158015610c2d57600080fd5b505af4158015610c41573d6000803e3d6000fd5b505050506040513d6020811015610c5757600080fd5b81019080805190602001909291905050509050610c72611277565b811415610ce05760028290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b9392505050565b73__$ecfb6c4d3c3ceff197e19e585a0a53728c$__6375d7bdef6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610d5a6111fd565b6040518363ffffffff1660e01b81526004018083151515158152602001806020018060200180602001848103845285818151815260200191508051906020019080838360005b83811015610dbb578082015181840152602081019050610da0565b50505050905090810190601f168015610de85780820380516001836020036101000a031916815260200191505b50848103835260218152602001806112ef60219139604001848103825260268152602001806112a4602691396040019550505050505060006040518083038186803b158015610e3657600080fd5b505af4158015610e4a573d6000803e3d6000fd5b50505050600373__$5e3d4bda46c81e962f48c99e99f980d175$__63691d2b6c909184846040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060206040518083038186803b158015610edc57600080fd5b505af4158015610ef0573d6000803e3d6000fd5b505050506040513d6020811015610f0657600080fd5b8101908080519060200190929190505050505050565b6000600280549050905090565b60006002805480602002602001604051908101604052809291908181526020018280548015610fad57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610f63575b505050505073__$6c578ef14ebe2070bb2319c6842ae291e1$__633da80d669091846040518363ffffffff1660e01b815260040180806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019060200280838360005b83811015611053578082015181840152602081019050611038565b50505050905001935050505060206040518083038186803b15801561107757600080fd5b505af415801561108b573d6000803e3d6000fd5b505050506040513d60208110156110a157600080fd5b81019080805190602001909291905050509050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600282815481106110f157fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6002818154811061113057fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600373__$5e3d4bda46c81e962f48c99e99f980d175$__63cd001d819091846040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b1580156111bb57600080fd5b505af41580156111cf573d6000803e3d6000fd5b505050506040513d60208110156111e557600080fd5b81019080805190602001909291905050509050919050565b60606040518060400160405280600681526020017f4552523430330000000000000000000000000000000000000000000000000000815250905090565b60606040518060400160405280600681526020017f4552523631310000000000000000000000000000000000000000000000000000815250905090565b6000600190509056fe53797374656d4f776e65642e7472616e7366657253797374656d4f776e657273686970546865206d73672e73656e646572206973206e6f74207468652073797374656d206f776e6572546865206e65772073797374656d206f776e6572206d757374206e6f74206265204e554c4c53797374656d4f776e65642e7072655f6f6e6c79427953797374656d4f776e6572a265627a7a72315820e2814ab01b6d5239352b9292cf8701f6c53125267faa40977e5483f9531b903f64736f6c634300050c0032";
        bytecode = Replace(bytecode, "$ecfb6c4d3c3ceff197e19e585a0a53728c$", commons_base_ErrorsLib_sol_ErrorsLib);
        bytecode = Replace(bytecode, "$5e3d4bda46c81e962f48c99e99f980d175$", commons_collections_MappingsLib_sol_MappingsLib);
        bytecode = Replace(bytecode, "$6c578ef14ebe2070bb2319c6842ae291e1$", commons_utils_ArrayUtilsLib_sol_ArrayUtilsLib);
        const data = bytecode + client.encode("", []);
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
        LogSystemOwnerChanged(callback: (err: Error, event: any) => void): Readable { return this.client.listen("LogSystemOwnerChanged", this.address, callback); }
        addModel(_id: Buffer, _version: [number, number, number], _address: string) {
            const data = Encode(this.client).addModel(_id, _version, _address);
            return Call<Tx, {
                error: number;
            }>(this.client, this.address, data, false, (exec: Uint8Array) => {
                return Decode(this.client, exec).addModel();
            });
        }
        getActiveModel(_id: Buffer) {
            const data = Encode(this.client).getActiveModel(_id);
            return Call<Tx, [string]>(this.client, this.address, data, true, (exec: Uint8Array) => {
                return Decode(this.client, exec).getActiveModel();
            });
        }
        getModel(_id: Buffer, _version: [number, number, number]) {
            const data = Encode(this.client).getModel(_id, _version);
            return Call<Tx, [string]>(this.client, this.address, data, true, (exec: Uint8Array) => {
                return Decode(this.client, exec).getModel();
            });
        }
        getModelAtIndex(_idx: number) {
            const data = Encode(this.client).getModelAtIndex(_idx);
            return Call<Tx, [string]>(this.client, this.address, data, true, (exec: Uint8Array) => {
                return Decode(this.client, exec).getModelAtIndex();
            });
        }
        getNumberOfModels() {
            const data = Encode(this.client).getNumberOfModels();
            return Call<Tx, {
                size: number;
            }>(this.client, this.address, data, true, (exec: Uint8Array) => {
                return Decode(this.client, exec).getNumberOfModels();
            });
        }
        getSystemOwner() {
            const data = Encode(this.client).getSystemOwner();
            return Call<Tx, [string]>(this.client, this.address, data, true, (exec: Uint8Array) => {
                return Decode(this.client, exec).getSystemOwner();
            });
        }
        modelAddresses() {
            const data = Encode(this.client).modelAddresses();
            return Call<Tx, [string]>(this.client, this.address, data, true, (exec: Uint8Array) => {
                return Decode(this.client, exec).modelAddresses();
            });
        }
        modelIsActive(_id: Buffer) {
            const data = Encode(this.client).modelIsActive(_id);
            return Call<Tx, [boolean]>(this.client, this.address, data, true, (exec: Uint8Array) => {
                return Decode(this.client, exec).modelIsActive();
            });
        }
        modelIsRegistered(_model: string) {
            const data = Encode(this.client).modelIsRegistered(_model);
            return Call<Tx, [boolean]>(this.client, this.address, data, true, (exec: Uint8Array) => {
                return Decode(this.client, exec).modelIsRegistered();
            });
        }
        registerActiveModel(_id: Buffer, _model: string) {
            const data = Encode(this.client).registerActiveModel(_id, _model);
            return Call<Tx, void>(this.client, this.address, data, false, (exec: Uint8Array) => {
                return Decode(this.client, exec).registerActiveModel();
            });
        }
        transferSystemOwnership(_newOwner: string) {
            const data = Encode(this.client).transferSystemOwnership(_newOwner);
            return Call<Tx, void>(this.client, this.address, data, false, (exec: Uint8Array) => {
                return Decode(this.client, exec).transferSystemOwnership();
            });
        }
    }
    export const Encode = <Tx>(client: Provider<Tx>) => { return {
        addModel: (_id: Buffer, _version: [number, number, number], _address: string) => { return client.encode("441F8116", ["bytes32", "uint8[3]", "address"], _id, _version, _address); },
        getActiveModel: (_id: Buffer) => { return client.encode("210F8A55", ["bytes32"], _id); },
        getModel: (_id: Buffer, _version: [number, number, number]) => { return client.encode("1101EC3B", ["bytes32", "uint8[3]"], _id, _version); },
        getModelAtIndex: (_idx: number) => { return client.encode("B8CB2516", ["uint256"], _idx); },
        getNumberOfModels: () => { return client.encode("665584A8", []); },
        getSystemOwner: () => { return client.encode("7F692A2A", []); },
        modelAddresses: () => { return client.encode("D427D000", []); },
        modelIsActive: (_id: Buffer) => { return client.encode("FD72C2FA", ["bytes32"], _id); },
        modelIsRegistered: (_model: string) => { return client.encode("6E81FC5D", ["address"], _model); },
        registerActiveModel: (_id: Buffer, _model: string) => { return client.encode("5D8FF678", ["bytes32", "address"], _id, _model); },
        transferSystemOwnership: (_newOwner: string) => { return client.encode("0A452AD6", ["address"], _newOwner); }
    }; };
    export const Decode = <Tx>(client: Provider<Tx>, data: Uint8Array) => { return {
        addModel: (): {
            error: number;
        } => {
            const [error] = client.decode(data, ["uint256"]);
            return { error: error };
        },
        getActiveModel: (): [string] => { return client.decode(data, ["address"]); },
        getModel: (): [string] => { return client.decode(data, ["address"]); },
        getModelAtIndex: (): [string] => { return client.decode(data, ["address"]); },
        getNumberOfModels: (): {
            size: number;
        } => {
            const [size] = client.decode(data, ["uint256"]);
            return { size: size };
        },
        getSystemOwner: (): [string] => { return client.decode(data, ["address"]); },
        modelAddresses: (): [string] => { return client.decode(data, ["address"]); },
        modelIsActive: (): [boolean] => { return client.decode(data, ["bool"]); },
        modelIsRegistered: (): [boolean] => { return client.decode(data, ["bool"]); },
        registerActiveModel: (): void => { return; },
        transferSystemOwnership: (): void => { return; }
    }; };
}